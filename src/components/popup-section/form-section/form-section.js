import React from "react";

import PersonalData from "./personal-data";
import DeliveryType from "./delivery-types";
import Address from "./address";
import PaymentType from "./payment-types";
import NotificationType from "./notification-types";

export default function(props) {
    return (
        <form className="popup-content-form-order">
            <PersonalData changePopupState={props.changePopupState}/>
            <DeliveryType changePopupState={props.changePopupState}/>
            <Address changePopupState={props.changePopupState}/>
            <PaymentType changePopupState={props.changePopupState}/>
            <NotificationType changePopupState={props.changePopupState}/>
        </form>
    );
}