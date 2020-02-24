import React, { Component } from "react";
import { LayoutColumn } from "./../../common/Layout/Layout";
import { GlobalContext } from "./../../../GlobalContext";
import "./../Features.less";
import "./Feature.less";

/* Компонент Feature.
Принимает: 
- featureData      | object |    (данные фичи)
Использует глобальный контекст GlobalContext (путь до картинок)
*/
export default function Feature(props) {
  if (!props.featureData) return;

  const featureData = props.featureData;

  return (
    <GlobalContext.Consumer>
      {({ imagesPath }) => (
        <LayoutColumn sColumnQnt={"2"} mColumnQnt={"2"} lColumnQnt={"4"}>
          <div className="feature features-section__feature">
            <img
              className="feature__image"
              src={`${imagesPath}${featureData.image}`}
              alt={featureData.description}
            />
            <div className="feature__description">
              {featureData.description}
            </div>
          </div>
        </LayoutColumn>
      )}
    </GlobalContext.Consumer>
  );
}
