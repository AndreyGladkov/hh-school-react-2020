import React from "react";

import FormSection from "./form-section/form-section";
import ProductCard from "../product-card/product-card";

import {products} from "../variables";

export default class PopupSection extends React.PureComponent {

    render() {
        return (
            <section className="popup-section">
                <div className="columns-wrapper">
                    <div className="popup-content">
                        <div className="popup-header">
                            <h1 className="heading">Оформление заказа</h1>
                            <div className="js-order-close nav-close"></div>
                        </div>
                        <div className="columns-row">
                            <div className="column column_s-2 column_m-3 column_l-6">
                                <FormSection/>
                            </div>
                            <div className="column column_s-2 column_m-3 column_l-6">
                                <div className="popup-content-order-product">
                                    <ProductCard 
                                        type="full" 
                                        key={products[3].id} 
                                        name={products[3].name} 
                                        image={products[3].image} 
                                        sale={products[3].sale}
                                        price={products[3].price}
                                        oldPrice={products[3].oldPrice}
                                        description={products[3].description}
                                        popup={true}
                                        sizes={products[3].sizes}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    // function openForm() {
    //     form.style.display = "block";
    //     // window.setTimeout(function(){
    //     //     form.style.opacity = 1;
    //     // },0);
    //     window.document.body.style.overflow = "hidden";
    // }
}
