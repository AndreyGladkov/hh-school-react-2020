import React, { Component } from "react";
import {
  LayoutWrapper,
  LayoutColumn,
  LayoutRow
} from "./../common/Layout/Layout";
import Logo from "./../common/Logo/Logo";
import Social from "./../common/Social/Social";
import Copyright from "./../common/Copyright/Copyright";
import MobileApp from "./../common/MobileApp/MobileApp";
import Statistics from "./../common/Statistics/Statistics";
import "./Footer.less";

/* Компонент-секция Footer.
Включает в себя:
- блок с соц. сетями
- блок с приложениями на телефон
- логотип
- блок статистики
- блок копирайт

Принимает:
- statisticsData  | object |    (статистические данные)
*/
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
                <Logo
                  url={"/"}
                  src={"./../images/logo-dark.svg"}
                  alt={"hh.ru"}
                />
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
