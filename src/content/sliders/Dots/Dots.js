import React from "react";
import "./Dots.less";

export default function Dots(props) {
    if (!props.dotsQnt) return;

    const dotsQnt = props.dotsQnt;
    const activeDotIndex = props.activeDotIndex || 0;
    const onClickHandler = props.onClickHandler;

    let dots = [];
    for (let i = 0; i < dotsQnt; i++) {
        const className =
            activeDotIndex === i
                ? "dots__conteiner dots__conteiner_active"
                : "dots__conteiner";

        dots.push(
            <div className={className} key={i} onClick={() => onClickHandler(i)}></div>
        );
    }

    return (
        <div className="slider__dot">
            <div className="dots">{dots}</div>
        </div>
    );
}