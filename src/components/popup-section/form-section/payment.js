import React from "react";

export default function(props) {
    return (
        <div className="form-order-radio-group__element">
            <input className="js-radio-payment" type="radio" name="payment" id={props.tag} value={props.ag}/>
            <label className="form-order__text" htmlFor={props.tag}>{props.name}</label>
        </div>
    );
}
