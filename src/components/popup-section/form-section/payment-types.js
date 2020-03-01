import React from "react";

import Payment from "./payment";

import {paymentTypes} from "../../variables";

export default function(props) {
    return (
        <div className="form-order-group">
            <label className="form-order__label">Оплата</label>
            <div className="form-order-radio-group">
                {paymentTypes.map((el) => 
                    <Payment 
                        key={el.name}
                        name={el.name}
                        tag={el.tag}
                    />
                )}
            </div>
        </div>
    );
}
