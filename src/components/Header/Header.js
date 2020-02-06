import React, { Component } from "react";
import { LayoutWrapper } from "./../common/Layout/Layout";
import Logo from "./../common/Logo/Logo";
import Navigation from "./../common/Navigation/Navigation";
import "./Header.less";

/* Компонент-секция Header.
Включает в себя:
- логотип
- навигацию по категориям товаров
- кнопку поиска по сайту
- вход в личный кабинет
 */
export default class Header extends Component {
  state = {
    linksConfig: [
      { url: "/", title: "Одежда" },
      { url: "/", title: "Сумки" },
      { url: "/", title: "Аксессуары" },
      { url: "/", title: "Офисные принадлежности" }
    ]
  };

  render() {
    return (
      <section className="header">
        <LayoutWrapper>
          <div className="header__content">
            <div className="header__logo">
              <Logo url={"/"} src={"../../images/logo.svg"} alt={"hh.ru"} />
            </div>
            <Navigation linksConfig={this.state.linksConfig} />
          </div>
        </LayoutWrapper>
      </section>
    );
  }
}
