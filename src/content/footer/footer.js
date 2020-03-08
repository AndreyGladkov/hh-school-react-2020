import React, { Component } from "react";
import { LayoutWrapper, LayoutColumn, LayoutRow } from "../../structure/layout/layout";
import Social from "./common/social/social";
import MobileApp from "./common/mobileApp/mobileApp";
import Logo from "../../components/common/logo/ logo";
import Copyright from "./common/copyright/copyright";
import Statistics from "./common/statistics/statistics";
import "./footer.less";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statisticsData: this.props.statisticsData
        };
    }

    render() {
        return (
            <section className="footer">
                <LayoutWrapper>
                    <LayoutRow>
                        <LayoutColumn sColumnQnt={"2"} mColumnQnt={"3"} lColumnQnt={"4"}>
                            <div className="footer__social">
                                <Social />
                            </div>
                        </LayoutColumn>
                        <div className="footer__fill"></div>
                        <LayoutColumn sColumnQnt={"2"} mColumnQnt={"3"} lColumnQnt={"4"}>
                            <div className="footer__mobileApp">
                                <MobileApp />
                            </div>
                        </LayoutColumn>
                        <LayoutColumn sColumnQnt={"2"} mColumnQnt={"3"} lColumnQnt={"4"}>
                            <div className="footer__logo">
                                <Logo url={"/"} src={"./../images/logo-dark.svg"} alt={"hh.ru"} />
                            </div>
                        </LayoutColumn>
                    </LayoutRow>
                    <hr className="footer__line"></hr>
                    <LayoutRow>
                        <LayoutColumn sColumnQnt={"2"} mColumnQnt={"5"} lColumnQnt={"7"}>
                            <Copyright />
                            <Statistics statisticsData={this.state.statisticsData} />
                        </LayoutColumn>
                    </LayoutRow>
                </LayoutWrapper>
            </section>
        );
    }
}