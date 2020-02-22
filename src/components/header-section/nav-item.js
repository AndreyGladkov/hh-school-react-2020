import React from "react";

export default function(props) {
    return (
        <li className="nav__item">
            <a href={props.url} className="nav__link">{props.name}</a>
        </li>
    );
}