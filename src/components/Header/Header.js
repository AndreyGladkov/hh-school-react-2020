import React, { Component } from "react";
import { LayoutWrapper } from "./../common/Layout/Layout";
import Logo from "./../common/Logo/Logo";
import Button from "./../common/Button/Button";
import Navigation from "./../common/Navigation/Navigation";
import "./Header.less";

/* Компонент-секция Header.
Включает в себя:
- логотип
- навигацию по категориям товаров
- кнопку поиска по сайту
- вход в личный кабинет
Принимает:
- userLoggedIn  | bool |    (юзер залогинен или нет)
 */
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linksConfig: [
        { url: "/", title: "Одежда" },
        { url: "/", title: "Сумки" },
        { url: "/", title: "Аксессуары" },
        { url: "/", title: "Офисные принадлежности" }
      ]
    };
  }

  render() {
    return (
      <section className="header">
        <LayoutWrapper>
          <div className="header__content">
            <div className="header__logo">
              <Logo url={"/"} src={"../../images/logo.svg"} alt={"hh.ru"} />
            </div>
            <Navigation linksConfig={this.state.linksConfig} />
            <div className="header__fill"></div>
            <div className="header__button">
              <Button type="icon" modifierArr={["search"]} />
            </div>
            <div className="header__button">
              <Button type="icon" modifierArr={["login"]} />
            </div>
            <div className="header__button-login">
              <Button
                title={this.props.userLoggedIn ? "Войти" : "Выйти"}
                modifierArr={["login"]}
              />
            </div>
            <div className="header__button-menu">
              <Button type="icon" modifierArr={["menu"]} />
            </div>
          </div>
        </LayoutWrapper>
      </section>
    );
  }
}
