import React from "react";
import "./link.less";

export default function Link(props) {
    const url = props.url || "/";
    const title = props.title || "";
    const modifierArr = props.modifierArr || "";
    const linkType = props.linkType || "";

    let className = linkType ? `link-${linkType}` : "link";

    if (modifierArr) {
        modifierArr.forEach(
            (modifier, i) => (modifierArr[i] = `${className}_${modifier}`)
        );
        className += " " + modifierArr.join(" ");
    }

    return (
        <a href={url} className={className}>
            {title}
            {props.children}
        </a>
    );
}