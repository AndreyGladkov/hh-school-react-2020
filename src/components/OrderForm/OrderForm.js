import React, { Component } from "react";
import Input from "./../common/Input/Input";
import Radio from "./../common/Radio/Radio";
import Button from "./../common/Button/Button";
import Checkbox from "./../common/Checkbox/Checkbox";
import Select from "./../common/Select/Select";
import Textarea from "./../common/Textarea/Textarea";
import {
  LayoutRow,
  LayoutWrapper,
  LayoutColumn
} from "./../common/Layout/Layout";
import { controlsConfig } from "./controlsConfig/controlsConfig";
import "./OrderForm.less";

/* Компонент OrderForm.
Принимает: 
- productCardJSX   | JSX object |   (готовый JSX карточки продукта (расширенный)  
- sizeChecked      | bool |         (выбранный размер из предыдущего этапа заказа)
- closeOpenedCard  | function |     (функция закрытия попапа формы от родительского компонента)
*/
export default class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.controls = controlsConfig;
    this.state = {
      isValid: false,
      sizeChecked: props.sizeChecked || ""
    };
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
    /* Проверка валидности формы для отправки */
    const isValid = this.isValid() ? true : false;
    this.setState({ isValid });
  }

  componentWillUnmount() {
    document.body.style.overflow = "";
  }

  componentDidUpdate(prevProps) {
    if (this.props.sizeChecked !== prevProps.sizeChecked) {
      this.setState({ sizeChecked: this.props.sizeChecked });
    }
  }

  /* Метод: универсальный хэндлер для контроллов */
  onChangeHandler(e) {
    const control = e.target;
    const controls = { ...this.controls };
    controls[control.name].value = control.value;

    /* обработка контроллов, требующих валидации */
    if ("shouldValidate" in controls[control.name]) {
      const invalidValidator = controls[
        control.name
      ].validityFunctions.find(validator => validator.func(control));

      controls[control.name].valid = invalidValidator ? false : true;
      controls[control.name].errorMessage = invalidValidator
        ? invalidValidator.errorMessage
        : "";
    }

    /* обработка контроллов, представляющих собой группу выбора(radio-inputs) и имеющих checkedValue */
    if ("checkedValue" in controls[control.name]) {
      controls[control.name].checkedValue = control.value;
    }

    /* обработка контроллов имеющих параметр checked (ckeckbox-inputs) */
    if ("checked" in controls[control.name]) {
      controls[control.name].checked = !controls[control.name].checked;
    }

    /* Проверка валидности формы для отправки */
    const isValid = this.isValid() ? true : false;
    this.setState({ controls, isValid });
  }

  /* Метод: проверка на валидность форму перед отправкой */
  isValid() {
    const controls = { ...this.controls };
    for (let control in controls) {
      if (controls[control].required && !controls[control].valid) {
        return false;
      }
    }
    return true;
  }

  /* Метод: отправка формы (console.log полей) */
  sendForm() {
    console.log(this.controls, `sizeChecked: ${this.state.sizeChecked}`);
    this.props.closeOpenedCard();
  }

  render() {
    /* ФИО, email*/
    const mainContacts = ["fullName", "email"];
    const mainContactsControlsJSX = mainContacts.map((controlName, index) => {
      return (
        <div className="form__input-block" key={index}>
          <Input
            name={this.controls[controlName].name}
            value={this.controls[controlName].value}
            withLabel={this.controls[controlName].withLabel}
            labelTitle={this.controls[controlName].labelTitle}
            placeholder={this.controls[controlName].placeholder}
            readOnly={this.controls[controlName].readOnly}
            autocomplete={this.controls[controlName].autocomplete}
            modifierArr={this.controls[controlName].modifierArr}
            disabled={this.controls[controlName].disabled}
            onChangeHandler={this.onChangeHandler}
            valid={this.controls[controlName].valid}
            shouldValidate={this.controls[controlName].shouldValidate}
            errorMessage={this.controls[controlName].errorMessage}
          />
        </div>
      );
    });

    /* Номер телефона*/
    const telephone = ["countryCode", "operatorCode", "telNumber"];
    const telephoneJSX = telephone.map((controlName, index) => {
      return (
        <Input
          key={index}
          name={this.controls[controlName].name}
          value={this.controls[controlName].value}
          withLabel={this.controls[controlName].withLabel}
          labelTitle={this.controls[controlName].labelTitle}
          placeholder={this.controls[controlName].placeholder}
          readOnly={this.controls[controlName].readOnly}
          autocomplete={this.controls[controlName].autocomplete}
          modifierArr={this.controls[controlName].modifierArr}
          disabled={this.controls[controlName].disabled}
          onChangeHandler={this.onChangeHandler}
          valid={this.controls[controlName].valid}
          shouldValidate={this.controls[controlName].shouldValidate}
          errorMessage={this.controls[controlName].errorMessage}
        />
      );
    });

    /* Cпособ доставки */
    const deliveryGroup = "deliveryMethod";
    const deliveryMethods = ["selfPickup", "deliveryPickup"];
    const deliveryMethodsJSX = deliveryMethods.map((controlName, index) => {
      return (
        <div className="form__radio-button" key={index}>
          <Radio
            name={this.controls[deliveryGroup][controlName].name}
            value={this.controls[deliveryGroup][controlName].value}
            withLabel={this.controls[deliveryGroup][controlName].withLabel}
            labelTitle={this.controls[deliveryGroup][controlName].labelTitle}
            checked={this.controls[deliveryGroup][controlName].checked}
            disabled={this.controls[deliveryGroup][controlName].disabled}
            modifierArr={this.controls[deliveryGroup][controlName].modifierArr}
            onChangeHandler={this.onChangeHandler}
          />
        </div>
      );
    });

    /* Способ оплаты */
    const paymentGroup = "paymentMethod";
    const paymentMethods = ["paymentOnline", "paymentCash", "paymentCard"];
    const paymentMethodsJSX = paymentMethods.map((controlName, index) => {
      return (
        <div className="form__payment-method" key={index}>
          <Radio
            name={this.controls[paymentGroup][controlName].name}
            value={this.controls[paymentGroup][controlName].value}
            withLabel={this.controls[paymentGroup][controlName].withLabel}
            labelTitle={this.controls[paymentGroup][controlName].labelTitle}
            checked={this.controls[paymentGroup][controlName].checked}
            disabled={this.controls[paymentGroup][controlName].disabled}
            modifierArr={this.controls[paymentGroup][controlName].modifierArr}
            onChangeHandler={this.onChangeHandler}
          />
        </div>
      );
    });

    return (
      <form className="form">
        <LayoutWrapper>
          <div className="form__button-close">
            <Button
              title={"Закрыть"}
              type="icon"
              modifierArr={["close"]}
              onClickHandler={e => {
                e.preventDefault();
                this.setState({ isOpened: false });
                this.props.closeOpenedCard();
              }}
            />
          </div>
          <LayoutRow>
            <LayoutColumn sColumnQnt={"2"} mColumnQnt={"3"} lColumnQnt={"7"}>
              <div className="form__section">
                <div className="form__input-main-contacts">
                  <h1 className="heading heading_level-1">Оформление заказа</h1>
                  <h4 className="heading heading_level-4">Контактное лицо</h4>
                  {mainContactsControlsJSX}
                  <div className="form__input-tel">{telephoneJSX}</div>
                </div>
              </div>

              <div className="form__section">
                <h4 className="heading heading_level-4">
                  Способ получения заказа
                </h4>
                <div className="form__delivery-method">
                  {deliveryMethodsJSX}
                </div>
              </div>

              {this.controls.deliveryMethod.checkedValue ===
                "deliveryPickup" && (
                <React.Fragment>
                  <div className="form__section">
                    <div className="form__delivery-address">
                      <h4 className="heading heading_level-4">Адрес</h4>
                      <Select
                        value={this.controls.cityLocataion.value}
                        name={this.controls.cityLocataion.name}
                        modifierArr={this.controls.cityLocataion.modifierArr}
                        onClickHandler={this.onChangeHandler}
                        apiAddress={this.controls.cityLocataion.apiAddress}
                      />
                      <div className="form__textarea">
                        <Textarea
                          placeholder={this.controls.addressExpaned.placeholder}
                          name={this.controls.addressExpaned.name}
                          modifierArr={this.controls.addressExpaned.modifierArr}
                          onChangeHandler={this.onChangeHandler}
                        />
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )}

              <div className="form__section">
                <div className="form__payment-methods">
                  <h4 className="heading heading_level-4">Оплата</h4>
                  {paymentMethodsJSX}
                </div>
              </div>

              <div className="form__section">
                <div className="form__notification">
                  <h4 className="heading heading_level-4">Уведомления</h4>
                  <Checkbox
                    name={this.controls.smsNotification.name}
                    value={this.controls.smsNotification.value}
                    withLabel={this.controls.smsNotification.withLabel}
                    labelTitle={this.controls.smsNotification.labelTitle}
                    checked={this.controls.smsNotification.checked}
                    disabled={this.controls.smsNotification.disabled}
                    modifierArr={this.controls.smsNotification.modifierArr}
                    onChangeHandler={this.onChangeHandler}
                  />
                </div>
              </div>

              <div className="form__button-submit">
                <Button
                  title={"Оформить заказ"}
                  modifierArr={["submit", "blue", "form"]}
                  onClickHandler={e => {
                    e.preventDefault();
                    this.sendForm();
                  }}
                  disabled={this.state.isValid ? false : true}
                />
              </div>
            </LayoutColumn>

            <LayoutColumn sColumnQnt={"2"} mColumnQnt={"3"} lColumnQnt={"5"}>
              <div className="form__product-card">
                {this.props.productCardJSX}
              </div>
            </LayoutColumn>
          </LayoutRow>
        </LayoutWrapper>
      </form>
    );
  }
}
