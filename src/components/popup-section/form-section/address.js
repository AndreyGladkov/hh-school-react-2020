import React from "react";

import {cities} from "../../variables";
import City from "./city";

export default class Address extends React.PureComponent{

    constructor(props){
        super(props);  

        this.refAddress = React.createRef();
        this.refSelectWrapper = React.createRef();
        this.refCitySelect = React.createRef();
        this.refCityOption = cities.map(() => React.createRef());
        this.city = '';

        this.state = {
            validationAddress: true,
            selectOpen: false,
            choosenCity: null
        }
    }

    componentDidMount() {

        window.addEventListener("click",(event) => {
        if (this.refSelectWrapper.current !== null 
            && !(this.refSelectWrapper.current.contains(event.target))) {
            this.setState({selectOpen: false})
        }
        }, true)
    }

    render() {
        return (
            <div className="form-order-group">
                <label className="form-order__label">Адрес</label>
                <div 
                    className="form-order-address-list" 
                    ref={this.refSelectWrapper}>
                    <div className={`${this.state.selectOpen ? "select-after-open" : "select-after"}`}>
                        <input 
                            className={`select-city ${this.state.selectOpen && "select-city-focus"}`}
                            ref={this.refCitySelect}
                            value={`${this.state.choosenCity ? this.state.choosenCity : "Город"}`}
                            onFocus={
                                () => {
                                    this.setState({selectOpen: true})
                            }
                        }
                        readOnly
                        />
                    </div>
                    {this.state.selectOpen && <div className="select-wrapper">
                        {cities.map((el,ind) => 
                            <City 
                                key={el}
                                city={el}
                                refCity={this.refCityOption[ind]}
                                onFocus={
                                    () => {
                                        this.setState({choosenCity: el, selectOpen: false});
                                        this.props.changePopupState({city: el})
                                    }
                                }
                            />
                        )} 
                    </div>}
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
