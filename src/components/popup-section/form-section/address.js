import React from "react";

import {cities} from "../../variables";
import City from "./city";

export default class PersonalData extends React.PureComponent{

    refAddress = React.createRef();
    refCity = React.createRef();

    state = {
        validationAddress: true
    }

    constructor(props){
        super(props);
        props.changePopupState({city: "Москва"})
    }

    render() {
        return (
            <div className="form-order-group">
                <label className="form-order__label">Адрес</label>
                <div className="form-order-address-list">
                    <div className="select-wrapper">
                        <select 
                            className="js-select-cities select" 
                            ref={this.refCity}
                            onChange={
                                () => {
                                    this.props.changePopupState({city: this.refCity.current.value})
                                }
                        }>
                        {cities.map((el,ind) => 
                            <City 
                                key={el}
                                active={el === "Москва"}
                                city={el}
                            />
                        )} 
                        </select>
                    </div>
                </div>
                <div className="form-order-address-text">
                    <textarea 
                        className={`textarea ${!this.state.validationAddress && "textarea_error"}`}
                        placeholder="Адрес"
                        ref={this.refAddress}    
                        onBlur={
                            this.checkValidationAddress
                        } 
                        ></textarea>
                </div>
            </div>
        );
    }

    checkValidationAddress = () => {
        let address = this.refAddress.current.value;
        if (this.isEmpty(address)) {
            this.setState({validationAddress: false});
            this.props.changePopupState({address: null});
        }
        else {
            this.setState({validationAddress: true});
            this.props.changePopupState({address: address});
        }
    }

    isEmpty = (checkStr) => {
        if (!checkStr.trim()) {
            return true;
        }
    }
}
