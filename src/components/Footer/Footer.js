import React from "react";
import "./Footer.less";
import { ColumnsWrapper, Row, Column } from '../Common/Grid/Grid';
import Logo from './../Common/Logo/Logo';
import SocialMediaIcons from './../Common/SocialMediaIcons/SocialMediaIcons';
import AppStoresIcons from './../Common/AppStoresIcons/AppStoresIcons';

export default class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
            statistics: {
                copyright: "© 2019 Группа компаний HeadHunter",
                vacancies: "688 990",
                resumes: "34 789 747",
                companies: "858 923",
                invitesPerWeek: "1 211 363"
            }
        }
    }

    render() {
        return (
            <footer className="footer">
                <ColumnsWrapper>
                    <Row>
                        <Column quantityColumnsS="2"
                            quantityColumnsM="3"
                            quantityColumnsL="4">
                            <SocialMediaIcons />
                        </Column>
                        <Column quantityColumnsS="2"
                            quantityColumnsM="3"
                            quantityColumnsL="4">
                            <AppStoresIcons />
                        </Column>
                        <Column quantityColumnsS="0"
                            quantityColumnsM="0"
                            quantityColumnsL="4">
                            <div className="footer__logo">
                                <Logo color="grey" />
                            </div>
                        </Column>
                        <Column quantityColumnsS="2"
                            quantityColumnsM="6"
                            quantityColumnsL="12">
                            <div className="footer__info">
                                <hr className="footer__line" />
                                <div className="footer__statistics">{this.state.statistics.copyright}<br /> Сегодня на сайте {this.state.statistics.vacancies} вакансий, 
                                {this.state.statistics.resumes} резюме, {this.state.statistics.companies} компании и {this.state.statistics.invitesPerWeek} приглашения за неделю
                                </div>
                            </div>
                        </Column>
                    </Row>
                </ColumnsWrapper>
            </footer>
        );
    }
}
