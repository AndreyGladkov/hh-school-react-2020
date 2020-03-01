import React from "react";

export default function(props) {
    return (
        <div className="form-order-contact-info-number">
            <input className="js-phone-country input form-order-contact-info-number_number-7" type="text" placeholder="+7" value=""/>
            <input className="js-phone-code input form-order-contact-info-number_number-code" type="text" placeholder="Код" value=""/>
            <input className="js-phone-number input form-order-contact-info-number_number-number" type="text" placeholder="Номер" value=""/>
        </div>
    );
}