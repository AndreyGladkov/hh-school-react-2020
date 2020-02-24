import React, { Component } from "react";
import "./Textarea.less";

/* Компонент Textarea 
Принимает: 
- placeholder       | string |           (значение)
- name              | string |           (имя)
- modifierArr       | array of string|   (массив модификаторов)
- onChangeHandler   | function |         (обработчик изменения ввода)
*/
export default class Textarea extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandlerSelf = this.onChangeHandlerSelf.bind(this);
    this.state = {
      value: props.value || "",
      name: props.name || "",
      placeholder: props.placeholder || "",
      modifierArr: props.modifierArr || [],
      onChangeHandler: props.onChangeHandler || null
    };
  }

  /* Метод: обработчик ввода в textarea. Может вызывать внешний обработчик */
  onChangeHandlerSelf(e) {
    this.setState({ value: e.target.value });
    /* Использование внешнего обработчика */
    if (this.state.onChangeHandler) {
      this.state.onChangeHandler(e);
    }
  }

  render() {
    let className = "textarea";
    let modifierArr = [...this.state.modifierArr];

    if (modifierArr.length) {
      modifierArr.forEach(
        (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
      );
      className += " " + modifierArr.join(" ");
    }

    return (
      <textarea
        type="textarea"
        className={className}
        placeholder={this.state.placeholder}
        name={this.state.name}
        onChange={this.onChangeHandlerSelf}
        value={this.state.value}
      ></textarea>
    );
  }
}
