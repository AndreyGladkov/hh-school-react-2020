import React from "react";

export default function(props) {
    return (
        <div className="footer-content-social__icon-container">
            <a href={props.url}>
                <img className="footer-content-social__icon" src={props.src} alt={props.name}/>
            </a>
        </div>
    );
}