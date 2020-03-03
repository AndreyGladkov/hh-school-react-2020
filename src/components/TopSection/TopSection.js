import React, { Component } from 'react';

import { Wrapper } from '../common/Layout/Layout';
import Nav from '../Nav/Nav';
import Button from '../common/Button/Button';

import './topSection.less';

export default class TopSection extends Component {

  navigation = {
    navigationClass: "top-section__nav-list",
    list: [
      { id: 1, url: "#", itemClass: "top-section__nav-item", linkClass: "top-section__nav-link", title: "Шоурум" },
      { id: 2, url: "#", itemClass: "top-section__nav-item", linkClass: "top-section__nav-link", title: "Оплата" },
      { id: 3, url: "#", itemClass: "top-section__nav-item", linkClass: "top-section__nav-link", title: "Доставка" },
      { id: 4, url: "#", itemClass: "top-section__nav-item", linkClass: "top-section__nav-link", title: "Самовывоз" },
      { id: 5, url: "#", itemClass: "top-section__nav-item", linkClass: "top-section__nav-link", title: "Контактная информация" }
    ]
  };

  buttons = {
    cityButton: {
      className: 'button-link',
      title: 'Москва'
    }
  };


  render() {
    return (
      <section className="top-section">
        <Wrapper>
          <div className="top-section__content">
            <div className="top-section__button">
              <Button button={this.buttons.cityButton}></Button>
            </div>
            <nav className="top-section__nav">
              <Nav navigation={this.navigation} />
            </nav>
          </div>
        </Wrapper>
      </section>
    )
  }
}