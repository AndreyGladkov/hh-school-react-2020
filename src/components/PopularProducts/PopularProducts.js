import React from "react";
import "./PopularProducts.less";
import { ProductCard } from './../Product/ProductCard';
import { ColumnsWrapper, Row, Column } from '../Common/Grid/Grid';


export default function PopularProducts(props) {

    const popularProducts = props.data.map(item => <ProductCard
        product={{
            name: item.name,
            image: item.image,
            description: item.description,
            sizes: item.sizes,
            currency: item.currency,
            price: item.price
        }}
        key={item.id}
    />);

    return (
        <section className="content-section">
            <ColumnsWrapper>
                <h2 className="heading heading_level-2">Популярные товары</h2>
                <Row>
                    {popularProducts}
                </Row>
            </ColumnsWrapper>
        </section>
    )
}