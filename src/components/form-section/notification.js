import React from "react";

export default function(props) {
    return (
        <React.Fragment>
            <input className="js-notice" type="checkbox" value={props.tag} id={props.tag}/>
            <label className="form-order__text" htmlFor={props.tag}>{props.name}</label>
        </React.Fragment>
    );
}
