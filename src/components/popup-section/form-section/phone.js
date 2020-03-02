import React from "react";

export default class PersonalData extends React.PureComponent{

    refCountry = React.createRef();
    refCode = React.createRef();
    refNumber = React.createRef();

    state = {
        validationCountry: true,
        validationCode: true,
        validationNumber: true
    }

    render() {
        return (
            <div className="form-order-contact-info-number">
                <input 
                    className={`input form-order-contact-info-number_number-7 ${!this.state.validationCountry && "input_error"}`} 
                    type="text" 
                    placeholder="+7"
                    ref={this.refCountry}    
                    onBlur={this.checkValidationCountry} 
                />
                <input 
                    className={`input form-order-contact-info-number_number-code ${!this.state.validationCode && "input_error"}`} 
                    type="text" 
                    placeholder="Код"
                    ref={this.refCode}    
                    onBlur={this.checkValidationCode} 
                />
                <input 
                    className={`input form-order-contact-info-number_number-number ${!this.state.validationNumber && "input_error"}`}  
                    type="text" 
                    placeholder="Номер"
                    ref={this.refNumber}    
                    onBlur={this.checkValidationNumber} 
                />
            </div>
        );
    }

    checkValidationCountry = () => {
        let country = this.refCountry.current.value;
        if (this.isEmpty(country)) {   
            this.setState({validationCountry: false});            
            this.props.changePopupState({country: null});
            return;
        }
        let matchStr = /[+][0-9\s]+/;
        if (this.isMatch(country, matchStr)) {
            this.setState({validationCountry: true});
            this.props.changePopupState({country: country});
        }
        else {
            this.setState({validationCountry: false});
            this.props.changePopupState({country: null});
        }
    }

    checkValidationCode = () => {
        let code = this.refCode.current.value;
        if (this.isEmpty(code)) {   
            this.setState({validationCode: false});            
            this.props.changePopupState({code: null});
            return;
        }
        let matchStr = /[0-9\s]+/;
        if (this.isMatch(code, matchStr)) {
            this.setState({validationCode: true});
            this.props.changePopupState({code: code});
        }
        else {
            this.setState({validationCode: false});
            this.props.changePopupState({code: null});
        }
    }

    checkValidationNumber = () => {
        let number = this.refNumber.current.value;
        if (this.isEmpty(number)) {   
            this.setState({validationNumber: false});            
            this.props.changePopupState({number: null});
            return;
        }
        let matchStr = /[0-9\s]+/;
        if (this.isMatch(number, matchStr)) {
            this.setState({validationNumber: true});
            this.props.changePopupState({number: number});
        }
        else {
            this.setState({validationNumber: false});
            this.props.changePopupState({number: null});
        }
    }

    isEmpty = (checkStr) => {
        if (!checkStr.trim()) {
            return true;
        }
    }

    isMatch = (checkStr, matchStr) => {
        const match = checkStr.match(matchStr);
        if (!match) {
            return false;
        }
        return true;
    }
}