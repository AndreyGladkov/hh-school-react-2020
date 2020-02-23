import React from "react";

import {cities} from "../variables";

export default function(props) {
    return (
        <div className="form-order-group">
            <label className="form-order__label">Адрес</label>
            <div className="form-order-address-list">
                <div className="select-wrapper">
                    <select className="js-select-cities select">
                    </select>
                </div>
            </div>
            <div className="form-order-address-text">
                <textarea className="js-address textarea" placeholder="Адрес"></textarea>
            </div>
        </div>
    );
}
