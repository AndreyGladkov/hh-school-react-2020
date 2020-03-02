import React from "react";

export default function(props) {
    return (
        <React.Fragment>
            <input 
                type="radio" 
                id={`size_${props.name}`} 
                name="sizes" 
                onClick={props.onClick}
                defaultChecked={props.choosenSize}
            />
            <div className="radio-button-text radio-button-text_size">
                <label htmlFor={`size_${props.name}`}>{props.name}</label>
            </div>
        </React.Fragment>
    );
}
