import React from "react";

import FormSection from "./form-section/form-section";
import ProductCard from "../product-card/product-card";

import {products} from "../variables";

export default class PopupSection extends React.PureComponent {

    state = {
        startAnimationOpen: false,
        startAnimationClose: false,
        //Информация о заказе
        fio: null,
        email: null,
        country: null,
        code: null,
        number: null,
        delivery: null,
        city: null,
        address: null,
        payment: null,
        notification: null,
        product: null,
        size: null
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.showOrderForm && this.props.showOrderForm)
        {
            this.setState({
                product: this.props.product[this.props.selectedProduct].id,
                size: this.props.product[this.props.selectedProduct].sizes[this.props.selectedSize],
                startAnimationOpen: true
            })
        }
        if (this.props.showOrderForm)
        {  
            window.document.body.style.overflow = "hidden";
        }
    }

    render() {
        if (!this.props.showOrderForm) return null;
        return (
            <section 
                className={`popup-section 
                            ${this.state.startAnimationOpen && "popup-section_opacity1"} 
                            ${this.state.startAnimationClose && "popup-section_opacity0"}`}
                            onAnimationEnd={
                                () => {
                                    if (this.state.startAnimationClose)
                                        this.props.closeOrderFormAction()
                                }
                            }>
                <div className="columns-wrapper">
                    <div className="popup-content">
                        <div className="popup-header">
                            <h1 className="heading">Оформление заказа</h1>
                            <div 
                                className="js-order-close nav-close"
                                onClick={ () => {
                                    this.setState({startAnimationClose: true, startAnimationOpen: false});
                                }}
                                >
                            </div>
                        </div>
                        <div className="columns-row">
                            <div className="column column_s-2 column_m-3 column_l-6">
                                <FormSection 
                                    changePopupState={this.changePopupState}
                                />
                                <div className="form-order-group">
                                    <button 
                                        className="button form-order-confirm-button_button"
                                        onClick={this.print}>
                                        Оформить заказ
                                    </button>
                                </div>
                            </div>
                            <div className="column column_s-2 column_m-3 column_l-6">
                                <div className="popup-content-order-product">
                                    <ProductCard 
                                        key={this.props.product[this.props.selectedProduct].id} 
                                        name={this.props.product[this.props.selectedProduct].name} 
                                        image={this.props.product[this.props.selectedProduct].image} 
                                        sale={this.props.product[this.props.selectedProduct].sale}
                                        price={this.props.product[this.props.selectedProduct].price}
                                        oldPrice={this.props.product[this.props.selectedProduct].oldPrice}
                                        description={this.props.product[this.props.selectedProduct].description}
                                        popup={true}
                                        sizes={this.props.product[this.props.selectedProduct].sizes}
                                        choosenSize={this.props.selectedSize}
                                        changePopupState={this.changePopupState}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    changePopupState = (info) => {
        this.setState(info);
    }

    print = () => {
        if (this.state.fio && 
            this.state.email &&
            this.state.country &&
            this.state.code && 
            this.state.number &&
            this.state.address 
            )
        {
            console.log(
                "ФИО: " + this.state.fio + "\n" + 
                "Email: " + this.state.email + "\n" +
                "Номер: " + this.state.country + " " +
                            this.state.code + " " +
                            this.state.number + "\n" +
                "Тип доставки: " + this.state.delivery + "\n" +
                "Город: " + this.state.city + "\n" +
                "Адрес: " + this.state.address + "\n" +
                "Тип оплаты: " + this.state.payment + "\n" +
                "Уведомления: " + this.state.notification + "\n" +
                "Продукт: " + this.state.product + "\n" +
                "Размер: " + this.state.size
            )
        }
        else 
        {
            console.log("Заполните корректно все поля!");
        }
    }
}
