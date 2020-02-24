import React, { Component } from "react";
import Link from "./../Link/Link";
import "./Social.less";

/* Компонент Social*/
export default class Social extends Component {
  state = {
    linksConfig: [
      { url: "/", resource: "facebook" },
      { url: "/", resource: "twitter" },
      { url: "/", resource: "vk" },
      { url: "/", resource: "instagram" }
    ]
  };

  render() {
    const socialLinks = this.state.linksConfig.map((linkConfig, index) => {
      return (
        <div className="social__link" key={index}>
          <Link
            url={linkConfig.url}
            linkType="icon"
            modifierArr={[linkConfig.resource]}
          />
        </div>
      );
    });

    return <div className="social">{socialLinks}</div>;
  }
}
