import React, { Component } from "react";
import Label from "./../Label/Label";
import "./Radio.less";

/* Компонент Radio. Радио-переключатель (type==radio) input
Принимает: 
- name              | string |           (имя radio)
- value             | string |           (значение radio)   
- id                | string |           (id) 
- disabled          | bool |             (disabled true | false)
- checked           | bool |             (checked true | false)
- modifierArr       | array of string|   (массив модификаторов radio)
- useContext        | object |           (внешний контекст)
*/
export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "",
      value: props.value || "",
      id: props.id || "",
      disabled: props.disabled || false,
      checked: props.checked || false,
      modifierArr: props.modifierArr || "",
      useContext: props.useContext || null
    };
  }

  onChangeHandler(e) {
    if (this.state.disabled) return;

    this.setState({ checked: !this.state.checked });

    if (this.state.useContext) {
      this.state.useContext.setState({ sizeChecked: e.target.value });
    }
  }

  render() {
    let className = "radio";

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
        id={this.state.id}
        disabled={this.state.disabled}
        type={"radio"}
        defaultChecked={this.state.checked}
        onChange={this.onChangeHandler.bind(this)}
      ></input>
    );
  }
}
