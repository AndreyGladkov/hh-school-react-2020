import React, { Component } from "react";
import Input from "./../Input/Input";
import "./Select.less";
const axios = require("axios");

/* Компонент Select 
Принимает: 
- value             | string |           (значение)
- modifierArr       | array of string|   (массив модификаторов)
- onClickHandler    | function |         (обработчик клика)
*/
export default class Select extends Component {
  constructor(props) {
    super(props);
    this.onClickHandlerSelf = this.onClickHandlerSelf.bind(this);
    this.state = {
      isOpened: false,
      dataFromServer: null,
      apiAddress: props.apiAddress || "https://api.hh.ru/areas/113",
      value: props.value || "Город",
      modifierArr: props.modifierArr || [],
      onClickHandler: props.onClickHandler || null
    };
  }

  componentDidMount() {
    axios
      .get(this.state.apiAddress)
      .then(response => {
        /* Данные получены. Для примера берем Московскую область, 7 городов*/
        const data = response.data.areas[21].areas.slice(0, 7);
        this.setState({ dataFromServer: data });
      })
      .catch(error => {
        this.setState({ value: "не удалось получить данные" });
      });
  }

  /* Метод: обработчик клика по select. Может вызывать внешний обработчик */
  onClickHandlerSelf(e) {
    this.setState({ isOpened: !this.state.isOpened });

    /* Использование внешнего обработчика */
    if (this.state.onClickHandler) {
      this.state.onClickHandler(e);
    }
  }

  render() {
    let className = "select-block";
    let modifierArr = [...this.state.modifierArr];

    if (this.state.isOpened) modifierArr.push("active");

    if (modifierArr.length) {
      modifierArr.forEach(
        (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
      );
      className += " " + modifierArr.join(" ");
    }

    let optionsContainer = null;
    if (this.state.dataFromServer) {
      const options = this.state.dataFromServer.map((town, index) => {
        return (
          <div
            key={index}
            className="options-container__item"
            value={town.name}
            onClick={() => this.setState({ value: town.name, isOpened: false })}
          >
            {town.name}
          </div>
        );
      });

      optionsContainer = <div className="options-container">{options}</div>;
    }

    return (
      <div className={className}>
        <div className={"select"} onClick={this.onClickHandlerSelf}>
          {this.state.value}
        </div>
        {this.state.isOpened ? optionsContainer : null}
      </div>
    );
  }
}
