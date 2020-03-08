import React, { Component } from "react";
import { connect } from "react-redux";
import { showActiveSlide } from "../../actions/actions";
import { LayoutWrapper } from "../../structure/layout/layout";
import Dots from "./Dots/Dots";
import Slider from "./Slider/Slider";
import "./Sliders.less";

const mapStateToProps = state => ({
    activeSlideId: state.activeSlideId
});

const mapDispatchToProps = dispatch => ({
    showSlide: id => dispatch(showActiveSlide(id))
});

class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slidesConfig: this.props.slidesConfig
        };
    }

    render() {
        const sliders = this.state.slidesConfig.map((slideConfig, index) => {
            return (
                <Slider
                    key={index}
                    src={slideConfig.src}
                    title={slideConfig.title}
                    callToActionTitle={slideConfig.callToActionTitle}
                    activeSlideId={this.props.activeSlideId}
                />
            );
        });


        return (
            <section className="slider">
                <LayoutWrapper>
                    <div className="slider__wrapper">{sliders}</div>
                    <Dots dotsQnt={sliders.length} activeDotIndex={this.props.activeSlideId} onClickHandler={this.props.showSlide} />
                </LayoutWrapper>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sliders);