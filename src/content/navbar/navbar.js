import React, { Component } from "react";
import { LayoutWrapper } from "../../structure/layout/layout";
import Navigation from "../header/navigation/navigation";
import Link from "../footer/common/social/link/link";
import "./navbar.less";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area: {
                city: this.props.area.city,
                url: this.props.area.url,
                modifierArr: ["dark-grey"]
            },
            linksConfig: [
                { url: "/", title: "Шоурум", modifierArr: ["blue"] },
                { url: "/", title: "Оплата", modifierArr: ["blue"] },
                { url: "/", title: "Доставка", modifierArr: ["blue"] },
                { url: "/", title: "Самовывоз", modifierArr: ["blue"] },
                { url: "/", title: "Контактная информация", modifierArr: ["blue"] }
            ]
        };
    }

    render() {
        return (
            <section className="navbar">
                <LayoutWrapper>
                    <div className="navbar__content">
                        <Link url={this.state.area.url} title={this.state.area.city} modifierArr={this.state.area.modifierArr} />
                        <div className="navbar__fill"></div>
                        <Navigation linksConfig={this.state.linksConfig} />
                    </div>
                </LayoutWrapper>
            </section>
        );
    }
}