import React, { Component } from "react";
import Label from "./../Label/Label";
import "./Input.less";

/* Компонент Input. Универсальный копонент Input (type==text) 
Принимает: 
- name              | string |           (имя input)
- value             | string |           (значение input)
- withLabel         | bool |             (нужен ли label true | false)
- labelTitle        | string |           (title для label)
- placeholder       | string |           (значение placeholder)
- readOnly          | bool |             (readonly true | false)
- autocomplete      | string |           (autocomplete on | off)
- modifierArr       | array of string|   (массив модификаторов input)
- disabled          | bool |             (disabled true | false)
- onChangeHandler   | function |         (обработчик изменения ввода)
- valid             | bool |             (валидный ли input true | false)
- shouldValidate    | bool |             (нужна ли валидация true | false)
- errorMessage      | string |           (сообщение ошибки в случае не пройденной валидации)
*/
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandlerSelf = this.onChangeHandlerSelf.bind(this);
    this.state = {
      id: Math.random(),
      name: props.name || "",
      value: props.value || "",
      withLabel: props.withLabel || false,
      labelTitle: props.labelTitle || "",
      placeholder: props.placeholder || "",
      readOnly: props.readOnly || false,
      modifierArr: props.modifierArr || [],
      autocomplete: props.autocomplete || "off",
      onChangeHandler: props.onChangeHandler || null,
      touched: false
    };
  }

  /* Метод: обработчик изменения radio. Может вызывать внешний обработчик */
  onChangeHandlerSelf(e) {
    this.setState({ value: e.target.value, touched: true });

    /* Использование внешнего обработчика */
    if (this.state.onChangeHandler) {
      this.state.onChangeHandler(e);
    }
  }

  /* Метод: проверка инпута на валидность */
  isInvalid() {
    if (!this.props.shouldValidate) return;

    if (this.state.touched && !this.props.valid && this.props.shouldValidate) {
      return true;
    }
    return false;
  }

  render() {
    let className = "input";
    let modifierArr = [...this.state.modifierArr];

    const inputIsInvalid = this.props.shouldValidate ? this.isInvalid() : false;
    if (inputIsInvalid) {
      modifierArr.push("invalid");
    }

    if (modifierArr.length) {
      modifierArr.forEach(
        (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
      );
      className += " " + modifierArr.join(" ");
    }

    return (
      <React.Fragment>
        <input
          className={className}
          id={this.state.id}
          name={this.state.name}
          value={this.state.value}
          placeholder={this.state.placeholder}
          readOnly={this.state.readOnly}
          autoComplete={this.state.autocomplete}
          onChange={this.onChangeHandlerSelf}
          disabled={this.props.disabled}
        ></input>
        {inputIsInvalid ? (
          <span className="input__error">{this.props.errorMessage}</span>
        ) : null}
        {this.state.withLabel ? (
          <Label
            htmlFor={this.state.id}
            title={this.state.labelTitle}
            disabled={this.props.disabled}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
