import React, { Component } from "react";

import { LayoutColumn } from "../../common/Layout/Layout";
import { GlobalContext } from "../../../GlobalContext";
import ProductCardPopup from "./ProductCardPopup/ProductCardPopup";
import Modal from "../../common/Modal/Modal";

import "./ProductCard.less";

/* Компонент ProductCard.
Принимает: 
- productData      | object |    (объект с данными товара)
Использует глобальный контекст GlobalContext (путь до картинок)
*/
export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.onWindowResize = this.handleWindowResize.bind(this);
    this.onCardClickHandler = this.onCardClickHandler.bind(this);
    this.closeOpenedCard = this.closeOpenedCard.bind(this);
    this.setBodyOverflow = this.setBodyOverflow.bind(this);
    this.state = {
      productData: props.productData,
      isCardOpened: false,
      isMobile: false,
      mobileSize: 768
    };
  }

  static contextType = GlobalContext;

  handleWindowResize() {
    if (window.innerWidth >= this.state.mobileSize) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }
  }

  setBodyOverflow() {
    /* При открытии попапа для мобилок запретить скроллинг body */
    if (this.state.isMobile && this.state.isCardOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  componentDidUpdate() {
    /* Проверить, открыта ли карточка-попап как модальное окно(потребуется body overflow hidden) */
    this.setBodyOverflow();
  }

  componentDidMount() {
    console.log("Did mount");

    window.addEventListener("resize", this.onWindowResize);
    this.handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);

    /* Для верности сбросим overflow у body при размонтировании */
    document.body.style.overflow = "";
  }
  /* Метод: возвращает JSX основной карточки продукта (без размеров и т.д.) */
  getProductCard(productData) {
    /* Блок с ценой */
    const priceBlock = productData.salePrice ? (
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
      <React.Fragment>
        <div className="product-card" onClick={this.onCardClickHandler}>
          <div className="product-card__image-container">
            <img
              className="product-card__image"
              src={`${this.context.imagesPath}${productData.image}`}
              alt={productData.name}
            />
          </div>
          <div className="product-card__name">{productData.name}</div>
          {priceBlock}
        </div>
      </React.Fragment>
    );
  }

  /* Метод: обработчик клика по карточке продукта (попапа) */
  onCardClickHandler() {
    if (this.state.isCardOpened) return;
    this.setState({ isCardOpened: true });
  }

  /* Метод: закрытие открытой карточки продукта (попапа) */
  closeOpenedCard() {
    this.setState({ isCardOpened: false });
  }

  render() {
    if (!this.state.productData) return null;

    const productCardJSX = this.getProductCard(this.state.productData);

    const productCardPopupJSX = (
      <ProductCardPopup
        productCardBlock={productCardJSX}
        productData={this.state.productData}
        closeOpenedCard={this.closeOpenedCard}
      />
    );

    return (
      <LayoutColumn sColumnQnt={"1"} mColumnQnt={"2"} lColumnQnt={"4"}>
        {productCardJSX}

        {!this.state.isMobile && this.state.isCardOpened && productCardPopupJSX}

        {this.state.isMobile && this.state.isCardOpened && (
          <Modal>{productCardPopupJSX}</Modal>
        )}
      </LayoutColumn>
    );
  }
}
