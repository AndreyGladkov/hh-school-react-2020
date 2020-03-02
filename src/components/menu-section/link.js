import React from "react";

export default function(props) {
    return (
    <li className="info__item">
        <a href={props.url} className="info__link">{props.name}</a>
    </li>
    );
}