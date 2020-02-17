import React, { Component } from "react";
import ReactDOM from "react-dom";
import Radio from "../../../common/Radio/Radio";
import Button from "../../../common/Button/Button";
import OrderForm from "../../../OrderForm/OrderForm";
import "./ProductCardPopup.less";

/* Компонент ProductCardPopup.
Принимает: 
- productData      | object |       (объект с данными товара)
- productCardBlock | JSX object |   (JSX карточки продукта)  
- closeOpenedCard  | function |     (функция закрытия попапа карточки)
*/
export default class ProductCardPopup extends Component {
  constructor(props) {
    super(props);
    this.onOutsideClick = this.handleClickOutside.bind(this);
    this.state = {
      productCardBlock: props.productCardBlock,
      productData: props.productData,
      closeOpenedCard: props.closeOpenedCard,
      sizeChecked: "",
      showForm: false
    };
  }

  handleClickOutside(e) {
    e.stopImmediatePropagation();
    if (e.target.closest(".popup") || e.target.closest(".form")) return;
    this.state.closeOpenedCard();
  }

  componentDidMount() {
    document.addEventListener("click", this.onOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onOutsideClick);
  }

  /* Метод: возвращает JSX блока размеров для продукта.
  Принимает:
  -productDataSizes |object|
  */
  getProductCardSizes(productDataSizes, sizeChecked) {
    if (!productDataSizes) return null;

    const sizes = Object.entries(productDataSizes).map((size, index) => {
      /* size = ['size-value', 'size-availiable'] */
      const [sizeValue, sizeAvailiable] = size;
      return (
        <Radio
          key={index}
          checked={sizeChecked == size[0] ? true : false}
          name={"size"}
          value={sizeValue}
          withLabel={true}
          labelTitle={sizeValue}
          disabled={!sizeAvailiable}
          modifierArr={["sqared", "size"]}
          onChangeHandler={e => this.setState({ sizeChecked: e.target.value })}
        />
      );
    });

    return <div className="product-card__sizes">{sizes}</div>;
  }

  render() {
    const productData = this.state.productData;

    const submitButtonModifierArr = ["submit", "blue"];
    /* Класс disabled для кнопки заказать (если у товара есть размер) */
    if (productData.sizes && !this.state.sizeChecked)
      submitButtonModifierArr.push("disabled");

    const getOrderForm = () => {
      return (
        <OrderForm
          isOpened={true}
          sizeChecked={this.state.sizeChecked}
          getProductCard={
            <React.Fragment>
              {this.state.productCardBlock}
              <h4 className="product-card__description">
                {productData.description}
              </h4>
              {this.getProductCardSizes(
                productData.sizes,
                this.state.sizeChecked
              )}
            </React.Fragment>
          }
        />
      );
    };

    if (!this.state.showForm) {
      return (
        <div className="popup">
          <div className="popup-container">
            <div className="popup-container__button-close">
              <Button
                title={"Закрыть"}
                type="icon"
                modifierArr={["close"]}
                onClickHandler={() => {
                  this.state.closeOpenedCard();
                }}
              />
            </div>

            {this.state.productCardBlock}
            <h4 className="product-card__description">
              {productData.description}
            </h4>
            {this.getProductCardSizes(productData.sizes)}

            <div className="product-card__button-submit">
              <Button
                title={"Заказать"}
                modifierArr={submitButtonModifierArr}
                onClickHandler={() => {
                  this.setState({ showForm: true });
                }}
              />
            </div>
          </div>
        </div>
      );
    } else {
      document.body.style.overflow = "hidden";
      return ReactDOM.createPortal(getOrderForm(), document.body);
    }
  }
}
