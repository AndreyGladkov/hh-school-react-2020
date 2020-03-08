import React, { Component } from "react";
import { LayoutRow, LayoutColumn } from "../../../structure/layout/layout";
import Button from "../../../components/common/button/button";
import "./Slider.less";

export default function Slider(props) {
    const src = props.src || "";
    const title = props.title || "";
    const callToActionTitle = props.callToActionTitle || "Перейти";

    return (
        <div className="slide" style={{ transform: `translateX(-${props.activeSlideId * 100}%)` }}  >
            <LayoutRow>
                <LayoutColumn sColumnQnt={"2"} mColumnQnt={"3"} lColumnQnt={"6"}>
                    <h1 className="slide__header">{title}</h1>
                    <div className="slide__button">
                        <Button title={callToActionTitle} modifierArr={["blue"]} />
                    </div>
                </LayoutColumn>
                <LayoutColumn sColumnQnt={"2"} mColumnQnt={"3"} lColumnQnt={"6"} flexOrder={"reverse"}  >
                    <div className="slide__image-container">
                        <img className="slide__image" src={src} alt={title} />
                    </div>
                </LayoutColumn>
            </LayoutRow>
        </div>
    );
}