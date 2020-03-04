import React from "react";
import { ColumnsWrapper, Row, Column } from '../Common/Grid/Grid';
import "./OrderForm.less";
import closeButton from './close-button.svg';
import { OrderingProductCard } from './../Product/ProductCard'


export default class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orderData: {
                name: props.product.name,
                size: props.checkedSize,
                price: props.product.price
            }
        }
        this.sendOrder = this.sendOrder.bind(this);
    }

    sendOrder() {
        console.log(this.state.orderData);
    }

    render() {
        return (
            <div className="order-form-wrapper">
                <form className="order-form">
                    <ColumnsWrapper>
                        <div className="close-button-form">
                            <a href="#"><img class="close-button" src={closeButton} onClick={this.props.closeFormHandler} /></a>
                        </div>
                        <Row>
                            <Column quantityColumnsS="2"
                                quantityColumnsM="3"
                                quantityColumnsL="7">
                                <h1 className="heading">Оформление заказа</h1>
                                <fieldset className="order-form__section">
                                    <legend className="order-form__legend">Контактное лицо</legend>
                                    <div className="input-wrapper"><input className="input" type="text" name="username"
                                        placeholder="ФИО" />
                                    </div>
                                    <div className="input-wrapper"><input className="input" type="email" name="email"
                                        placeholder="Электронная почта" /></div>
                                    <div className="telephone-input">
                                        <div className="telephone-input__country-code">
                                            <input className="input" type="text" name="code" value="+7" disabled />
                                        </div>
                                        <div className="telephone-input__code">
                                            <div className="input-wrapper"> <input className="input" type="text"
                                                name="code" placeholder="Код" />
                                            </div>
                                        </div>
                                        <div className="telephone-input__number">
                                            <div className="input-wrapper"><input className="input" type="text"
                                                name="tel" placeholder="Номер" />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="order-form__section">
                                    <legend className="order-form__legend">Способ получения</legend>
                                    <div className="order-form__delivery-way-radio-wrapper">
                                        <div className="order-form__delivery-way-item">
                                            <label className="radio-box">
                                                <input className="radio-box__input" type="radio" name="delivery-way"
                                                    value="Самовывоз" />
                                                <span className="radio-box__text">Самовывоз</span>
                                            </label>
                                        </div>
                                        <div className="order-form__delivery-way-item">
                                            <label className="radio-box">
                                                <input className="radio-box__input" type="radio" name="delivery-way"
                                                    value="Доставка" checked />
                                                <span className="radio-box__text">Доставка</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="order-form__section">
                                    <legend className="order-form__legend">Адрес</legend>
                                    <div className="order-form__sity-select">
                                        <select className="select">
                                            <option disabled value="null" className="adress-select__option" selected>
                                                Город</option>
                                        </select>
                                    </div>
                                    <textarea className="textarea" name="adress" placeholder="Адрес"
                                        required></textarea>
                                </fieldset>
                                <fieldset className="order-form__section">
                                    <legend className="order-form__legend">Оплата</legend>
                                    <div className="radio-wrapper">
                                        <label for="online-payment" className="radio">
                                            <input type="radio" name="pay" id="online-payment" value="Онлайн"
                                                className="radio__input" checked />
                                            <span className="radio__box"></span>
                                            <span className="radio__text">Онлайн</span>
                                        </label>
                                        <label for="cash-payment" className="radio">
                                            <input type="radio" name="pay" id="cash-payment" value="Наличными"
                                                className="radio__input" />
                                            <span className="radio__box"></span>
                                            <span className="radio__text">Наличными</span>
                                        </label>
                                        <label for="card-payment" className="radio">
                                            <input type="radio" name="pay" id="card-payment" value="Картой при получении"
                                                className="radio__input" />
                                            <span className="radio__box"></span>
                                            <span className="radio__text">Картой при получении</span>
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset className="order-form__section">
                                    <legend className="order-form__legend">Уведомления</legend>
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox-sms" className="checkbox__input"
                                            value="false" />
                                        <span className="checkbox__box"></span>
                                        <span className="checkbox__text">Хочу получать SMS уведомления</span>
                                    </label>
                                </fieldset>
                                <button className="button button__long default-button" onClick={this.sendOrder}>Оформить заказ</button>
                            </Column>
                            <div className="column column_s-2 column_m-3 column_l-5">
                                <div className="product-card-form-wrapper">
                                    <OrderingProductCard
                                        product={{
                                            name: this.props.product.name,
                                            image: this.props.product.image,
                                            description: this.props.product.description,
                                            sizes: this.props.product.sizes,
                                            currency: this.props.product.currency,
                                            price: this.props.product.price
                                        }}
                                        checkedSize={this.state.checkedSize}
                                    />
                                </div>
                            </div>
                        </Row>
                    </ColumnsWrapper>
                </form>
            </div>
        )
    }

}