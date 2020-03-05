import React from "react";
import { ColumnsWrapper, Row, Column } from '../Common/Grid/Grid';
import "./OrderForm.less";
import closeButton from './close-button.svg';
import { OrderingProductCard } from './../Product/ProductCard'

function ClientName(props) {
    return (
        <div className="input-wrapper"><input className="input" type="text" name="username"
            placeholder="ФИО" onChange={props.onChange} value={props.clientName} />
        </div>
    )
}

function Email(props) {
    return (
        <div className="input-wrapper"><input className="input" type="email" name="email"
            placeholder="Электронная почта" onChange={props.onChange} value={props.email} />
        </div>
    )
}

function Telephone(props) {
    return (
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
    )
}

function DeliveryMethods(props) {
    return (
        <fieldset className="order-form__section">
            <legend className="order-form__legend">Способ получения</legend>
            <div className="order-form__delivery-way-radio-wrapper">
                <div className="order-form__delivery-way-item">
                    <label className="radio-box">
                        <input className="radio-box__input" type="radio" name="delivery-way"
                            value="Самовывоз" onChange={props.onChange} checked={props.deliveryMethod === "Самовывоз"} />
                        <span className="radio-box__text">Самовывоз</span>
                    </label>
                </div>
                <div className="order-form__delivery-way-item">
                    <label className="radio-box">
                        <input className="radio-box__input" type="radio" name="delivery-way"
                            value="Доставка" onChange={props.onChange} checked={props.deliveryMethod === "Доставка"} />
                        <span className="radio-box__text">Доставка</span>
                    </label>
                </div>
            </div>
        </fieldset>
    )
}

function Adress(props) {
    let cities = props.cities.map(city =>
        <option value={city} className="adress-select__option">{city}</option>
    );
    return (
        <fieldset className="order-form__section">
            <legend className="order-form__legend">Адрес</legend>
            <div className="order-form__sity-select">
                <select className="select" onChange={props.onChangeCity}>
                    <option disabled value="Выберите город" className="adress-select__option" selected={(props.city === "Выберите город")}>
                        Выберите город</option>
                    {cities}
                </select>
            </div>
            <textarea className="textarea" name="adress" placeholder="Адрес" required onChange={props.onChangeAdress}></textarea>
        </fieldset>
    )
}

function PaymentMethods(props) {
    return (
        <fieldset className="order-form__section">
            <legend className="order-form__legend">Оплата</legend>
            <div className="radio-wrapper">
                <label for="online-payment" className="radio">
                    <input type="radio" name="pay" id="online-payment" value="Онлайн"
                        className="radio__input" checked={props.paymentMethod === "Онлайн"} onChange={props.onChange} />
                    <span className="radio__box"></span>
                    <span className="radio__text">Онлайн</span>
                </label>
                <label for="cash-payment" className="radio">
                    <input type="radio" name="pay" id="cash-payment" value="Наличными"
                        className="radio__input" checked={props.paymentMethod === "Наличными"} onChange={props.onChange} />
                    <span className="radio__box"></span>
                    <span className="radio__text">Наличными</span>
                </label>
                <label for="card-payment" className="radio">
                    <input type="radio" name="pay" id="card-payment" value="Картой при получении"
                        className="radio__input" checked={props.paymentMethod === "Картой при получении"} onChange={props.onChange} />
                    <span className="radio__box"></span>
                    <span className="radio__text">Картой при получении</span>
                </label>
            </div>
        </fieldset>
    )
}

function SmsNotification(props) {
    return (
        <fieldset className="order-form__section">
            <legend className="order-form__legend">Уведомления</legend>
            <label className="checkbox">
                <input type="checkbox" name="checkbox-sms" className="checkbox__input"
                     onChange={props.onChange}/>
                <span className="checkbox__box"></span>
                <span className="checkbox__text">Хочу получать SMS уведомления</span>
            </label>
        </fieldset>
    )
}

export default class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: props.product.name,
            checkedSize: props.checkedSize,
            price: props.product.price,
            paymentMethod: "Онлайн",
            adress: "",
            city: "Выберите город",
            smsNotification: false,
            deliveryMethod: "Доставка",
            telephone: "",
            email: "",
            clientName: "",
            cities: []
        }
        this.sendOrder = this.sendOrder.bind(this);
        this.clientNameHandler = this.clientNameHandler.bind(this);
        this.changeSizeHandler = this.changeSizeHandler.bind(this);
        this.changeDeliveryMethodHandler = this.changeDeliveryMethodHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAdressHandler = this.changeAdressHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changePaymentMethod = this.changePaymentMethod.bind(this);
        this.changeSmsNotification = this.changeSmsNotification.bind(this);
    }

    componentDidMount() {
        const cities = [];
        fetch('https://api.hh.ru/areas/113')
            .then(response => response.json())
            .then(data => {
                for (let area of data.areas) {
                    if (area.id.length <= 2) {
                        cities.push(area.name);
                    } else {
                        for (let city of area.areas) {
                            if (city.id.length <= 2) {
                                cities.push(city.name);;
                            }
                        }
                    }
                }
                this.setState({
                    cities: cities
                });
                return data;
            })
            .catch(err => console.log(err));
    }

    sendOrder() {
        console.log(this.state);
    }

    clientNameHandler(e) {
        let current = e.target.value;
        this.setState({
            clientName: current
        });
    }

    changeEmailHandler(e) {
        let current = e.target.value;
        this.setState({
            email: current
        });
    }

    changeSizeHandler(e) {
        const checkedSize = e.target.value;
        this.setState({
            checkedSize: checkedSize
        });
    }

    changeDeliveryMethodHandler(e) {
        let current = e.target.value;
        this.setState({
            deliveryMethod: current
        });
    }

    changeAdressHandler(e) {
        let current = e.target.value;
        this.setState({
            adress: current
        });
    }

    changeCityHandler(e) {
        let current = e.target.value;
        console.log(current);
        this.setState({
            city: current
        });
    }

    changePaymentMethod(e) {
        let current = e.target.value;
        this.setState({
            paymentMethod: current
        });
    }

    changeSmsNotification(e) {
        let current = e.target.checked;
        this.setState({
            smsNotification: current
        });
    }

    render() {

        return (
            <div className="order-form-wrapper">
                <form className="order-form">
                    <ColumnsWrapper>
                        <div className="close-button-form">
                            <a href="#"><img className="close-button" src={closeButton} onClick={this.props.closeFormHandler} /></a>
                        </div>
                        <Row>
                            <Column quantityColumnsS="2"
                                quantityColumnsM="3"
                                quantityColumnsL="7">
                                <h1 className="heading">Оформление заказа</h1>
                                <fieldset className="order-form__section">
                                    <legend className="order-form__legend">Контактное лицо</legend>
                                    <ClientName clientName={this.state.clientName} onChange={this.clientNameHandler} />
                                    <Email email={this.state.email} onChange={this.changeEmailHandler} />
                                    <Telephone telephone={this.state.telephone} />
                                </fieldset>
                                <DeliveryMethods deliveryMethod={this.state.deliveryMethod} onChange={this.changeDeliveryMethodHandler} />
                                <Adress city={this.state.city} cities={this.state.cities} onChangeAdress={this.changeAdressHandler} onChangeCity={this.changeCityHandler} />
                                <PaymentMethods paymentMethod={this.state.paymentMethod} onChange={this.changePaymentMethod} />
                                <SmsNotification smsNotification={this.state.smsNotification} onChange={this.changeSmsNotification}/>
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
                                        changeSizeHandler={this.changeSizeHandler}
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