import React from "react";

export default function(props) {
    return (
        <div className="header__logo">
            <a href={props.url} className="logo-link">
                <img className="logo" src={props.src} alt={props.alt}/>
            </a>
        </div>
    );
}