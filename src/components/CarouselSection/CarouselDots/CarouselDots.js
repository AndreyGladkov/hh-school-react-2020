import React from "react";

import "./carouselDots.less";

export default props => {

  if (!props.dotsNumber) return null;

  let dots = [];

  for (let i = 1; i <= props.dotsNumber; i++) {

    dots.push(
      <li
        key={i - 1}
        data-slide-id={i}
        className={
          i === props.activeDot
            ? "js-slide-button carousel-dots__item carousel-dots__item_active"
            : "js-slide-button carousel-dots__item"
        }
        onClick={() => props.clickHandler(i)}
      >
      </li>
    );
  }

  return <ul className="carousel-dots__list js-slide-buttons">{dots}</ul>;
}