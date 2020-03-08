import React from "react";
import "./button.less";

export default function Button(props) {
    const title = props.title || "";
    const buttonType = props.type || "";
    const modifierArr = props.modifierArr || "";
    const onClickHandler = props.onClickHandler || null;
    const disabled = props.disabled || false;

    let className = buttonType ? `button-${buttonType}` : "button";

    if (disabled) modifierArr.push("disabled");

    if (modifierArr.length) {
        modifierArr.forEach(
            (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
        );
        className += " " + modifierArr.join(" ");
    }

    return (
        <button className={className} onClick={onClickHandler} disabled={disabled}>
            {title}
        </button>
    );
}