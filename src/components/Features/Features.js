import React, { Component } from "react";
import { LayoutRow, LayoutWrapper } from "./../common/Layout/Layout";
import Feature from "./Feature/Feature";
import "./Features.less";
import "./Feature/Feature.less";

/* Компонент Features*/
export default class Features extends Component {
  state = {
    features: [
      {
        description: "Быстрая доставка по всей России",
        image: "support@3x.png"
      },
      {
        description: "100% гарантия возврата и подлинность товара",
        image: "return@3x.png"
      },
      {
        description: "Круглосуточная служба поддержки",
        image: "delivery@3x.png"
      }
    ]
  };

  render() {
    const features = this.state.features.map((feature, index) => {
      return <Feature featureData={feature} key={index} />;
    });

    return (
      <section className="features">
        <LayoutWrapper>
          <LayoutRow>{features}</LayoutRow>
        </LayoutWrapper>
      </section>
    );
  }
}
