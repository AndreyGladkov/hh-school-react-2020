import React from "react";

import Notification from "./notification";

import {notificationTypes} from "../../variables";

export default class NotificationType extends React.PureComponent{

    constructor(props){
        super(props);
        this.notificationRefs = notificationTypes.map(() => React.createRef());
    }

    render() {
        return (
            <div className="form-order-group">
                <label className="form-order__label">Уведомления</label>
                <div className="form-order-notice-checkbox-sms">
                    {notificationTypes.map((el,ind) => 
                        <Notification 
                            key={el.name}
                            name={el.name}
                            tag={el.tag}
                            notificationRef={this.notificationRefs[ind]}
                            onChange={
                            () => {
                                if (this.notificationRefs[ind].current.checked)
                                    this.props.changePopupState({notification: this.notificationRefs[ind].current.value})
                                else 
                                    this.props.changePopupState({notification: null})
                            }
                        }
                        />
                    )}
                </div>
            </div>
        );
    }
}