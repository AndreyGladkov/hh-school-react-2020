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
      checked: props.checked || false
    };
  }

  /* Метод: обработчик изменения radio. Может вызывать внешний обработчик */
  onChangeHandlerSelf(e) {
    this.setState({ checked: !this.state.checked });

    /* Использование внешнего обработчика */
    if (this.props.onChangeHandler) {
      this.props.onChangeHandler(e);
    }
  }

  render() {
    let className = "radio";
    let modifierArr = [...this.props.modifierArr];

    if (modifierArr.length) {
      modifierArr.forEach(
        (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
      );
      className += " " + modifierArr.join(" ");
    }

    const id = this.props.labelTitle + this.props.name + Math.random();
    return (
      <React.Fragment>
        <input
          className={className}
          type={"radio"}
          id={id}
          name={this.props.name}
          value={this.props.value}
          disabled={this.props.disabled}
          defaultChecked={this.state.checked}
          onChange={this.onChangeHandlerSelf}
        ></input>
        {this.props.withLabel ? (
          <Label
            htmlFor={id}
            title={this.props.labelTitle}
            disabled={this.props.disabled}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
