import React from "react";

export default function(props) {
    return (
        <div className="footer-content-app__icon-container">
            <a href={props.url}>
                <img className="footer-content-app__icon" src={props.src} alt={props.name}/>
            </a>
        </div>
    );
}