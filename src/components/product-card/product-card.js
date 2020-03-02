import React, { PureComponent } from "react";

import Size from "./size";

import {currentCurrency} from "../variables";

export default class CatalogSection extends PureComponent{

    state = {
        startAnimationOpen: false,
        productFull: false,
        redirectButton: false,
        choosenSize: null
    }

    componentDidUpdate(prevProps,prevState){
        if (!prevProps.full && this.props.full)
        {
            this.setState({productFull: true})
        }
        if (prevProps.full && !this.props.full)
        {
            this.setState({productFull: false, redirectButton: false})
        }
        if (!prevState.productFull && this.state.productFull)
        {
            this.setState({startAnimationOpen: true})
        }
    }

    render(){
        return (
            <div className="column column_s-1 column_m-2 column_l-4">
                <div className="position-product-card">
                    <div 
                        ref={this.props.productRef}
                        className={`product-card ${this.state.productFull && "product-card_dropdown"}`} 
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
                        {(this.state.productFull || this.props.popup) && 
                            <div className={`
                                dropdown-product 
                                ${(this.state.startAnimationOpen || this.props.popup)  && "dropdown-product_opacity"}`}>
                            <div className="product-card__description">{this.props.description}</div>
                            <div className="product-card__sizes">
                                {this.props.sizes.map((el, ind) => 
                                <Size 
                                    key={el}
                                    name={el}
                                    choosenSize={this.props.choosenSize === ind}
                                    onClick={
                                        () => {
                                            this.setState({redirectButton: true, choosenSize: ind});
                                            if (this.props.popup) this.props.changePopupState({size: el});
                                        }
                                    }
                                />
                                )}
                            </div> 
                            {this.props.catalog && <div className="dropdown-button-container">
                                <button 
                                    className="button dropdown-button-container__button"
                                    disabled={!this.state.redirectButton}
                                    onClick={
                                        () => {  
                                            this.props.showOrderFormAction(this.props.active,this.state.choosenSize);
                                        }
                                    }>
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
    //        this.setState({productFull: false, startAnimationOpen: false});
    // }
}