import React from "react";

import Slider from "./slider";
import Dot from "./dot";

import {sliderItems} from "../variables";

export default class SliderSection extends React.PureComponent {

    state = {
        active: 0,
        previous: 1,
        animation: false
    }

    render() {
        return (
            <section className="slider-section">
                <div className="columns-wrapper">
                    <div className="columns-row">
                        <div className="slider-wrapper">
                            {sliderItems.map((el, ind) => 
                                <Slider 
                                    key={el.id}
                                    active={this.state.active === ind}
                                    previous={this.state.previous === ind}
                                    forwards={this.state.active < this.state.previous}
                                    text={el.text} 
                                    image1x={el.image1x}
                                    image2x={el.image2x}
                                    image3x={el.image3x}
                                    redirect={el.redirect}
                                    needAnimation={this.state.animation}
                                    onAnimationEnd={
                                        () => { this.setState({animation: false})}
                                    }
                                />
                            )}               
                        </div>
                    </div>
                    <div className="columns-row">
                        <div className="slider-content-block-dots">
                            {sliderItems.map((el, ind) => 
                                    <Dot 
                                        key={el.id}
                                        active={this.state.active === ind}
                                        onClick={
                                            () => {
                                                let previous = this.state.active;
                                                this.setState({active: ind, animation: true, previous: previous})
                                            }
                                        }
                                    />
                                )}                 
                        </div>
                    </div>        
                </div>
            </section>
        );
    }
}