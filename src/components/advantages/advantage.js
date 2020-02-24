import React from "react";

const Advantage = (props) => {
    return (
        <div className="column column_s-2 column_m-2 column_l-4">
            <div className="advantages-item">
                <div className={props.theme} />
                <div>{props.description}</div>
            </div>
        </div>
    )
}
export default Advantage;
