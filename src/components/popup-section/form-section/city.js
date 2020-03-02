import React from "react";

export default function(props) {
    return (
        <input 
            className="option" 
            readOnly 
            value={props.city}
            ref={props.refCity}
            onFocus={props.onFocus}>
        </input>
    );
}
