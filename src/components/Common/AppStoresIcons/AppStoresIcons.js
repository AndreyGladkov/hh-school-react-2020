import React from "react";
import "./AppStoresIcons.less";
import appleIcon from './apple.svg';
import googleIcon from './playmarket.svg';

export default function AppStoresIcons(props) {
    return (
        <div className="app-store-icons-container">
            <div className="app-store-icons-container__item">
                <a href="#"><img className="app-store-icon" src={appleIcon}
                    alt="appstore.com" /></a>
            </div>
            <div className="app-store-icons-container__item">
                <a href="#"><img className="app-store-icon" src={googleIcon}
                    alt="playmarket.com" /></a>
            </div>
        </div>
    );
}