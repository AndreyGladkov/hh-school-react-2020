import React, { Component } from "react";
import { LayoutWrapper } from "./../common/Layout/Layout";
import Navigation from "./../common/Navigation/Navigation";
import Link from "./../common/Link/Link";
import "./Navbar.less";

/* Компонент-секция Navbar.
Включает в себя:
- местоположение (Город)
- навигацию по сайту
 */
export default class Navbar extends Component {
  state = {
    area: { city: "Москва", url: "/", modifierArr: ["dark-grey"] },
    linksConfig: [
      { url: "/", title: "Шоурум", modifierArr: ["blue"] },
      { url: "/", title: "Оплата", modifierArr: ["blue"] },
      { url: "/", title: "Доставка", modifierArr: ["blue"] },
      { url: "/", title: "Самовывоз", modifierArr: ["blue"] },
      { url: "/", title: "Контактная информация", modifierArr: ["blue"] }
    ]
  };

  render() {
    return (
      <section className="navbar">
        <LayoutWrapper>
          <div className="navbar__content">
            <Link
              url={this.state.area.url}
              title={this.state.area.city}
              modifierArr={this.state.area.modifierArr}
            />
            <div className="navbar__fill"></div>
            <Navigation linksConfig={this.state.linksConfig} />
          </div>
        </LayoutWrapper>
      </section>
    );
  }
}
