import React from "react";

export default function(props) {
    return (
        <div className="footer-content-logo">
            <div className="footer-content-logo__icon-container">
                <a href={props.url}>
                    <img className="footer-content-logo__icon" src={props.src} alt={props.alt}/>
                </a>
            </div>
        </div>
    );
}