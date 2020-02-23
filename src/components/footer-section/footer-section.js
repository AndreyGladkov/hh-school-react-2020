import React from "react";

import SocialAppLinks from "./social-app-links";
import Copyright from "./copyright";
import Stats from "./stats";

import {currentYear} from "../variables";
import {stats} from "../variables";

export default function(props) {
    return (
        <footer className="footer">
            <div className="columns-wrapper">
                <div className="footer-content">
                    <SocialAppLinks/>
                    <div className="footer-content__line"></div>
                    <Copyright year={currentYear}/>
                    <Stats vacancy={stats.vacancy} resume={stats.resume} company={stats.company} invitation={stats.invitation}/>
                </div>
            </div>
        </footer>      
    );
}
