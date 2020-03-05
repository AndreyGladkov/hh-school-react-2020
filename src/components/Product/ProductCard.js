import React, { Fragment } from "react";
import { ColumnsWrapper, Row, Column } from '../Common/Grid/Grid';
import "./ProductCard.less";
import OrderForm from './../../components/OrderForm/OrderForm';

function Sizes(props) {
    
    if (!Array.isArray(props.data)) return null;
   
    const sizes = props.data.map((item, index) =>
        <div className="product-card__size" key={index}>
            <label className="radio-box">
                <input className="radio-box__input" type="radio" name="size"
                    value={item} onClick={props.changeSizeHandler} {...((props.defaultSize === item) ? {checked: true}: {})} />
                <span className="radio-box__text">{item}</span>
            </label>
        </div>
    );

    return (
        <div className="product-card__sizes">
            {sizes}
        </div>
    )
}

export class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedSize: "",
            disableButton: props.product.sizes.length,
            hideDetails: props.hideDetails || true,
            showOrderForm: false,
            product: {
                name: props.product.name,
                description: props.product.description,
                image: props.product.image,
                price: props.product.price,
                currency: props.product.currency,
                sizes: props.product.sizes
            }
        };

        this.changeSizeHandler = this.changeSizeHandler.bind(this);
        this.orderProductHandler = this.orderProductHandler.bind(this);
        this.closeOrderForm = this.closeOrderForm.bind(this);
        this.productCardHover = this.productCardHover.bind(this);
    }

    changeSizeHandler(e) {
        const checkedSize = e.target.value;
        this.setState({
            checkedSize: checkedSize,
            disableButton: false
        });
    }

    orderProductHandler() {
        this.setState({
            showOrderForm: true
        });
    }

    closeOrderForm() {
        this.setState({
            showOrderForm: false
        });
    }

    productCardHover() {
        let hideDetails = this.state.hideDetails;
        this.setState({
            hideDetails: !hideDetails
        })
    }

    render() {
        return (
            <Fragment>
                {(this.state.showOrderForm) ? <OrderForm closeFormHandler={this.closeOrderForm} product={this.state.product} checkedSize={this.state.checkedSize}/> : null}
                <Column quantityColumnsS="1"
                    quantityColumnsM="2"
                    quantityColumnsL="4">
                    <div className="product-card" onMouseOver={this.productCardHover} onMouseOut={this.productCardHover}>
                        <div className="product-card__image-container">
                            <img className="product-card__image" src={this.state.product.image} alt={this.state.product.name} />
                        </div>
                        <div className="product-card__name">{this.state.product.name}</div>
                        <div className="product-card__price">
                            {this.state.product.price} {this.state.product.currency}
                        </div>
                        <div className={`product-card__details ${(this.state.hideDetails) ? "" : "product-card__details_show"}`}>
                            <div className="product-card__description">{this.state.product.description}
                            </div>
                            <Sizes data={this.state.product.sizes} changeSizeHandler={this.changeSizeHandler} />
                            <button className={`button button__long default-button ${(this.state.disableButton) ? "default-button__disabled" : ""}`} onClick={this.orderProductHandler}>Заказать</button>
                        </div>
                    </div>
                </Column>
            </Fragment>
        )
    }

}

export class OrderingProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disableButton: props.product.sizes.length,
            product: {
                name: props.product.name,
                description: props.product.description,
                image: props.product.image,
                price: props.product.price,
                currency: props.product.currency,
                sizes: props.product.sizes
            }
        };
    }

    render() {
        return (
            <Fragment>
                <div className="product-card">
                    <div className="product-card__image-container">
                        <img className="product-card__image" src={this.state.product.image} alt={this.state.product.name} />
                    </div>
                    <div className="product-card__name">{this.state.product.name}</div>
                    <div className="product-card__price">
                        {this.state.product.price} {this.state.product.currency}
                    </div>
                    <div className="product-card__description">{this.state.product.description}
                    </div>
                    <Sizes data={this.state.product.sizes} changeSizeHandler={this.props.changeSizeHandler} defaultSize={this.props.checkedSize} />
                </div>
            </Fragment>
        )
    }

}
