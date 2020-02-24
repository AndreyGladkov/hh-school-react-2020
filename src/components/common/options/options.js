import React, { Component, Fragment } from "react";
import asyncLoader from "./asyncLoader";

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesFromServer: null
    };
    this.className = props.theme;
    this.handleUserInput = props.handleUserInput;
  }

  componentDidMount() {
      asyncLoader("https://api.hh.ru/areas/113").then(citiesResponse => {
        const cities = citiesResponse.areas[21].areas.slice(0, 10);
        this.setState({ citiesFromServer: cities });
      });
  }

  render() {
    let optionsJSX = null;
    if (this.state.citiesFromServer) {
      optionsJSX = this.state.citiesFromServer.map((city, index) => {
        return (
          <option 
            key={index}
            value={city.name} 
            className="className">
            {city.name}
          </option>
        );
      });
    }

    return (
      <Fragment>
        {optionsJSX}
      </Fragment>
    );
  }
}
