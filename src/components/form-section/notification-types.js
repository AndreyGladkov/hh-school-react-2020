import React from "react";

import Notification from "./notification";

import {notificationTypes} from "../variables";

export default function(props) {
    return (
        <div className="form-order-group">
            <label className="form-order__label">Уведомления</label>
            <div className="form-order-notice-checkbox-sms">
                {notificationTypes.map((el) => 
                    <Notification 
                        key={el.name}
                        name={el.name}
                        tag={el.tag}
                    />
                )}
            </div>
        </div>
    );
}