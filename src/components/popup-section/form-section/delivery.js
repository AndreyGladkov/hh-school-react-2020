import React from "react";

export default function(props) {
    return (
        <React.Fragment>
            <input 
                className="js-radio-delivery" 
                type="radio" id={props.tag} 
                value={props.tag} 
                name="type-delivery"
                defaultChecked={props.active}
                onChange={props.onChange}
                ref={props.deliveryRef}
            />
            <div className="radio-button-text radio-button-text_delivery">
                <label className="radio-label" htmlFor={props.tag}>{props.name}</label>
            </div>
        </React.Fragment>
    );
}