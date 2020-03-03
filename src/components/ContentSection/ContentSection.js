const axios = require("axios");

import React, { Component } from "react";
import { Wrapper, Row, Columns } from "../common/Layout/Layout";
import ProductCard from "../ProductCard/ProductCard";

import './product-1.jpg';
import './product-2.jpg';
import './product-3.jpg';
import './product-4.jpg';
import './product-5.jpg';
import './product-6.jpg';

import "./contentSection.less";


export default class ContentSection extends Component {

  state = {
    dataProducts: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:9200/api/feelinglucky")
      .then(response => { this.setState({ dataProducts: response.data }) })
  }


  render() {

    const products = this.state.dataProducts.map(product => {
      return (
        <Columns columnS={1} columnM={2} columnL={4} key={product.id}>
          <ProductCard productData={product} key={product.id} />
        </Columns>
      )
    });

    return (
      <section className="content-section">
        <Wrapper>
          <h2 className="heading heading_level-2">Популярные товары</h2>
          <Row>{products}</Row>
        </Wrapper>
      </section>
    )
  }
}