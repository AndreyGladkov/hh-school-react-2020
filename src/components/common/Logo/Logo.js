import React from "react";
import Link from "./../Link/Link";
import "./Logo.less";

/* Компонент Logo.
Принимает: 
- url      | string |   (адрес ссылки логотипа)
- src      | string |   (путь до файла логотипа)
- alt      | string |   (альтернативный текст логотипа)
*/
export default function Logo(props) {
  const url = props.url || "/";
  const src = props.src || "";
  const alt = props.alt || "";

  return (
    <Link url={url}>
      <img className="logo" src={src} alt={alt} />
    </Link>
  );
}
