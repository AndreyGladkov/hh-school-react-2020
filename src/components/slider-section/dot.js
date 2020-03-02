import React from "react";

export default function(props) {
    return (
        <button
            className={`slider-content-block-dots__dot-container ${props.active && "slider-content-block-dots__dot-container_choosen"}`}
            onClick={props.onClick}>
        </button> 
    );
}