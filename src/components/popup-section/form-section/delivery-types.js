import React from "react";

import Delivery from "./delivery";

import {deliveryTypes} from "../../variables";

export default function(props) {
    return (
        <div className="form-order-group">
            <label className="form-order__label">Способ получения заказа</label>
            <div className="group-buttons">
                {deliveryTypes.map((el) => 
                    <Delivery 
                        key={el.name}
                        name={el.name}
                        tag={el.tag}
                    />
                )} 
            </div>
        </div>
);
}