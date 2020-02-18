import React, { Component } from "react";
import { LayoutColumn } from "../../common/Layout/Layout";
import { GlobalContext } from "../../../GlobalContext";
import ProductCardPopup from "../ProductCardPopup/ProductCardPopup";
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
      mobileSize: 768,
      orderForm: null
    };
  }

  static contextType = GlobalContext;

  /* Метод: изменения состояния в зависимости от размера экрана */
  handleWindowResize() {
    if (window.innerWidth >= this.state.mobileSize) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }
  }

  /* Метод: если попап для мобилок, то 
  потребуется body overflow hidden */
  setBodyOverflow() {
    /* При открытии попапа для мобилок запретить скроллинг body */
    if (this.state.isMobile && this.state.isCardOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  componentDidUpdate() {
    this.setBodyOverflow();
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
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
      <div className="product-card" onClick={this.onCardClickHandler}>
        <div className="product-card__image-container">
          <img
            className="product-card__image"
            src={`${this.context.imagesPath}${productData.image}`}
            alt={productData.name}
          />
        </div>
        {productData.salePrice ? (
          <div className="product-card__sale">sale</div>
        ) : null}
        <div className="product-card__name">{productData.name}</div>
        {priceBlock}
      </div>
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

    /*
      Карточка продукта рендерится всегда -  {productCardJSX}.
      Если не моб. и карточка открыта - показать попап в том же DOM-контейнере, где и карточка продукта.
      Если моб. и карточка открыта - показать попап в модальном окне. 
    */
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
