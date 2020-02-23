import React from "react";

import ProductCard from "../product-card/product-card";

import {products} from "../variables";

export default function(props) {
    return (
        <section className="content-section">
            <div className="columns-wrapper">
                <h2 className="heading heading_level-2">Популярные товары</h2>
                <div className="columns-row">
                    {products.map((el) => 
                        <ProductCard 
                            key={el.id} 
                            name={el.name} 
                            image={el.image} 
                            sale={el.sale}
                            price={el.price}
                            oldPrice={el.oldPrice}
                        />
                    )}
                </div>
            </div>
        </section>                
    );
}