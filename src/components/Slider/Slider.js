import React from "react";
import { ColumnsWrapper, Row } from "../Common/Grid/Grid";
import Pagination from "./Pagination/Pagination";
import Slide from "./Slide/Slide";
import "./Slider.less";

export default class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      activeSlideId: 0,
      sliders: [
        {
          src: "./images/slider-1.png",
          title: "Мужская и женская одежда с символикой HeadHunter",
          callToActionText: "Перейти в каталог",
          srcset:
            "./images/slider-1.png 1x, ./images/slider-1@2x.png 2x, ./images/slider-1@3x.png 3x"
        },
        {
          src: "./images/slider-2.png",
          title: "Офисные принадлежности с символикой HeadHunter",
          callToActionText: "Перейти в каталог",
          srcset:
            "./images/slider-2.png 1x, ./images/slider-2@2x.png 2x, ./images/slider-2@3x.png 3x"
        }
      ]
    };

    this.showSlide = this.showSlide.bind(this);
  }

  showSlide = id => {
    if (this.state.activeSlideId === id) {
      return;
    }

    this.setState({ activeSlideId: id });
  };

  render() {
    const sliders = this.state.sliders.map((slide, index) => {
      return (
        <Slide
          key={index}
          src={slide.src}
          srcset={slide.srcset}
          title={slide.title}
          callToActionTitle={slide.callToActionText}
          activeSlideId={this.state.activeSlideId}
        />
      );
    });

    return (
      <section className="slider">
        <ColumnsWrapper>
          <Row>
            <div className="slider-wrapper">{sliders}</div>
            <Pagination />
          </Row>
        </ColumnsWrapper>
      </section>
    );
  }
}
