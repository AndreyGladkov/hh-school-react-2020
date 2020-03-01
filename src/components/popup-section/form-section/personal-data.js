import React from "react";

import Phone from "./phone";

export default function(props) {
    return (
<       div className="form-order-group">
            <label className="form-order__label">Контактное лицо</label>
            <input className="js-name input" type="text" placeholder="ФИО" value=""/>
            <input className="js-email input" type="text" placeholder="Электронная почта" value=""/>
            <Phone/>
        </div>
    );
}