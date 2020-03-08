import React, { Component } from "react";
import Label from "../label/label";
import "./input.less";

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

    onChangeHandlerSelf(e) {
        this.setState({ value: e.target.value, touched: true });


        if (this.state.onChangeHandler) {
            this.state.onChangeHandler(e);
        }
    }

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
            <div className="input-block">
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
                    <Label htmlFor={this.state.id} title={this.state.labelTitle} disabled={this.props.disabled} />
                ) : null}
            </div>
        );
    }
}