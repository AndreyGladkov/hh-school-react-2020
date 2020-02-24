import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="columns-wrapper">
        <div className="navbar__content">
          <div className="navbar__button">
            <button className="button-link">Москва</button>
          </div>
          <nav className="navbar__nav">
            <ul className="nav navbar__nav-list">
              <li className="nav__item navbar__nav-item">
                <NavLink to='/' exact className="nav__link navbar__nav-link">Шоурум</NavLink>
              </li>
              <li className="nav__item navbar__nav-item">
                <NavLink to='/payment' exact className="nav__link navbar__nav-link">Оплата</NavLink>
              </li>
              <li className="nav__item navbar__nav-item">
                <NavLink to='/delivery' exact className="nav__link navbar__nav-link">Доставка</NavLink>
              </li>
              <li className="nav__item navbar__nav-item">
                <NavLink to='/pickup' exact className="nav__link navbar__nav-link">Самовывоз</NavLink>
              </li>
              <li className="nav__item navbar__nav-item">
               <NavLink to='/contacts' exact className="nav__link navbar__nav-link">Контактная информация</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
