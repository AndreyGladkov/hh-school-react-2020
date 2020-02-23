import React from "react";

export default function(props) {
    return (
        <button 
            data-slide-id={props.id} 
            className={`js-slide-button slider-content-block-dots__dot-container ${props.active && "slider-content-block-dots__dot-container_choosen"}`}>
        </button> 
    );
}