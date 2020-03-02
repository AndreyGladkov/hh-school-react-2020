import React from "react";

import Phone from "./phone";

export default class PersonalData extends React.PureComponent{

    refFIO = React.createRef();
    refEmail = React.createRef();

    state = {
        validationFIO: true,
        validationEmail: true
    }

    render() {
        return (
            <div className="form-order-group">
                <label className="form-order__label">Контактное лицо</label>
                <input 
                    className={`input ${!this.state.validationFIO && "input_error"}`} 
                    type="text" 
                    placeholder="ФИО" 
                    ref={this.refFIO}    
                    onBlur={
                        this.checkValidationFIO
                    }      
                />
                <input 
                    className={`input ${!this.state.validationEmail && "input_error"}`}
                    type="text" 
                    placeholder="Электронная почта"
                    ref={this.refEmail}    
                    onBlur={
                        this.checkValidationEmail
                    }/>
                <Phone changePopupState={this.props.changePopupState}/>
            </div>
        );
    }

    checkValidationFIO = () => {
        let fio = this.refFIO.current.value;
        if (this.isEmpty(fio)) {
            this.setState({validationFIO: false});
            this.props.changePopupState({fio: null});
        }
        else {
            this.setState({validationFIO: true});
            this.props.changePopupState({fio: fio});
        }
    }

    checkValidationEmail = () => {
        let email = this.refEmail.current.value;
        if (this.isEmpty(email)) {
            this.setState({validationEmail: false})
            this.props.changePopupState({email: null});
            return;
        }
        if (this.isEmail(email)) {
            this.setState({validationEmail: true})
            this.props.changePopupState({email: email});
        }
        else {
            this.setState({validationEmail: false})
            this.props.changePopupState({email: null});
        }
    }

    isEmpty = (checkStr) => {
        if (!checkStr.trim()) {
            return true;
        }
    }

    isEmail = (checkStr) => {
        const matchStr = checkStr.match(/@/);
        if (!matchStr) {
          return false;
        }
        return true;
      }
}