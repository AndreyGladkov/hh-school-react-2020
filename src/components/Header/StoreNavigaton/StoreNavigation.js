import React from "react";
import './StoreNavigation.less';

export default function StoreNavigation(props) {
  return (
    <ul className="nav">
      <li className="nav__item">
        <a className="nav__link" href="#">
          Одежда
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">
          Сумки
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">
          Аксессуары
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#">
          Офисные принадлежности
        </a>
      </li>
    </ul>
  );
}
