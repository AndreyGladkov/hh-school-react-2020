import React, { Component } from "react";
import { LayoutWrapper } from "./../common/Layout/Layout";
import Pagination from "./Pagination/Pagination";
import Slide from "./Slide/Slide";
import "./Slider.less";

/* Компонент-секция Slider*/
export default class Header extends Component {
  state = {
    activeSlideId: 0, //Id активного слайда
    slidersConfig: [
      //конфигурация слайдов
      {
        src: "images/slide-1@1x.png",
        title: "Мужская и женская одежда с символикой HeadHunter",
        callToActionTitle: "Перейти в каталог",
        srcset:
          "images/slide-1@1x.png 1x, images/slide-1@2x.png 2x, images/slide-1@3x.png 3x"
      },
      {
        src: "images/slide-2@1x.png",
        title: "Офисные принадлежности с символикой HeadHunter",
        callToActionTitle: "Перейти в каталог",
        srcset:
          "images/slide-2@1x.png 1x, images/slide-2@2x.png 2x, images/slide-2@3x.png 3x"
      }
    ]
  };

  /* Метод: меняет id активного слайда */
  showSlide = id => {
    if (this.state.activeSlideId === id) {
      return;
    }

    this.setState({ activeSlideId: id });
  };

  render() {
    const sliders = this.state.slidersConfig.map((slideConfig, index) => {
      return (
        <Slide
          key={index}
          src={slideConfig.src}
          srcset={slideConfig.srcset}
          title={slideConfig.title}
          callToActionTitle={slideConfig.callToActionTitle}
          activeSlideId={this.state.activeSlideId}
        />
      );
    });

    return (
      <section className="slider">
        <LayoutWrapper>
          <div className="slider__wrapper">{sliders}</div>
          <Pagination
            dotsQnt={sliders.length}
            activeDotIndex={this.state.activeSlideId}
            onClickHandler={this.showSlide.bind(this)}
          />
        </LayoutWrapper>
      </section>
    );
  }
}
