import React from "react";

const Stub = (props) => {
    return (
        <div className="columns-wrapper">
            <div className="column column_s-2 column_m-3 column_l-6">
                <h1 className="heading heading_level-1">
                    {props.stubContent}
                </h1>
            </div>
        </div>
    )
}
export default Stub;
