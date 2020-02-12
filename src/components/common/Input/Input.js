import React, { Component } from "react";
import Label from "./../Label/Label;";
import "./Input.less";

/* Компонент Input. Универсальный копонент Input (type==text) 
Принимает: 
- name              | string |           (имя input)
- value             | string |           (значение input)
- withLabel         | bool |             (нужен ли label true | false)
- labelTitle        | string |           (title для label)
- placeholder       | string |           (значение placeholder)
- readOnly          | bool |             (readonly true | false)
- autocomplete      | bool |             (autocomplete true | false)
- modifierArr       | array of string|   (массив модификаторов input)
- disabled          | bool |             (disabled true | false)
- onChangeHandler   |function |          (обработчик изменения ввода)
- valid             | bool |             (валидный ли input true | false)
- shouldValidate    | bool |             (нужна ли валидация true | false)
- touched           | bool |             (работали ли с input true | false)
- errorMessage      | string |           (сообщение ошибки в случае не пройденной валидации)
*/
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "",
      value: props.value || "",
      id: props.id || Math.random(),
      withLabel: props.withLabel || "",
      labelTitle: props.labelTitle || "",
      placeholder: props.placeholder || "",
      readOnly: props.readOnly || false,
      autocomplete: props.autocomplete || false,
      modifierArr: props.modifierArr || [""],
      disabled: props.disabled || false,
      onChangeHandler: props.onChangeHandler || null,
      shouldValidate: props.shouldValidate || false,
      valid: props.isValid || false,
      touched: false,
      validityFunctions: props.validityFunctions || [],
      errorMessage: props.errorMessage || "Введите корректное значение"
    };
  }

  onChangeHandler(e) {
    this.setState({ value: e.target.value });
  }

  onBlurHandler() {
    if (!this.state.isTouched) {
      this.setState({ isTouched: true });
    }
  }

  isInvalid() {
    if (
      this.state.isTouched &&
      !this.state.isValid &&
      this.state.shouldValidate
    ) {
      return true;
    }
    return false;
  }

  render() {
    let className = "input";
    let modifierArr = [...this.state.modifierArr];

    const inputIsInvalid = this.isInvalid();

    if (inputIsInvalid) {
      modifierArr.push("invalid");
    }
    modifierArr.forEach(
      (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
    );
    className += " " + modifierArr.join(" ");

    return (
      <div className="input-block">
        <input
          className={className}
          name={this.state.name}
          value={this.state.value}
          placeholder={this.state.placeholder}
          readOnly={this.state.readOnly}
          autocomplete={this.state.autocomplete}
          disabled={this.state.disabled}
          onChange={this.onChangeHandler.bind(this)}
          id={this.state.id}
          onBlur={this.onBlurHandler.bind(this)}
        ></input>
        {inputIsInvalid ? <span>{this.state.errorMessage}</span> : null}
        {this.state.withLabel ? (
          <Label
            htmlFor={this.state.id}
            title={this.state.labelTitle}
            disabled={this.state.disabled}
          />
        ) : null}
      </div>
    );
  }
}
