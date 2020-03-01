import React from "react";

import PersonalData from "./personal-data";
import DeliveryType from "./delivery-types";
import Address from "./address";
import PaymentType from "./payment-types";
import NotificationType from "./notification-types";

export default function(props) {
    return (
        <form className="popup-content-form-order">
            <PersonalData/>
            <DeliveryType/>
            <Address/>
            <PaymentType/>
            <NotificationType/>
            <div className="form-order-group">
                <button className="js-submit button form-order-confirm-button_button">Оформить заказ</button>
            </div>
        </form>
    );
}