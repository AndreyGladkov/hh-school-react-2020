import React, { Component } from "react";
import Label from "./../Label/Label";
import "./Checkbox.less";

/* Компонент Checkbox. Checkbox-переключатель (type==Checkbox) input
Принимает: 
- name              | string |           (имя Checkbox)
- value             | string |           (значение Checkbox)
- withLabel         | bool |             (нужен ли label true | false)   
- labelTitle        | string |           (title для label)
- disabled          | bool |             (disabled true | false)
- checked           | bool |             (checked true | false)
- modifierArr       | array of string|   (массив модификаторов Checkbox)
- onChangeHandler   | function |         (обработчик изменения ввода)
*/
export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandlerSelf = this.onChangeHandlerSelf.bind(this);
  }

  /* Метод: обработчик изменения radio. Может вызывать внешний обработчик */
  onChangeHandlerSelf(e) {
    this.setState({ checked: !this.props.checked });

    /* Использование внешнего обработчика */
    if (this.props.onChangeHandler) {
      this.props.onChangeHandler(e);
    }
  }

  render() {
    let className = "checkbox__box";
    let modifierArr = [...this.props.modifierArr];

    if (modifierArr.length) {
      modifierArr.forEach(
        (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
      );
      className += " " + modifierArr.join(" ");
    }

    return (
      <div className="checkbox">
        <input
          className={className}
          type={"checkbox"}
          id={this.props.labelTitle}
          name={this.props.name}
          value={this.props.value}
          disabled={this.props.disabled}
          defaultChecked={this.props.checked}
          onChange={this.onChangeHandlerSelf}
        ></input>
        {this.props.withLabel ? (
          <Label
            htmlFor={this.props.labelTitle}
            title={this.props.labelTitle}
            disabled={this.props.disabled}
          />
        ) : null}
      </div>
    );
  }
}
