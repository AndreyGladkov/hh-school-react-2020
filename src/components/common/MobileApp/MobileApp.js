import React, { Component } from "react";
import Button from "./../Button/Button";
import "./MobileApp.less";

/* Компонент MobileApp*/
export default class MobileApp extends Component {
  state = {
    linksConfig: [
      { url: "/", resource: "app-store" },
      { url: "/", resource: "google-play" }
    ]
  };

  render() {
    const appLinks = this.state.linksConfig.map((appConfig, index) => {
      return (
        <div className="mobileApp__button" key={index}>
          <Button
            url={appConfig.url}
            type="icon"
            modifierArr={[appConfig.resource]}
          />
        </div>
      );
    });

    return <div className="mobileApp">{appLinks}</div>;
  }
}
