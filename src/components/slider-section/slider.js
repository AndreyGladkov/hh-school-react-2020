import React from "react";

export default function(props) {
    let srcset = props.image1x + " 1x, " +  props.image2x + " 2x, " + props.image3x + " 3x";
    return (
        <div className={
            `slider-content 
            ${props.previous && props.needAnimation && "slider-content_hide"}
            ${props.active && props.needAnimation && "slider-content_show"}
            ${props.forwards && props.needAnimation && "slider-content_animation-reverse"}
            ${props.active && !props.needAnimation && "slider-content_active"}`}
            onAnimationEnd={props.onAnimationEnd}
            >
            <div className="slider-content__image-container column column_s-2 column_m-3 column_l-6">
                <img className="slider-content__image" 
                    src={props.image1x} 
                    srcSet={srcset}/>
            </div>                
            <div className="slider-content-text-button">
                <div className="slider-content__text-container column column_s-2 column_m-3 column_l-6">
                    <h1 className="heading">{props.text}</h1>
                </div>
                <div className="slider-content__button-container column column_s-2 column_m-3 column_l-6">
                    <button className="button">{props.redirect}</button>
                </div>
            </div>
        </div>
    );
}