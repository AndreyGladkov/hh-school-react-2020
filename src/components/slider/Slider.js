import React from 'react';
import sliderData from './sliderData';
import Button from '../common/button';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 0
		};
		this.slides = sliderData;
		this.max = this.slides.length;
		this.autoplay = true;
		this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
	}

	componentDidMount() {
		this.interval = setInterval(() => this.intervalBetweenSlides(), 8000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	intervalBetweenSlides() {
		if (this.autoplay) {
			if (this.state.active === this.max - 1) {
				this.setState({
					active: 0
				})
			} else {
				this.setState({
					active: this.state.active + 1
				})
			}

			this.setState({
				active: this.state.active
			});
		}
	}

	dots(index) {
		this.setState({
			active: index
		});
	}


	isActiveDot(value) {
		if (this.state.active === value) {
			return ' pagination__dot_active';
		} else {
			return '';
		}
	}

	setSliderStyles() {
		const transition = this.state.active * -200 / this.slides.length;

		return {
			width: (this.slides.length * 100) + '%',
			transform: `translateX(${transition}%)`
		};
	}

	renderSlides() {

		return this.slides.map((item, index) => (
			<div 
				className={"slider-section__slide"}
				key={index}
				style={this.setSliderStyles()}
			>
				<div className="columns-row">
					<div className="column column_s-2 column_m-3 column_l-6">
						<h1 className="slider-section__heading heading heading_level-1">
							{item.description}
						</h1>
						<div className="slider-section__button">
							<Button 
								theme="slider-section-button" 
								text="Перейти в каталог" />
						</div>
					</div>
					<div className="column column_s-2 column_m-3 column_l-6 slider-section__column">
						<div className="slider-section__image-container">
							<img className="slider-section__image" src={item.srcImg}
							alt={item.description}
							srcSet={item.srcsetImg} />
						</div>
					</div>
				</div>
			</div>
		));
	}

	renderDots() {
		return this.slides.map((item, index) => (
			<div 
				className={"pagination__dot" + this.isActiveDot(index)}
				key={index}
				
				onClick={this.dots.bind(this, index)}
			>
			</div>
		));
	}

	render() {
		return (
			<section className="slider-section">
				<div className="columns-wrapper">
					<div 
						className="slider-wrapper"
					>
						{this.renderSlides()}
					</div>
					<div className="slider-section__pagination">
						<div className="pagination">
							{this.renderDots()}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
