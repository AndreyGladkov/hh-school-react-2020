import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./structurePopup.less";

export default class structurePopup extends React.Component {
    constructor(props) {
        super(props);
        this.structurePopupRoot = props.structurePopupRoot || document.body;
    }

    render() {
        return ReactDOM.createPortal(
            <div className="structure">{this.props.children}</div>,
            this.structurePopupRoot
        );
    }
}