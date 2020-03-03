import React, { Component } from "react";
import { Wrapper } from "../common/Layout/Layout";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import CarouselDots from "./CarouselDots/CarouselDots";

import './carousel-product-1@1.png';
import './carousel-product-2@1.png'

import "./carouselSection.less";

export default class CarouselSection extends Component {

  state = {
    activeSlide: 1
  };

  slides = [
    {
      src: "images/carousel-product-1@1.png",
      srcset: "images/carousel-product-1@1.png 1x, images/carousel-product-1@2x.png 2x, images/carousel-product-1@3x.png 3x",
      title: "Мужская и женская одежда с символикой HeadHunter",
      id: 1
    },
    {
      src: "images/carousel-product-2@1.png",
      srcset: "images/carousel-product-2@1.png 1x, images/carousel-product-2@2x.png 2x, images/carousel-product-2@3x.png 3x",
      title: "Офисные принадлежности с символикой HeadHunter",
      id: 2
    }
  ];


  initSlide(id) {
    if (this.state.activeSlide === id) return;

    this.setState({ activeSlide: id });
  };

  render() {

    const slides = this.slides.map((slide, index) => {
      return (
        <CarouselSlide
          key={index}
          id={slide.id}
          src={slide.src}
          srcset={slide.srcset}
          title={slide.title}
          button={slide.button}
          activeSlide={this.state.activeSlide}
        />
      );
    });

    return (
      <section className="carousel-section">
        <Wrapper>
          <div className="carousel-section__cards-wrapper">
            {slides}
          </div>
          <div className="carousel-dots">
            <CarouselDots
              dotsNumber={slides.length}
              activeDot={this.state.activeSlide}
              clickHandler={this.initSlide.bind(this)}
            />
          </div>
        </Wrapper>
      </section>
    )
  }
}