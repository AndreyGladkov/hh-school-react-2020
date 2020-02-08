import React, { Component } from "react";
import { LayoutRow, LayoutColumn } from "./../../common/Layout/Layout";
import Button from "./../../common/Button/Button";
import "./Slide.less";

/* Компонент Slide.
Принимает: 
- src               | string |           (путь до картинки)
- srcset            | string |           (картинки для pixel ratio)
- title             | string |           (заголовок слайда и альтернативный текст)
- callToActionTitle | string |           (Заголовок для кнопки call to action)
- activeSlideId     | string |           (Id/номер активного слайда)
*/
export default function Slide(props) {
  const src = props.src || "";
  const srcset = props.srcset || "";
  const title = props.title || "";
  const callToActionTitle = props.callToActionTitle || "Перейти";

  const className = "slide";

  return (
    <div
      className={className}
      style={{ transform: `translateX(-${props.activeSlideId * 100}%)` }}
    >
      <LayoutRow>
        <LayoutColumn sColumnQnt={"2"} mColumnQnt={"3"} lColumnQnt={"6"}>
          <h1 className="slide__header">{title}</h1>
          <div className="slide__button">
            <Button title={callToActionTitle} modifierArr={["blue"]} />
          </div>
        </LayoutColumn>
        <LayoutColumn
          sColumnQnt={"2"}
          mColumnQnt={"3"}
          lColumnQnt={"6"}
          flexOrder={"reverse"}
        >
          <div className="slide__image-container">
            <img
              className="slide__image"
              src={src}
              alt={title}
              srcSet={srcset}
            />
          </div>
        </LayoutColumn>
      </LayoutRow>
    </div>
  );
}
