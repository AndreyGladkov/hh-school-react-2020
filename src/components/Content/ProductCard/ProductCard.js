import React, { Component } from "react";
import { LayoutColumn } from "./../../common/Layout/Layout";
import { GlobalContext } from "./../../../GlobalContext";
import "./ProductCard.less";

/* Компонент ProductCard.
Принимает: 
- productData      | object |    (объект с данными товара)
Использует глобальный контекст GlobalContext (путь до картинок)
*/
export default function ProductCard(props) {
  if (!props.productData) return;

  const productData = props.productData;

  return (
    <GlobalContext.Consumer>
      {({ imagesPath }) => (
        <LayoutColumn sColumnQnt={"1"} mColumnQnt={"2"} lColumnQnt={"4"}>
          <div className="product-card">
            <div className="product-card__image-container">
              <img
                className="product-card__image"
                src={`${imagesPath}${productData.image}`}
                alt={productData.name}
              />
            </div>
            <div className="product-card__name">{productData.name}</div>
            <div className="product-card__price">
              {productData.price} {productData.currency}
            </div>
          </div>
        </LayoutColumn>
      )}
    </GlobalContext.Consumer>
  );
}
