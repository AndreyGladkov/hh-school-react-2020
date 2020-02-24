import React, { Component } from "react";
import Label from "./../Label/Label";
import "./Radio.less";

/* Компонент Radio. Радио-переключатель (type==radio) input
Принимает: 
- name              | string |           (имя radio)
- value             | string |           (значение radio)
- withLabel         | bool |             (нужен ли label true | false)   
- labelTitle        | string |           (title для label)
- disabled          | bool |             (disabled true | false)
- checked           | bool |             (checked true | false)
- modifierArr       | array of string|   (массив модификаторов radio)
- onChangeHandler   | function |          (обработчик изменения ввода)
*/
export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandlerSelf = this.onChangeHandlerSelf.bind(this);
    this.state = {
      id: Math.random(),
      name: props.name || "",
      value: props.value || "",
      withLabel: props.withLabel || false,
      labelTitle: props.labelTitle || "",
      checked: props.checked || false,
      modifierArr: props.modifierArr || [],
      onChangeHandler: props.onChangeHandler || null
    };
  }

  /* Метод: обработчик изменения radio. Может вызывать внешний обработчик */
  onChangeHandlerSelf(e) {
    this.setState({ checked: !this.state.checked });

    /* Использование внешнего обработчика */
    if (this.state.onChangeHandler) {
      this.state.onChangeHandler(e);
    }
  }

  render() {
    let className = "radio";
    let modifierArr = [...this.state.modifierArr];

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
          type={"radio"}
          id={this.state.id}
          name={this.state.name}
          value={this.state.value}
          disabled={this.props.disabled}
          defaultChecked={this.state.checked}
          onChange={this.onChangeHandlerSelf}
        ></input>
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
