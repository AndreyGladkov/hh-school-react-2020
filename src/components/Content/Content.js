import React, { Component } from "react";
import { LayoutRow, LayoutWrapper } from "./../common/Layout/Layout";
import ProductCard from "./ProductCard/ProductCard";
import "./Content.less";

/* Компонент Content.
Принимает: 
- productDataArr      | array of object |    (массив объектов с данными товаров)
*/
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDataArr: props.productDataArr
    };
  }

  render() {
    const products = Object.values(this.state.productDataArr).map(
      (productData, index) => {
        return <ProductCard productData={productData} key={index} />;
      }
    );

    return (
      <section className="content">
        <LayoutWrapper>
          <h2 className="content__header">Популярные товары</h2>
          <LayoutRow>{products}</LayoutRow>
        </LayoutWrapper>
      </section>
    );
  }
}
