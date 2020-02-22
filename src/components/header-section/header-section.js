import React from "react";
import NavItem from "./nav-item";
import Logo from "./logo";
import ButtonSearch from "./button-search";
import ButtonLogin from "./button-login";

import {headerLogo} from "../variables";
import {navItems} from "../variables";

export default function(props) {
    return (
        <header className="header">
            <div className="columns-wrapper">
                <div className="header__content">
                    <Logo url={headerLogo.url} src={headerLogo.src} alt={headerLogo.alt}/>
                    <div className="header__nav">
                        <ul className="nav">
                            {navItems.map((el) => <NavItem key={el.name} name={el.name} url={el.url}/>)}
                        </ul>
                    </div>
                    <div className="header__fill"></div>
                    <ButtonSearch />
                    <ButtonLogin />
                </div>
            </div>
        </header>       
    );
}
