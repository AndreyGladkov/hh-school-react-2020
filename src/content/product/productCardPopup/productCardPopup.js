import React, { Component } from "react";
import Radio from "../../../components/common/radio-box/radio-box";
import Button from "../../../components/common/button/button";
import OrderForm from "../../OrderForm/OrderForm";
import Modal from "../../../structure/structurePopup/structurePopup";
import "../product-card.less";

export default class ProductCardPopup extends Component {
    constructor(props) {
        super(props);
        this.onOutsideClick = this.handleClickOutside.bind(this);
        this.state = {
            productCardBlock: props.productCardBlock,
            productData: props.productData,
            closeOpenedCard: props.closeOpenedCard,
            showForm: false,
            sizeChecked: ""
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
        const productData = this.state.productData;

        const submitButtonModifierArr = ["submit", "blue"];

        if (productData.sizes && !this.state.sizeChecked)
            submitButtonModifierArr.push("disabled");


        const productCardBlockExtJSX = (
            <React.Fragment>
                {this.state.productCardBlock}
                <h4 className="product-card__description">
                    {this.state.productData.description}
                </h4>
                {this.getProductCardSizes(
                    this.state.productData.sizes,
                    this.state.sizeChecked
                )}
            </React.Fragment>
        );


        const orderFormJSX = (
            <OrderForm
                sizeChecked={this.state.sizeChecked}
                closeOpenedCard={this.props.closeOpenedCard}
                productCardJSX={productCardBlockExtJSX}
            />
        );

        const productCardPopupJSX = (
            <div className="popup">
                <div className="popup-container">
                    <div className="popup-container__button-close">
                        <Button title={"Закрыть"} type="icon" modifierArr={["close"]}
                            onClickHandler={() => {
                                this.state.closeOpenedCard();
                            }}
                        />
                    </div>
                    {productCardBlockExtJSX}
                    <div className="product-card__button-submit">
                        <Button title={"Заказать"} modifierArr={submitButtonModifierArr}
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