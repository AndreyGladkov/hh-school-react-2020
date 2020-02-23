import React from "react";

import Slider from "./slider";
import Dot from "./dot";

import {sliderItems} from "../variables";

export default function(props) {
    return (
        <section className="slider-section">
            <div className="columns-wrapper">
                <div className="columns-row">
                    <div className="slider-wrapper">
                        {sliderItems.map((el) => 
                            <Slider 
                                key={el.id}
                                active={el.active}
                                text={el.text} 
                                image1x={el.image1x}
                                image2x={el.image2x}
                                image3x={el.image3x}
                                redirect={el.redirect}
                            />
                        )}               
                    </div>
                </div>
                <div className="columns-row">
                    <div className="slider-content-block-dots js-slide-buttons">
                        {sliderItems.map((el) => 
                                <Dot 
                                    key={el.id}
                                    active={el.active}
                                />
                            )}                 
                    </div>
                </div>        
            </div>
        </section>
    );
}