import React, { useState, useEffect } from "react";
import { ColumnsWrapper, Row, Column } from "../Common/Grid/Grid";
import "./Slider.less";

function Dot(props) {
  return (
    <div
      className={`slider-nav__dot ${(props.active) ? "slider-nav__dot__active" : ""}`}
      onClick={() => props.onClick(props.idx)}
    ></div>
  )
}

export default function Slider(props) {

  const data = [
    {
      src: "/static/images/slider-1.png",
      title: "Мужская и женская одежда с символикой HeadHunter",
      callToActionText: "Перейти в каталог",
      srcset:
        "/static/images/slider-1.png 1x, /static/images/slider-1@2x.png 2x, /static/images/slider-1@3x.png 3x"
    },
    {
      src: "/static/images/slider-2.png",
      title: "Офисные принадлежности с символикой HeadHunter",
      callToActionText: "Перейти в каталог",
      srcset:
        "/static/images/slider-2.png 1x, /static/images/slider-2@2x.png 2x, /static/images/slider-2@3x.png 3x"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = idx => {
    setCurrentSlide(idx);
  };

  const sliders = data.map((slide, index) => {
    return (
      <div className={`slide`} key={index}
        style={{
          transform: `translateX(${-currentSlide * 100}%)`
        }}
      >
        <Column
          quantityColumnsS="2"
          quantityColumnsM="3"
          quantityColumnsL="6" >
          <div className="slide__image-container">
            <img
              className="slide__image"
              src={slide.src}
              srcSet={slide.srcset}
            />
          </div>
        </Column>
        <Column
          quantityColumnsS="2"
          quantityColumnsM="3"
          quantityColumnsL="6" 
          beFirst="true">
          <div className="slide__heading-wrapper">
            <h1 className="heading">
              {slide.title}
            </h1>
            <button className="button default-button">{slide.callToActionText}</button>
          </div>
        </Column>
      </div>
    );
  });

  const dots = data.map((slide, index) => {
    return (
      <Dot
        key={index}
        active={index === currentSlide}
        onClick={goToSlide}
        idx={index}
      />
    );
  });

  return (
    <section className="slider">
      <ColumnsWrapper>
        <Row>
          <div className="slider-wrapper">{sliders}</div>
          <div className="slider-nav">{dots}</div>
        </Row>
      </ColumnsWrapper>
    </section>
  );

}
