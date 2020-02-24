import React, { Component } from "react";
import { connect } from "react-redux";
import { showActiveSlide } from "./../../actions";
import { LayoutWrapper } from "./../common/Layout/Layout";
import Pagination from "./Pagination/Pagination";
import Slide from "./Slide/Slide";
import "./Slider.less";

const mapStateToProps = state => ({
  activeSlideId: state.activeSlideId
});

const mapDispatchToProps = dispatch => ({
  showSlide: id => dispatch(showActiveSlide(id))
});

/* Компонент-контейнер Slider.
Принимает:
- slidesConfig    | object |    (конфигурация слайдов)
- activeSlideID   | number |    (номер активного слайда)
*/
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesConfig: this.props.slidesConfig
    };
  }

  render() {
    const sliders = this.state.slidesConfig.map((slideConfig, index) => {
      return (
        <Slide
          key={index}
          src={slideConfig.src}
          srcset={slideConfig.srcset}
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
          <Pagination
            dotsQnt={sliders.length}
            activeDotIndex={this.props.activeSlideId}
            onClickHandler={this.props.showSlide}
          />
        </LayoutWrapper>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
