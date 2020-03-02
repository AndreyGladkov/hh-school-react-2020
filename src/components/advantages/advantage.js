import React from "react";

const Advantage = ({theme, description}) => {
    return (
        <div className="column column_s-2 column_m-2 column_l-4">
            <div className="advantages-item">
                <div className={theme} />
                <div>{description}</div>
            </div>
        </div>
    )
}
export default Advantage;
