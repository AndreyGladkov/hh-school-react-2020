import React, { Component } from "react";

export default class RadioSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false
    };
    this.className = props.theme || "";
    this.value = props.value || "";
    this.onChangeHandler = props.onChangeHandler || null;
    this.onChangeSelfHandler = this.onChangeSelfHandler.bind(this);
  }

  onChangeSelfHandler(e) {
    this.setState({ checked: !this.state.checked });
    if (this.onChangeHandler) {
      this.onChangeHandler(e);
    }
  }

  render() {
    return (
      <div className="product-card__sizing-box">
        <label>
          <input
            type="radio"
            name="size"
            className={this.className}
            defaultChecked={this.state.checked}
            value={this.value}
            disabled={this.props.disabled}
            onChange={this.onChangeSelfHandler}
          ></input>
          <span className="radio-button product-card__sizing-button">
            {this.value}
          </span>
        </label>
      </div>
    );
  }
}
