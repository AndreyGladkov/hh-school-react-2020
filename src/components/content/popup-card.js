import React, { Component, Fragment } from "react";
import RadioSize from "../common/radio-size";
import Button from "../common/button";
import Modal from "../common/modal";
import OrderForm from "../order-form";

export default class PopupCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedSize: "",
      showForm: false
    };
    this.productData = props.productData;
    this.productCardJSX = props.productCardJSX;
    this.outSideClick = this.onClickOutsideHandler.bind(this);
    this.closeOpenedCard = props.closeOpenedCard;
  }

  onClickOutsideHandler(e) {
    if (e.target.closest(".popup") || e.target.closest(".form")) return;
    this.closeOpenedCard();
  }

  componentDidMount() {
    document.addEventListener("click", this.outSideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.outSideClick);
  }

  getProductCardSizes(productDataSizes, checkedSize) {
    if (!productDataSizes) return null;

    const sizesJSX = Object.entries(productDataSizes).map((size, index) => {
      const [valueSize, availableSize] = size;
      return (
        <RadioSize
          key={index}
          theme="radio"
          value={valueSize}
          checked={checkedSize === valueSize ? true : false}
          disabled={!availableSize}
          onChangeHandler={e => this.setState({ checkedSize: e.target.value })}
        />
      );
    });

    return <div className="product-card__sizing-container">{sizesJSX}</div>;
  }

  render() {
    const fullProductCardJSX = (
      <Fragment>
        {this.productCardJSX}
        <h4 className="product-card__description">
          {this.productData.description}
        </h4>
        {this.getProductCardSizes(
          this.productData.sizes,
          this.state.checkedSize
        )}
      </Fragment>
    );

    const orderFormJSX = (
      <OrderForm
        checkedSize={this.state.checkedSize}
        closeOpenedCard={this.props.closeOpenedCard}
        productCardJSX={fullProductCardJSX}
        productData={this.productData}
      />
    );

    const PopupCardJSX = (
      <div className="popup">
        <div className="popup-container">
          <Button
            theme="popup-container__button-close"
            text="Закрыть"
            onClickHandler={() => {
              this.closeOpenedCard();
            }}
          />
          {fullProductCardJSX}
          <div className="product-card__button-submit">
            <Button
              theme="button popup__button-order"
              text="Заказать"
              disabled={this.productData.sizes && !this.state.checkedSize}
              onClickHandler={() => this.setState({ showForm: true })}
            />
          </div>
        </div>
      </div>
    );

    return (
      <Fragment>
        {PopupCardJSX}
        {this.state.showForm && <Modal>{orderFormJSX}</Modal>}
      </Fragment>
    );
  }
}

