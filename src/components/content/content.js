import React from "react";
import ProductCard from "./product-card";

const Content = (props) => {
  const productsData = props.productsData;

  const productsJSX = Object.values(productsData).map(
    (productData, index) => {
      return <ProductCard key={index} productData={productData} />;
    }
  );

  return (
      <section className="content-section">
      <div className="columns-wrapper">
        <h2 className="heading heading_level-2">Популярные товары</h2>
        <div className="columns-row">
          {productsJSX}
        </div>
      </div>
    </section>
  )
}
export default Content;

