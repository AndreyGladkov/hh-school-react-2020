import React from "react";
import "./Button.less";

/* Компонент Button.
Принимает: 
- title         | string |           (название кнопки)
- type          | string |           (тип кнопки)
- modifierArr   | array of string|   (массив модификаторов)
- onClickHandler|function|           (обработчик нажатия на кнопку)
*/
export default function Button(props) {
  const title = props.title || "";
  const buttonType = props.type || "";
  const modifierArr = props.modifierArr || "";
  const onClickHandler = props.onClickHandler || null;

  let className = buttonType ? "button " : `button-${buttonType} `;
  if (modifierArr) {
    modifierArr.forEach(
      (modifier, i) => (modifierArr[i] = `button_${modifier}`)
    );
    className += modifierArr.join(" ");
  }

  return (
    <button className={className} onClick={onClickHandler}>
      {title}
    </button>
  );
}
