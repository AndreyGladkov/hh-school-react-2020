import React from "react";
import "./Label.less";

/* Компонент Label. 
Принимает: 
- htmlFor               | string |           (значение id input, которому принадлежит label)
- title                 | string |           (значение label)
- disabled              | bool |             (disabled true | false)
*/
export default function Label(props) {
  if (!props.htmlFor) return null;

  const htmlFor = props.htmlFor;
  const title = props.title || "";
  const disabled = props.disabled || false;

  let className = "label";
  const modifierArr = [];

  if (disabled) modifierArr.push("disabled");

  if (modifierArr.length) {
    modifierArr.forEach(
      (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
    );
    className += " " + modifierArr.join(" ");
  }

  return (
    <label className={className} htmlFor={htmlFor}>
      {title}
    </label>
  );
}
