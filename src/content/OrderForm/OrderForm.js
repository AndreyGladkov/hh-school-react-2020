import React, { Component } from "react";
import Input from "../../components/common/input/input";
import Radio from "../../components/common/radio-box/radio-box";
import Button from "../../components/common/button/button";
import Checkbox from "../../components/common/checkbox/checkbox";
import Select from "../../components/common/select/select";
import Textarea from "../../components/common/textarea/textarea";
import { LayoutRow, LayoutWrapper, LayoutColumn } from "../../structure/layout/layout";
import { config } from "./config/config";
import "./OrderForm.less";

export default class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            controls: config,
            isValid: false,
            productCardJSX: props.productCardJSX || null,
            sizeChecked: props.sizeChecked || "",
            closeOpenedCard: props.closeOpenedCard
        };
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
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

    onChangeHandler(e) {
        const control = e.target;
        const controls = { ...this.state.controls };
        controls[control.name].value = control.value;

        if ("shouldValidate" in controls[control.name]) {
            const invalidValidator = controls[
                control.name
            ].validityFunctions.find(validator => validator.func(control));

            controls[control.name].valid = invalidValidator ? false : true;
            controls[control.name].errorMessage = invalidValidator
                ? invalidValidator.errorMessage
                : "";
        }

        if ("checkedValue" in controls[control.name]) {
            controls[control.name].checkedValue = control.value;
        }

        if ("checked" in controls[control.name]) {
            controls[control.name].checked = !controls[control.name].checked;
        }

        const isValid = this.isValid() ? true : false;
        this.setState({ controls, isValid });
    }

    isValid() {
        const controls = { ...this.state.controls };
        for (let control in controls) {
            if (controls[control].required && !controls[control].valid) {
                return false;
            }
        }
        return true;
    }

    sendForm() {
        console.log(this.state.controls, `sizeChecked: ${this.state.sizeChecked}`);
        this.props.closeOpenedCard();
    }

    render() {
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

        const deliveryGroup = "deliveryMethod";
        const deliveryMethods = ["selfPickup", "deliveryPickup"];
        const deliveryMethodsJSX = deliveryMethods.map((controlName, index) => {
            return (
                <div className="form__radio-button" key={index}>
                    <Radio
                        name={this.state.controls[deliveryGroup][controlName].name}
                        value={this.state.controls[deliveryGroup][controlName].value}
                        withLabel={
                            this.state.controls[deliveryGroup][controlName].withLabel
                        }
                        labelTitle={
                            this.state.controls[deliveryGroup][controlName].labelTitle
                        }
                        checked={this.state.controls[deliveryGroup][controlName].checked}
                        disabled={this.state.controls[deliveryGroup][controlName].disabled}
                        modifierArr={
                            this.state.controls[deliveryGroup][controlName].modifierArr
                        }
                        onChangeHandler={this.onChangeHandler}
                    />
                </div>
            );
        });

        const paymentGroup = "paymentMethod";
        const paymentMethods = ["paymentOnline", "paymentCash", "paymentCard"];
        const paymentMethodsJSX = paymentMethods.map((controlName, index) => {
            return (
                <div className="form__payment-method" key={index}>
                    <Radio
                        name={this.state.controls[paymentGroup][controlName].name}
                        value={this.state.controls[paymentGroup][controlName].value}
                        withLabel={this.state.controls[paymentGroup][controlName].withLabel}
                        labelTitle={
                            this.state.controls[paymentGroup][controlName].labelTitle
                        }
                        checked={this.state.controls[paymentGroup][controlName].checked}
                        disabled={this.state.controls[paymentGroup][controlName].disabled}
                        modifierArr={
                            this.state.controls[paymentGroup][controlName].modifierArr
                        }
                        onChangeHandler={this.onChangeHandler}
                    />
                </div>
            );
        });

        return (
            <form className="form">
                <LayoutWrapper>
                    <div className="form__button-close">
                        <Button title={"Закрыть"} type="icon" modifierArr={["close"]}
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
                            {this.state.controls.deliveryMethod.checkedValue === "deliveryPickup" && (
                                <React.Fragment>
                                    <div className="form__section">
                                        <div className="form__delivery-address">
                                            <h4 className="heading heading_level-4">Адрес</h4>
                                            <Select
                                                value={this.state.controls.cityLocataion.value}
                                                name={this.state.controls.cityLocataion.name}
                                                modifierArr={
                                                    this.state.controls.cityLocataion.modifierArr
                                                }
                                                onClickHandler={this.onChangeHandler}
                                                apiAddress={
                                                    this.state.controls.cityLocataion.apiAddress
                                                }
                                            />
                                            <div className="form__textarea">
                                                <Textarea
                                                    placeholder={
                                                        this.state.controls.addressExpaned.placeholder
                                                    }
                                                    name={this.state.controls.addressExpaned.name}
                                                    modifierArr={
                                                        this.state.controls.addressExpaned.modifierArr
                                                    }
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
                                        name={this.state.controls.smsNotification.name}
                                        value={this.state.controls.smsNotification.value}
                                        withLabel={this.state.controls.smsNotification.withLabel}
                                        labelTitle={this.state.controls.smsNotification.labelTitle}
                                        checked={this.state.controls.smsNotification.checked}
                                        disabled={this.state.controls.smsNotification.disabled}
                                        modifierArr={
                                            this.state.controls.smsNotification.modifierArr
                                        }
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
                                {this.state.productCardJSX}
                            </div>
                        </LayoutColumn>
                    </LayoutRow>
                </LayoutWrapper>
            </form>
        );
    }
}