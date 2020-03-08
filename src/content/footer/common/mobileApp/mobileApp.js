import React, { Component } from "react";
import Button from "../../../../components/common/button/button";
import "./mobileApp.less";


export default class MobileApp extends Component {
    state = {
        appsConfig: [
            { url: "/", resource: "app-store" },
            { url: "/", resource: "google-play" }
        ]
    };

    render() {
        const appLinks = this.state.appsConfig.map((appConfig, index) => {
            return (
                <div className="mobileApp__button" key={index}>
                    <Button url={appConfig.url} type="icon" modifierArr={[appConfig.resource]} />
                </div>
            );
        });
        return <div className="mobileApp">{appLinks}</div>;
    }
}