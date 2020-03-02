import React from "react";

import Delivery from "./delivery";

import {deliveryTypes} from "../../variables";

export default class DeliveryType extends React.PureComponent{

    constructor(props){
        super(props);
        this.deliveryRefs = deliveryTypes.map(() => React.createRef());
        props.changePopupState({delivery: deliveryTypes[0].tag})
    }

    deliveryRefs = [];

    render() {
        return (
        <div className="form-order-group">
            <label className="form-order__label">Способ получения заказа</label>
            <div className="group-buttons">
                {deliveryTypes.map((el,ind) => 
                    <Delivery 
                        key={el.name}
                        active={ind === 0}
                        name={el.name}
                        tag={el.tag}
                        deliveryRef={this.deliveryRefs[ind]}
                        onChange={
                            () => {
                                if (this.deliveryRefs[ind].current.checked)
                                    (this.props.changePopupState({delivery: this.deliveryRefs[ind].current.value}));
                            }
                        }
                    />
                )} 
            </div>
        </div>
        );
    }
}