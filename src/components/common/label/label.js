import React from "react";
import "./label.less";

export default function Label(props) {
    if (!props.htmlFor) return null;

    const htmlFor = props.htmlFor;
    const title = props.title || "";
    const disabled = props.disabled || false;

    let className = "label";
    const modifierArr = [];

    if (disabled) modifierArr.push("disabled");

    if (modifierArr.length) {
        modifierArr.forEach(
            (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
        );
        className += " " + modifierArr.join(" ");
    }

    return (
        <label className={className} htmlFor={htmlFor}>
            {title}
        </label>
    );
}