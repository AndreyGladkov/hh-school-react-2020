import React from "react";

import Social from "./social";
import App from "./app";
import Logo from "./logo";

import {socialItems} from "../variables";
import {appItems} from "../variables";
import {footerLogo} from "../variables";

export default function(props) {
    return (
        <div className="footer-content-social-app-logo">
            <div className="columns-row">
                <div className="column column_s-2 column_m-3 column_l-4">
                    <div className="footer-content-social">
                        {socialItems.map((el) => <Social key={el.name} name={el.name} src={el.src} url={el.url}/>)}
                    </div>
                </div>
                <div className="column column_s-2 column_m-3 column_l-4">
                    <div className="footer-content-app">
                        {appItems.map((el) => <App key={el.name} name={el.name} src={el.src} url={el.url}/>)}
                    </div>
                </div>
                <div className="column column_s-2 column_m-3 column_l-4">
                    <Logo url={footerLogo.url} src={footerLogo.src} alt={footerLogo.alt}/>
                </div>
            </div>
        </div>
    );
}