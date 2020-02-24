import React from "react";
import "./Header.less";
import { ColumnsWrapper } from '../Common/Grid/Grid';
import  StoreNavigation from './StoreNavigaton/StoreNavigation';
import Logo from './../Common/Logo/Logo.js';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ColumnsWrapper>
          <div className="header__content">
            <div className="header__logo">
             <Logo 
                 color="red"
             />
            </div>
            <div className="header__nav">
            <StoreNavigation />
            </div>
            <div className="header__fill"></div>
            <div className="header__button">
              <button className="header-button-icon header-button-icon_search" />
            </div>
            <div className="header__button">
              <button className="header-button-icon header-button-icon_login" />
              <button className="header-button header-button_login">
                Войти
              </button>
            </div>
            <div className="header__button header__button-menu">
              <button className="header-button-icon header-button-icon_menu" />
            </div>
          </div>
        </ColumnsWrapper>
      </header>
    );
  }
}
