import React from "react";

import Size from "./size";

import {currentCurrency} from "../variables";

export default function(props) {
    return (
        <div className="column column_s-1 column_m-2 column_l-4">
            <div className="position-product-card">
                <div className="js-popular-product product-card" data-product-id={props.id}>
                    <div className="product-card__image-container">
                        <img className="product-card__image" src={props.image} alt={props.name}/>
                        {props.sale && <div className={`product-card__sale ${props.type === "full" && "product-card__sale_full"}`}>sale</div>}
                    </div>
                    <div className={`product-card__name ${props.type === "full" && "product-card__name_full"}`}>{props.name}</div>
                    <div className="product-card__price">
                        {props.oldPrice && <span className="product-card__old-price">{props.oldPrice}{currentCurrency}</span>}
                        {props.price}{currentCurrency}
                    </div>
                    <div className="js-dropdown-product dropdown-product" data-dropdown-id={props.id}></div>
                    {props.type === "full" && <div className="js-order-product-description product-card__description">{props.description}</div>}
                    {props.type === "full" && <div className="js-order-product-sizes product-card__sizes">
                    {props.sizes.map((el) => 
                        <Size 
                            key={el}
                            name={el}
                        />
                        )} 
                    </div>}
                </div>
            </div>
        </div>
    );
}