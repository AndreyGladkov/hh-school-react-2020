import React from "react";

import Payment from "./payment";

import {paymentTypes} from "../../variables";

export default class PaymentType extends React.PureComponent{

    constructor(props){
        super(props);
        this.paymentRefs = paymentTypes.map(() => React.createRef());
        props.changePopupState({payment: paymentTypes[0].tag})
    }

    paymentRefs = [];

    render() {
        return (
            <div className="form-order-group">
                <label className="form-order__label">Оплата</label>
                <div className="form-order-radio-group">
                    {paymentTypes.map((el,ind) => 
                        <Payment 
                            key={el.name}
                            name={el.name}
                            tag={el.tag}
                            paymentRef={this.paymentRefs[ind]}
                            active={ind === 0}
                            onChange={
                                () => {
                                    if (this.paymentRefs[ind].current.checked)
                                        (this.props.changePopupState({payment: this.paymentRefs[ind].current.value}));
                                }
                        }
                        />
                    )}
                </div>
            </div>
            );
    }
}
