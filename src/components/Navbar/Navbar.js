import React from "react";
import "./Navbar.less";
import { ColumnsWrapper } from "../Common/Grid/Grid";

export default class Navbar extends React.Component {
  render() {
    return (
      <section className="navbar">
        <ColumnsWrapper>
          <div className="navbar__content">
            <div className="navbar__city">{this.props.city}</div>
            <div className="navbar__fill"></div>
            <ul className="navbar__list">
              <li className="navbar__item">
                <a className="navbar__link" href="#">
                  Шоурум
                </a>
              </li>
              <li className="navbar__item">
                <a className="navbar__link" href="#">
                  Оплата
                </a>
              </li>
              <li className="navbar__item">
                <a className="navbar__link" href="#">
                  Доставка
                </a>
              </li>
              <li className="navbar__item">
                <a className="navbar__link" href="#">
                  Самовывоз
                </a>
              </li>
              <li className="navbar__item">
                <a className="navbar__link" href="#">
                  Контактная информация
                </a>
              </li>
            </ul>
          </div>
        </ColumnsWrapper>
      </section>
    );
  }
}
