import React, { Component } from "react";
import "./Input.less";

/* Компонент Input. Текстовое поле (type==text) Input
Принимает: 
- name              | string |           (имя input)
- value             | string |           (значение input)
- id                | string |           (id)   
- placeholder       | string |           (значение placeholder)
- readOnly          | bool |             (readonly true | false)
- checked           | bool |             (checked true | false)
- modifierArr       | array of string|   (массив модификаторов input)
- disabled          | bool |             (disabled true | false)
- onChangeHandler   | function|          (обработчик изменения поля ввода)
*/
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "",
      value: props.value || "",
      id: props.id || "",
      placeholder: props.placeholder || "",
      readOnly: props.readOnly || false,
      checked: props.checked || false,
      modifierArr: props.modifierArr || "",
      disabled: props.disabled || false
    };
  }

  onChangeHandler() {
    console.log("hey, text input");
  }

  render() {
    let className = "input";
    if (this.state.modifierArr) {
      let modifierArr = [...this.state.modifierArr];

      modifierArr.forEach(
        (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
      );
      className += " " + modifierArr.join(" ");
    }

    return (
      <input
        className={className}
        name={this.state.name}
        value={this.state.value}
        placeholder={this.state.placeholder}
        readOnly={this.state.readOnly}
        checked={this.state.checked}
        onChange={this.onChangeHandler.bind(this)}
        id={this.state.id}
      ></input>
    );
  }
}
