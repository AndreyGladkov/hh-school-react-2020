import React, { Component } from 'react';

import { Wrapper } from '../common/Layout/Layout';
import LogoLink from '../common/LogoLink/LogoLink';
import Nav from '../Nav/Nav';
import Button from '../common/Button/Button';
import '../common/LogoLink/logo-red.svg';

import './header.less';

export default class Header extends Component {

  navigation = {
    list: [
      { id: 1, url: "#", title: "Одежда" },
      { id: 2, url: "#", title: "Сумки" },
      { id: 3, url: "#", title: "Аксессуары" },
      { id: 4, url: "#", title: "Офисные принадлежности" }
    ]
  };

  buttons = {
    searchIcon: {
      className: 'header-button-icon header-button-icon_search',
      title: 'Поиск'
    },
    loginIcon: {
      className: 'header-button-icon header-button-icon_login',
      title: 'Войти'
    },
    login: {
      className: 'header-button header-button_login',
      title: 'Войти'
    },
    menuIcon: {
      className: 'header-button-icon header-button-icon_menu',
      title: 'Меню'
    }
  };


  render() {
    
    return (
      <header className="header">
        <Wrapper>
          <div className="header__content">
            <div className="header__logo">
              <LogoLink href={"#"} src={"images/logo-red.svg"} alt={"hh.ru"} />
            </div>
            <div className="header__nav">
              <Nav navigation={this.navigation} />
            </div>
            <div className="header__fill"></div>
            <div className="header__button">
              <Button button={this.buttons.searchIcon} />
            </div>
            <div className="header__button">
              <Button button={this.buttons.loginIcon} />
              <Button button={this.buttons.login} />
            </div>
            <div className="header__button header__button_menu">
              <Button button={this.buttons.menuIcon} />
            </div>
          </div>
        </Wrapper>
      </header>
    )
  }
}