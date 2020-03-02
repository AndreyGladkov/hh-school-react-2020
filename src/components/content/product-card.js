import React, { Component } from "react";
import PopupCard from "./popup-card";
import Modal from "../common/modal/modal";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isCardOpened: false
    };
    this.mobileScreenSize = 768;
    this.productData = props.productData;
    this.windowResize = this.windowResizeHandler.bind(this);
    this.onClickCardHandler = this.onClickCardHandler.bind(this);
    this.closeOpenedCard = this.closeOpenedCard.bind(this);
    this.setBodyOverflow = this.setBodyOverflow.bind(this);
  }

  windowResizeHandler() {
    if (window.innerWidth < this.mobileScreenSize) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  onClickCardHandler() {
    if (this.state.isCardOpened) return;
    this.setState({ isCardOpened: true });
  }

  closeOpenedCard() {
    this.setState({ isCardOpened: false });
  }

  setBodyOverflow() {
    if (this.state.isMobile && this.state.isCardOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.windowResize);
    this.windowResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResize);
  }

  componentDidUpdate() {
    this.setBodyOverflow();
  }

  getProductCard(productData) {
    const productPrice = productData.salePrice ? (
      <div className="product-card__price">
        <div className="product-card__old-price">
          {productData.price} {productData.currency}
        </div>
        {productData.salePrice} {productData.currency}
      </div>
    ) : (
      <div className="product-card__price">
        {productData.price} {productData.currency}
      </div>
    );

    return (
      <div className="product-card" onClick={this.onClickCardHandler}>
        <div className="product-card__image-container">
          <img
            className="product-card__image"
            src={`images/${productData.image}`}
            alt={productData.name}
          />
        </div>
        {productData.salePrice ? (
          <div className="product-card__sale">sale</div>
        ) : null}
        <div className="product-card__name">{productData.name}</div>
        {productPrice}
      </div>
    );
  }

  render() {
    if (!this.productData) return null;

    const productCardJSX = this.getProductCard(this.productData);

    const popupCardJSX = (
      <PopupCard
        productCardJSX={productCardJSX}
        productData={this.productData}
        closeOpenedCard={this.closeOpenedCard}
      />
    );

    return (
      <div className="column column_s-1 column_m-2 column_l-4">
          {productCardJSX}

          {this.state.isMobile && this.state.isCardOpened && (
            <Modal>{popupCardJSX}</Modal>
          )}

          {!this.state.isMobile && this.state.isCardOpened && popupCardJSX}
      </div>
    );
  }
}
