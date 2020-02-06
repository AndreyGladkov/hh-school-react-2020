import React from "react";
import "./Link.less";

/* Компонент Link.
Принимает: 
- url         | string |           (адрес ссылки)
- title       | string |           (название ссылки)
- modifierArr | array of string|   (массив модификаторов)
*/
export default function Link(props) {
  const url = props.url || "/";
  const title = props.title || "";
  const modifierArr = props.modifierArr || "";

  let className = "link";
  if (modifierArr) {
    modifierArr.forEach((modifier, i) => (modifierArr[i] = `link_${modifier}`));
    className += " " + modifierArr.join(" ");
  }

  return (
    <a href={url} className={className}>
      {title}
      {props.children}
    </a>
  );
}
