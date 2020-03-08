import React, { Component } from "react";
import Label from "../label/label";
import "./checkbox.less";


export default class Checkbox extends Component {
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


    onChangeHandlerSelf(e) {
        this.setState({ checked: !this.state.checked });

        if (this.state.onChangeHandler) {
            this.state.onChangeHandler(e);
        }
    }

    render() {
        let className = "checkbox__box";
        let modifierArr = [...this.state.modifierArr];

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
                    id={this.state.id}
                    name={this.state.name}
                    value={this.state.value}
                    disabled={this.props.disabled}
                    defaultChecked={this.state.checked}
                    onChange={this.onChangeHandlerSelf}
                ></input>
                {this.state.withLabel ? (
                    <Label htmlFor={this.state.id} title={this.state.labelTitle} disabled={this.props.disabled} />
                ) : null}
            </div>
        );
    }
}