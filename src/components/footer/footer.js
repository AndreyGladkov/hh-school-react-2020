import React from "react";
import Socials from '../socials';
import Apps from '../apps';
import logoGrey from './logo-grey.svg';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="columns-wrapper">
          <div className="footer-links">
            <div className="columns-row">
              <div className="column column_s-2 column_m-3 column_l-4">
                <Socials />
              </div>
              <div className="column column_s-2 column_m-3 column_l-4">
                <Apps/>
              </div>
              <div className="column column_s-0 column_m-0 column_l-4">
                <div className="footer__logo">
                  <a href="https://hh.ru/" className="logo__link">
                    <img className="logo logo_footer" src={logoGrey} alt="hh.ru" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-info">
            <div className="columns-row">
              <div className="column column_s-2 column_m-6 column_l-12">
                <div className="footer-info__copyright">&copy;&nbsp;2019 Группа компаний HeadHunter</div>
                <div className="footer-info__today">Сегодня на&nbsp;сайте 684&nbsp;978&nbsp;вакансий,
                  34&nbsp;789&nbsp;747&nbsp;резюме, 858&nbsp;923&nbsp;компании и&nbsp;за&nbsp;неделю
                  1&nbsp;211&nbsp;363&nbsp;приглашения</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
export default Footer;
