import React from "react";
import "./Pagination.less";

export function Pagination(props) {
  if (!props.slidesQuantity) return;

  const slidesQuantity = props.slidesQuantity;
  const activeElementId = props.activeDotIndex || 0;
  const onClickHandler = props.onClickHandler;

  let elements = [];
  for (let i = 0; i < slidesQuantity; i++) {
    const className =
    activeElementId === i
        ? "slider-nav__dot slider-nav__dot__active js-slide-button"
        : "slider-nav__dot js-slide-button";

    elements.push(
      <div
        key={i}
        //data-slide-id="1"
        className={className}
        onClick={() => onClickHandler(i)}
      ></div>
    );
  }

  return (
    <div className="slider-nav js-slide-buttons">
      {elements}
    </div>
  );
}
