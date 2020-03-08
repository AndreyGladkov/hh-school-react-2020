import React, { Component } from "react";
import { LayoutWrapper } from "../../structure/layout/layout";
import Logo from "../../components/common/logo/ logo";
import Button from "../../components/common/button/button";
import Navigation from "./navigation/navigation";
import "./header.less";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linksConfig: [
                { url: "/", title: "Одежда" },
                { url: "/", title: "Сумки" },
                { url: "/", title: "Аксессуары" },
                { url: "/", title: "Офисные принадлежности" }
            ]
        };
    }

    render() {
        return (
            <section className="header">
                <LayoutWrapper>
                    <div className="header__content">
                        <div className="header__logo">
                            <Logo url={"/"} src={"../../images/logo.svg"} alt={"hh.ru"} />
                        </div>
                        <Navigation linksConfig={this.state.linksConfig} />
                        <div className="header__fill"></div>
                        <div className="header__button">
                            <Button type="icon" modifierArr={["search"]} />
                        </div>
                        <div className="header__button">
                            <Button type="icon" modifierArr={["login"]} />
                        </div>
                        <div className="header__button-login">
                            <Button title={"Войти"} modifierArr={["login"]} />
                        </div>
                        <div className="header__button-menu">
                            <Button type="icon" modifierArr={["menu"]} />
                        </div>
                    </div>
                </LayoutWrapper>
            </section>
        );
    }
}