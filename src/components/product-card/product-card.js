import React, { PureComponent } from "react";

import Size from "./size";

import {currentCurrency, products} from "../variables";

export default class CatalogSection extends PureComponent{

    state = {
        startAnimation: false,
        productFull: false,
        redirectButton: false
    }

    componentDidUpdate(prevProps, prevState){
        if (!prevProps.full && this.props.full)
        {
            this.setState({productFull: true})
        }
        if (prevProps.full && !this.props.full)
        {
            this.setState({productFull: false, startAnimation: false, redirectButton: false})
        }
        if (!prevState.productFull && this.state.productFull)
        {
            setTimeout(() => {this.setState({startAnimation: true})}, 0);
        }
    }

    render(){
        return (
            <div className="column column_s-1 column_m-2 column_l-4">
                <div className="position-product-card">
                    <div 
                        ref={this.props.productRef}
                        className={`product-card ${this.state.productFull && "product-card_dropdown"}`}
                        data-product-id={this.props.id} 
                        onClick={this.props.onClick}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                        >
                        <div className="product-card__image-container">
                            <img className="product-card__image" src={this.props.image} alt={this.props.name}/>
                            {this.props.sale && <div className={`product-card__sale ${this.props.popup && "product-card__sale_full"}`}>sale</div>}
                        </div>
                        <div className={`product-card__name ${this.props.popup && "product-card__name_full"}`}>{this.props.name}</div>
                        <div className="product-card__price">
                            {this.props.oldPrice && <span className="product-card__old-price">{this.props.oldPrice}{currentCurrency}</span>}
                            {this.props.price}{currentCurrency}
                        </div>
                        {(this.state.productFull || this.props.popup) && <div className={`js-dropdown-product dropdown-product ${this.state.startAnimation && "dropdown-product_opacity"}`}>
                            <div className="js-order-product-description product-card__description">{this.props.description}</div>
                            <div className="js-order-product-sizes product-card__sizes">
                                {this.props.sizes.map((el) => 
                                <Size 
                                    key={el}
                                    name={el}
                                    onClick={
                                        () => {
                                            this.setState({redirectButton: true});
                                        }
                                    }
                                />
                                )}
                            </div> 
                            {this.props.catalog && <div className="dropdown-button-container">
                                <button 
                                    className="js-dropdown-button button dropdown-button-container__button"
                                    disabled={!this.state.redirectButton}>
                                    Заказать
                                </button>
                            </div>}
                        </div>}
                    </div>
                </div>
            </div>
        );
    }

    // onMouseEnter = () => {
    //     if (this.props.active === null)
    //         this.setState({productFull: true});
    // }

    // onMouseLeave = () => {
    //     if (this.props.active !== this.props.current)
    //        this.setState({productFull: false, startAnimation: false});
    // }
}