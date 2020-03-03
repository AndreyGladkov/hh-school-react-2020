import React, { Component } from "react";

import "./productCard.less";


export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: props.productData

    }
  }

  render() {

    return (
      <div className="product-card js-product-card" data-product={this.state.productData.dataName}>
        <div className="product-card__image-container">
          <img className="product-card__image" src={this.state.productData.image} alt={this.state.productData.name} />
        </div>
        <div className="product-card__name">{this.state.productData.name}</div>
        <div className="product-card__price">{this.state.productData.price}</div>
        <div className="product-card__description">{this.state.productData.description}</div>
        <button className="button product-card__order-button">Заказать</button>
      </div>
    )
  }
}