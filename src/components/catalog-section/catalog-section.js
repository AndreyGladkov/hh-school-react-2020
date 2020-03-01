import React from "react";

import ProductCard from "../product-card/product-card";

export default class CatalogSection extends React.PureComponent {

    state = {
        productActive: null
    }

    productRefs = [];

    componentDidMount(){
        this.props.requestAction();
        window.addEventListener("click",(event) => {
            let ind = this.state.productActive;
            if (ind !== null && !(this.productRefs[ind].current.contains(event.target))) {
               this.setState({productActive: null})
            }
        }, true)
    }

    componentDidUpdate() {
        if (this.productRefs.length !== this.props.product.length)
        {
            this.productRefs = this.props.product.map(() => React.createRef());
            console.log(this.productRefs);
        }
    }

    render() {
        return (
            <section className="content-section">
                <div className="columns-wrapper">
                    <h2 className="heading heading_level-2">Популярные товары</h2>
                    <div className="columns-row">
                        {this.props.product.map((el, ind) => 
                            <ProductCard 
                                key={el.id} 
                                name={el.name} 
                                image={el.image} 
                                sale={el.sale}
                                price={el.price}
                                oldPrice={el.oldPrice}
                                description={el.description}
                                sizes={el.sizes}
                                catalog={true}
                                active={this.state.productActive}
                                full={this.state.productActive === ind}
                                current={ind}
                                productRef={this.productRefs[ind]}
                                onClick={
                                    () => {
                                        this.setState({productActive: ind});
                                    }
                                }
                            />
                        )}
                    </div>
                </div>
            </section>                
        );
    }
}