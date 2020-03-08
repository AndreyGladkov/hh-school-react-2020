import React, { Component } from "react";
import { LayoutColumn } from "../../../structure/layout/layout";
import { GlobalContext } from "../../../GlobalContext";
import ProductCardPopup from "../productCardPopup/productCardPopup";
import Modal from "../../../structure/structurePopup/structurePopup";
import "../product-card.less";

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

    handleWindowResize() {
        if (window.innerWidth >= this.state.mobileSize) {
            this.setState({ isMobile: false });
        } else {
            this.setState({ isMobile: true });
        }
    }

    setBodyOverflow() {
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

    getProductCard(productData) {
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

    onCardClickHandler() {
        if (this.state.isCardOpened) return;
        this.setState({ isCardOpened: true });
    }

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