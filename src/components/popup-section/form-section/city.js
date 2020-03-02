import React from "react";

export default function(props) {
    return (
        <option 
            className="option" 
            id={props.id}
            defaultValue={props.active}
            onChange={props.onChange}>
            {props.city}
        </option>
    );
}
