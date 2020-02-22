import React from "react";

export default function(props) {
    return (
        <div className="column column_s-2 column_m-2 column_l-4">
            <div className="services-content-block">
                <div className="services-content-block__icon-container">
                    <img className="services-content-block__icon" src={props.src}/>
                </div>
                <div className="services-content-block__text-container">{props.name}</div>
            </div>
        </div>
    );
}