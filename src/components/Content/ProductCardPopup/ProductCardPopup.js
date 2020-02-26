import React, { Component } from "react";
import Radio from "../../common/Radio/Radio";
import Button from "../../common/Button/Button";
import OrderForm from "../../OrderForm/OrderForm";
import Modal from "../../common/Modal/Modal";
import "./ProductCardPopup.less";

/* Компонент ProductCardPopup.
Принимает: 
- productData      | object |       (объект с данными товара для размеров и т.д)
- productCardBlock | JSX object |   (готовый JSX карточки продукта (без размеров и т.д))  
- closeOpenedCard  | function |     (функция закрытия попапа карточки от родительского компонента)
*/
export default class ProductCardPopup extends Component {
  constructor(props) {
    super(props);
    this.onOutsideClick = this.handleClickOutside.bind(this);
    this.state = {
      showForm: false,
      sizeChecked: ""
    };
  }

  /* Метод: обработчик клика вне области попапа */
  handleClickOutside(e) {
    e.stopImmediatePropagation();
    if (e.target.closest(".popup") || e.target.closest(".form")) return;
    this.props.closeOpenedCard();
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
      const [sizeValue, sizeAvailiable] = size;
      return (
        <Radio
          key={index}
          checked={sizeChecked == sizeValue ? true : false}
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
    const productData = this.props.productData;

    const submitButtonModifierArr = ["submit", "blue"];
    /* Класс disabled для кнопки заказать (если у товара есть размер) */
    if (productData.sizes && !this.state.sizeChecked)
      submitButtonModifierArr.push("disabled");

    /* JSX расширенной карточки продукта (описание, размеры) */
    const productCardBlockExtJSX = (
      <React.Fragment>
        {this.props.productCardBlock}
        <h4 className="product-card__description">
          {this.props.productData.description}
        </h4>
        {this.getProductCardSizes(
          this.props.productData.sizes,
          this.state.sizeChecked
        )}
      </React.Fragment>
    );

    /* JSX формы заказа */
    const orderFormJSX = (
      <OrderForm
        sizeChecked={this.state.sizeChecked}
        closeOpenedCard={this.props.closeOpenedCard}
        productCardJSX={productCardBlockExtJSX}
      />
    );

    /* JSX попапа карточки продукта */
    const productCardPopupJSX = (
      <div className="popup">
        <div className="popup-container">
          <div className="popup-container__button-close">
            <Button
              title={"Закрыть"}
              type="icon"
              modifierArr={["close"]}
              onClickHandler={() => {
                this.props.closeOpenedCard();
              }}
            />
          </div>
          {productCardBlockExtJSX}
          <div className="product-card__button-submit">
            <Button
              title={"Заказать"}
              modifierArr={submitButtonModifierArr}
              onClickHandler={() => this.setState({ showForm: true })}
            />
          </div>
        </div>
      </div>
    );

    return (
      <React.Fragment>
        {productCardPopupJSX}
        {this.state.showForm && <Modal>{orderFormJSX}</Modal>}
      </React.Fragment>
    );
  }
}
