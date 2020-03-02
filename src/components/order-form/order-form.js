import React, { Component } from "react";
import Button from "./../common/button";

import Options from "./../common/options";

export default class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedSize: props.checkedSize || "no size",
      formErrors: {
        name: null,
        email: null,
        codeCountry: null,
        mobileNumber: null,
        address: null
      },
      checkedDelivery: "",
      formValid: false,
      formData: {
        delivery: "delivery",
        city: "Город",
        pay: "online"
      }
    };
    this.productData = props.productData || null;
    this.productCardJSX = props.productCardJSX || null;
    this.closeOpenedCard = props.closeOpenedCard;
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "";
  }

  componentDidUpdate(prevProps) {
    if (this.props.checkedSize !== prevProps.checkedSize) {
      this.setState({ checkedSize: this.props.checkedSize });
    }
  }

  sendForm() {
    const formData = Object.assign({}, this.state.formData);
    formData["product-name"] = this.productData.name;
    formData["checkedSize"] = this.state.checkedSize;
    console.log(formData);
    this.props.closeOpenedCard();
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        formData: {
          ...this.state.formData,
          [name]: value
        }
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    const fieldValue = value.trim();
    const formErrors = Object.assign({}, this.state.formErrors);

    switch (fieldName) {
      case "name":
        const nameValid = fieldValue.length > 0;
        formErrors.name = nameValid ? "" : "Поле должно быть заполнено";
        break;
      case "email":
        const emailValid = fieldValue.match(
          /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
        );
        formErrors.email = emailValid ? "" : "Введите корректный email";
        break;
      case "code-country":
        const codeCountryValid = fieldValue.match(/\b\d{3}\b/);
        formErrors.codeCountry = codeCountryValid ? "" : "3 цифры";
        break;
      case "mobile-number":
        const mobileNumberValid = fieldValue.match(/\b\d{7}\b/);
        formErrors.mobileNumber = mobileNumberValid ? "" : "7 цифр";
        break;
      case "address":
        const addressValid = fieldValue.length > 0;
        formErrors.address = addressValid ? "" : "Поле должно быть заполнено";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: formErrors
      },
      this.validateForm
    );
  }

  validateForm() {
    const isValid = Object.values(this.state.formErrors).every(this.isValid);
    this.setState({ formValid: isValid });
  }

  isValid(error) {
    return error === "" && error !== null;
  }

  errorClass(error) {
    return error !== null && (error.length === 0 ? "" : "input_error");
  }

  render() {
    return (
      <form className="form">
        <div className="columns-wrapper">
          <Button
            theme="form__button-close"
            text="Закрыть карточку товара"
            onClickHandler={e => {
              e.preventDefault();
              this.setState({ isOpened: false });
              this.props.closeOpenedCard();
            }}
          />

          <div className="columns-row">
            <div className="column column_s-2 column_m-3 column_l-7">
              <div className="form__head">
                <div className="heading">Оформление заказа</div>
                <h3 className="heading heading_level-3">Контактное лицо</h3>
                {/*ФИО*/}
                <div className="form__item">
                  <input
                    type="text"
                    name="name"
                    className={`input ${this.errorClass(
                      this.state.formErrors.name
                    )}`}
                    placeholder="ФИО"
                    required
                    onChange={this.handleUserInput}
                  />
                  <span className="form__error-message">
                    {this.state.formErrors.name}
                  </span>
                </div>
                {/*Электронная почта*/}
                <div className="form__item">
                  <input
                    type="text"
                    name="email"
                    className={`input ${this.errorClass(
                      this.state.formErrors.email
                    )}`}
                    placeholder="Электронная почта"
                    required
                    onChange={this.handleUserInput}
                  />
                  <span className="form__error-message">
                    {this.state.formErrors.email}
                  </span>
                </div>
                {/*Телефон*/}
                <div className="form__phone">
                  <div className="form__phone-wrap">
                    <input
                      type="text"
                      className="input input_phone-pre"
                      defaultValue="+7"
                    />
                  </div>
                  <div className="form__phone-wrap">
                    <input
                      type="text"
                      name="code-country"
                      className={`input input_phone-code ${this.errorClass(
                        this.state.formErrors.codeCountry
                      )}`}
                      placeholder="Код"
                      maxLength="3"
                      required
                      onChange={this.handleUserInput}
                    />
                    <span className="form__error-message">
                      {this.state.formErrors.codeCountry}
                    </span>
                  </div>
                  <div className="form__phone-wrap_grow">
                    <input
                      type="text"
                      name="mobile-number"
                      className={`input input_phone-number ${this.errorClass(
                        this.state.formErrors.mobileNumber
                      )}`}
                      placeholder="Номер"
                      maxLength="7"
                      required
                      onChange={this.handleUserInput}
                    />
                    <span className="form__error-message">
                      {this.state.formErrors.mobileNumber}
                    </span>
                  </div>
                </div>
              </div>
              {/*Способ получения заказа*/}
              <div className="form__section">
                <h3 className="heading heading_level-3">
                  Способ получения заказа
                </h3>
                <div className="form__radio">
                  <label
                    className="form__label popup-order__form-label"
                    htmlFor="delivery-1"
                  >
                    <input
                      type="radio"
                      id="delivery-1"
                      name="delivery"
                      className="radio"
                      onClick={e => {
                        this.setState(
                          {
                            checkedDelivery: "pickup",
                            formErrors: {
                              ...this.state.formErrors,
                              address: ""
                            },
                            formData: {
                              ...this.state.formData,
                              delivery: "pickup",
                              city: null,
                              address: null
                            }
                          },
                          this.validateForm
                        );
                      }}
                    />
                    <span className="radio-button popup-order__form-button">
                      Самовывоз
                    </span>
                  </label>
                  <label
                    className="form__label popup-order__form-label"
                    htmlFor="delivery-2"
                  >
                    <input
                      type="radio"
                      id="delivery-2"
                      name="delivery"
                      className="radio"
                      defaultValue="devivery"
                      onClick={e => {
                        this.setState(
                          {
                            checkedDelivery: "delivery",
                            formErrors: {
                              ...this.state.formErrors,
                              address: null
                            },
                            formData: {
                              ...this.state.formData,
                              delivery: "delivery"
                            }
                          },
                          this.validateForm
                        );
                      }}
                      defaultChecked
                    />
                    <span className="radio-button popup-order__form-button">
                      Доставка
                    </span>
                  </label>
                </div>
              </div>
              {/*Адрес*/}
              {this.state.checkedDelivery !== "pickup" && (
                <div className="form__section">
                  <div className="form__delivery-address">
                    <h3 className="heading heading_level-3">Адрес</h3>
                    <select
                      name="city"
                      className="select select_arrows"
                      onChange={e => {
                        const city = e.target.value;
                        this.setState({
                          formData: { ...this.state.formData, city }
                        });
                      }}
                    >
                      <Options theme="option-city" />
                    </select>
                  </div>
                  <div className="form__item">
                    <textarea
                      name="address"
                      className={`textarea ${this.errorClass(
                        this.state.formErrors.address
                      )}`}
                      maxLength="300"
                      required
                      onChange={this.handleUserInput}
                    ></textarea>
                    <span className="form__error-message">
                      {this.state.formErrors.address}
                    </span>
                  </div>
                </div>
              )}
              {/*Оплата*/}
              <div className="form__items-section">
                <h3 className="heading heading_level-3">Оплата</h3>
                <div className="form__item">
                  <label htmlFor="online" className="form__label">
                    <input
                      type="radio"
                      name="pay"
                      id="online"
                      className="radio"
                      defaultValue="online"
                      defaultChecked
                      onChange={this.handleUserInput}
                    />
                    <span className="radio-box"></span>
                    <span className="radio-text">Online-оплата</span>
                  </label>
                </div>
                <div className="form__item">
                  <label htmlFor="cash" className="form__label">
                    <input
                      type="radio"
                      name="pay"
                      id="cash"
                      className="radio"
                      value="cash"
                      onChange={this.handleUserInput}
                    />
                    <span className="radio-box"></span>
                    <span className="radio-text">Наличными</span>
                  </label>
                </div>
                <div className="form__item">
                  <label htmlFor="card" className="form__label">
                    <input
                      type="radio"
                      name="pay"
                      id="card"
                      className="radio"
                      value="card"
                      onChange={this.handleUserInput}
                    />
                    <span className="radio-box"></span>
                    <span className="radio-text">Картой при получении</span>
                  </label>
                </div>
              </div>
              {/*Уведомления*/}
              <div className="form__items-section">
                <h3 className="heading heading_level-3">Уведомления</h3>
                <div className="form__item">
                  <label htmlFor="sms" className="form__label">
                    <input
                      type="checkbox"
                      name="sms"
                      id="sms"
                      className="checkbox"
                      onClick={e => {
                        const sms = e.target.checked;
                        this.setState({
                          formData: { ...this.state.formData, sms }
                        });
                      }}
                    />
                    <span className="checkbox-box"></span>
                    <span className="checkbox-text">
                      Хочу получать SMS уведомления
                    </span>
                  </label>
                </div>
              </div>
              <div className="form__button-submit">
                <Button
                  theme="button popup-order__form-button popup-order__form-button_submit"
                  text="Оформить заказ"
                  onClickHandler={e => {
                    e.preventDefault();
                    this.sendForm();
                  }}
                  disabled={this.state.formValid ? false : true}
                />
              </div>
            </div>
            <div className="column column_s-2 column_m-3 column_l-5">
              <div className="form__product-card">{this.productCardJSX}</div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
