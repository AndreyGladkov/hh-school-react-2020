import React, { Component } from "react";
import Button from "../../common/Button/Button";

import "./carouselSlide.less";

export default props => {

  const buttons = {
    slideButton: {
      className: 'button carousel-card__description-button',
      title: 'Перейти в каталог'
    }
  };

  return (
    <div
      data-slide-id={props.id}
      className={
        props.id === props.activeSlide
          ? "carousel-card carousel-card_active js-slide"
          : "carousel-card js-slide"
      }
    >
      <div className="carousel-card__description">
        <h1 className="heading carousel-card__description-title">{props.title}</h1>
        <Button button={buttons.slideButton} />
      </div>
      <div className="carousel-card__image-container">
        <img
          className="carousel-card__image"
          src={props.src}
          srcSet={props.srcset}
          alt={props.title}
        />
      </div>
    </div>
  );
}