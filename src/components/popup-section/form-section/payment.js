import React from "react";

export default function(props) {
    return (
        <div className="form-order-radio-group__element">
            <input 
                type="radio" 
                name="payment" 
                id={props.tag} 
                value={props.tag}
                ref={props.paymentRef}
                onChange={props.onChange}
                defaultChecked={props.active}/>
            <label className="form-order__text" htmlFor={props.tag}>{props.name}</label>
        </div>
    );
}
