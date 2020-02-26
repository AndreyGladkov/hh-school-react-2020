import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Modal.less";

/* Компонент-контейнер модальное окно.
В него вкладываются другие компоненты, которые нужно отобразить в модальном окне */
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRoot = props.modalRoot || document.body;
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal">{this.props.children}</div>,
      this.modalRoot
    );
  }
}
