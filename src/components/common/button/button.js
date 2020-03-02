import React from "react";

const Button = (props) => {
    return (
        <button 
            className={props.theme} 
            onClick={props.onClickHandler || null}
            disabled={props.disabled || false}>
            {props.text || ""}
        </button>
    )
}
export default Button;
