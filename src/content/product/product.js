import React, { Component } from "react";
import { LayoutRow, LayoutWrapper } from "../../structure/layout/layout";
import ProductCard from "./productCard/productCard";
import "./product-card.less";

export default class product extends Component {
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
            <section className="product">
                <LayoutWrapper>
                    <h2 className="product__header">Популярные товары</h2>
                    <LayoutRow>{products}</LayoutRow>
                </LayoutWrapper>
            </section>
        );
    }
}