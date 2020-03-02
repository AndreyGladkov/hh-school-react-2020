import React from "react";
import logoRed from "./logo-red.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="columns-wrapper">
        <div className="header__content">
          <div className="header__logo">
            <p className="logo-link">
              <img
                className="logo"
                src={logoRed}
                alt="hh.ru"
              />
            </p>
          </div>
          <div className="header__nav">
            <ul className="nav">
              <li className="nav__item">
                <p className="nav__link">
                  Одежда
                </p>
              </li>
              <li className="nav__item">
                <p className="nav__link">
                  Сумки
                </p>
              </li>
              <li className="nav__item">
                <p className="nav__link">
                  Аксессуары
                </p>
              </li>
              <li className="nav__item">
                <p className="nav__link">
                  Офисные принадлежности
                </p>
              </li>
            </ul>
          </div>
          <div className="header__fill"></div>
          <div className="header__button">
            <button className="header-button-icon header-button-icon_search">
              Поиск
            </button>
          </div>
          <div className="header__button">
            <button className="header-button-icon header-button-icon_login">
              Войти
            </button>
            <button className="header-button header-button_login">Войти</button>
          </div>
          <div className="header__button header__button_menu">
            <button className="header-button-icon header-button-icon_menu">
              Меню
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
