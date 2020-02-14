import React, { Component } from "react";
import Input from "./../common/Input/Input";
import Radio from "./../common/Radio/Radio";
import Button from "./../common/Button/Button";
import {
  LayoutRow,
  LayoutWrapper,
  LayoutColumn
} from "./../common/Layout/Layout";
import { validators } from "./validators/validators";
import "./OrderForm.less";

export default class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      controls: {
        /* Конфигурация используемых контроллов */
        fullName: {
          name: "fullName",
          value: "",
          withLabel: false,
          labelTitle: "",
          placeholder: "ФИО",
          readOnly: false,
          autocomplete: "off",
          modifierArr: [],
          disabled: false,
          onChangeHandler: this.onChangeHandler,
          valid: false,
          shouldValidate: true,
          errorMessage: "",

          required: true,
          validityFunctions: [validators.isEmptyField, validators.isBigString]
        },
        email: {
          name: "email",
          value: "",
          withLabel: false,
          labelTitle: "",
          placeholder: "Электронная почта",
          readOnly: false,
          autocomplete: "off",
          modifierArr: [],
          disabled: false,
          onChangeHandler: this.onChangeHandler,
          valid: false,
          shouldValidate: true,
          errorMessage: "",

          required: true,
          validityFunctions: [validators.isNotEmail]
        },
        countryCode: {
          name: "countryCode",
          value: "+7",
          withLabel: false,
          labelTitle: "",
          placeholder: "",
          readonly: true,
          autocomplete: "off",
          modifierArr: ["tel-country-code"],
          disabled: false,
          onChangeHandler: null,
          valid: true,
          shouldValidate: false,
          errorMessage: "",

          required: true,
          validityFunctions: []
        },
        operatorCode: {
          name: "operatorCode",
          value: "",
          withLabel: false,
          labelTitle: "",
          placeholder: "Код",
          readOnly: false,
          autocomplete: "off",
          modifierArr: ["tel-operator-code"],
          disabled: false,
          onChangeHandler: this.onChangeHandler,
          valid: false,
          shouldValidate: true,

          required: true,
          validityFunctions: [validators.isNotOperatorCode]
        },
        telNumber: {
          name: "telNumber",
          value: "",
          withLabel: false,
          labelTitle: "",
          placeholder: "Номер",
          readOnly: false,
          autocomplete: "off",
          modifierArr: ["tel-number"],
          disabled: false,
          onChangeHandler: this.onChangeHandler,
          valid: false,
          shouldValidate: true,

          required: true,
          validityFunctions: [validators.isNotTelNumber]
        },
        selfPickup: {
          name: "deliveryMethod",
          value: "selfPickup",
          withLabel: true,
          labelTitle: "Самовывоз",
          disabled: false,
          checked: false,
          modifierArr: ["sqared"],
          onChangeHandler: this.onChangeHandler,

          required: true
        },
        deliveryPickup: {
          name: "deliveryMethod",
          value: "deliveryPickup",
          withLabel: true,
          labelTitle: "Доставка",
          disabled: false,
          checked: true,
          modifierArr: ["sqared"],
          onChangeHandler: this.onChangeHandler,

          required: true
        }
      }
    };
  }

  /* Метод: универсальный хэндлер для контроллов */
  onChangeHandler(e) {
    const control = e.target;
    const controls = { ...this.state.controls };

    const invalidValidator = controls[
      control.name
    ].validityFunctions.find(validator => validator.func(control));

    controls[control.name].valid = invalidValidator ? false : true;
    controls[control.name].errorMessage = invalidValidator
      ? invalidValidator.errorMessage
      : "";

    this.setState({ controls });
  }

  render() {
    /* ФИО, email*/
    const mainContacts = ["fullName", "email"];
    const mainContactsControlsJSX = mainContacts.map((controlName, index) => {
      return (
        <div className="form__input-block" key={index}>
          <Input
            name={this.state.controls[controlName].name}
            value={this.state.controls[controlName].value}
            withLabel={this.state.controls[controlName].withLabel}
            labelTitle={this.state.controls[controlName].labelTitle}
            placeholder={this.state.controls[controlName].placeholder}
            readOnly={this.state.controls[controlName].readOnly}
            autocomplete={this.state.controls[controlName].autocomplete}
            modifierArr={this.state.controls[controlName].modifierArr}
            disabled={this.state.controls[controlName].disabled}
            onChangeHandler={this.onChangeHandler}
            valid={this.state.controls[controlName].valid}
            shouldValidate={this.state.controls[controlName].shouldValidate}
            errorMessage={this.state.controls[controlName].errorMessage}
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
          name={this.state.controls[controlName].name}
          value={this.state.controls[controlName].value}
          withLabel={this.state.controls[controlName].withLabel}
          labelTitle={this.state.controls[controlName].labelTitle}
          placeholder={this.state.controls[controlName].placeholder}
          readOnly={this.state.controls[controlName].readOnly}
          autocomplete={this.state.controls[controlName].autocomplete}
          modifierArr={this.state.controls[controlName].modifierArr}
          disabled={this.state.controls[controlName].disabled}
          onChangeHandler={this.onChangeHandler}
          valid={this.state.controls[controlName].valid}
          shouldValidate={this.state.controls[controlName].shouldValidate}
          errorMessage={this.state.controls[controlName].errorMessage}
        />
      );
    });

    /* Cпособ доставки */
    const deliveryMethods = ["selfPickup", "deliveryPickup"];
    const deliveryMethodsJSX = deliveryMethods.map((controlName, index) => {
      return (
        <div className="form__radio-button" key={index}>
          <Radio
            name={this.state.controls[controlName].name}
            value={this.state.controls[controlName].value}
            withLabel={this.state.controls[controlName].withLabel}
            labelTitle={this.state.controls[controlName].labelTitle}
            checked={this.state.controls[controlName].checked}
            disabled={this.state.controls[controlName].disabled}
            modifierArr={this.state.controls[controlName].modifierArr}
            onChangeHandler={null}
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
                console.log("form is closed");
              }}
            />
          </div>
          <LayoutRow>
            <LayoutColumn sColumnQnt={"1"} mColumnQnt={"2"} lColumnQnt={"4"}>
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
            </LayoutColumn>
          </LayoutRow>
        </LayoutWrapper>
      </form>
    );
  }
}
