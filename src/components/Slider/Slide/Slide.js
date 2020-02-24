import React from "react";
import "./Slide.less";

export function Slide(props) {
  const src = props.src;
  const srcset = props.srcset;
  const title = props.title;
  const callToActionText = props.callToActionText;

  return (
    <div data-slide-id="1" className="slide slide__active js-slide">
      <div className="column column_s-2 column_m-3 column_l-6">
        <div className="slide__image-container">
          <img
            className="slide__image"
            src={src}
            srcset={srcset}
          />
        </div>
      </div>
      <div className="column column_s-2 column_m-3 column_l-6 be-first">
        <div className="slide__heading-wrapper">
          <h1 className="heading">
            {title}
          </h1>
          <button className="button default-button">{callToActionText}</button>
        </div>
      </div>
    </div>
  );
}
