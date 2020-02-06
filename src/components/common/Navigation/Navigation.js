import React from "react";
import Link from "./../Link/Link";
import "./Navigation.less";

/* Компонент Navigation.
Принимает массив объектов с конфигурацией для каждой ссылки
- linksConfig | array of Object 
- linksConfig[i] | Object     
    - url       | string |           (адрес)
    - title     | string |           (название ссылки)
    - modifierArr   | array of string|   (массив модификаторов)
*/
export default function Navigation(props) {
  if (!props.linksConfig) {
    return null;
  }

  const navigationList = props.linksConfig.map((linkConfig, index) => {
    return (
      <li className="navigation__item" key={index + Math.random()}>
        <Link
          url={linkConfig.url}
          title={linkConfig.title}
          modifierArr={linkConfig.typeArr}
        />
      </li>
    );
  });

  return <ul className="navigation">{navigationList}</ul>;
}
