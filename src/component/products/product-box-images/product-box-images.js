import React, { useState, useEffect } from "react";

const ProductBoxImages = ({ images }) => {
	const [slider, setSlider] = useState({
		left: 0,
		widthSlide: 0,
		count: 0,
		touchDown: null,
		swipe: true,
	});
	useEffect(() => {
		const sliderCount = document.querySelectorAll(
			".product-box__images-line>div"
		).length;
		const sliderWidth = document.querySelector(
			".product-box__images-line>div"
		).offsetWidth;
		setSlider((slider) => {
			return {
				...slider,
				widthSlide: sliderWidth,
				count: sliderCount,
			};
		});
	}, []);
	const moveSlider = (orient) => {
		if (orient === 1 && slider.left == 0) {
			return;
		}
		if (
			orient === -1 &&
			slider.left == -1 * (slider.count * slider.widthSlide) + slider.widthSlide
		) {
			return;
		}
		setSlider((slider) => {
			return {
				...slider,
				left: slider.left + orient * 450,
			};
		});
	};
	const handleTouchStart = (e) => {
		const touchDown = e.touches[0].clientX;

		setSlider((slider) => {
			return {
				...slider,
				touchDown: touchDown,
			};
		});
	};
	const handleTouchMove = (e) => {
		if (slider.touchDown === null) {
			return;
		}

		const currentPosition = e.touches[0].clientX;
		const direction = slider.touchDown - currentPosition;

		if (direction < 10) {
			moveSlider(1);
		}

		if (direction > -10) {
			moveSlider(-1);
		}

		setSlider((slider) => {
			return {
				...slider,
				touchDown: null,
			};
		});
	};
	const handleClickStart = (e) => {
		const touchDown = e.clientX;
		setSlider((slider) => {
			return {
				...slider,
				touchDown: touchDown,
			};
		});
	};
	const handleClickMove = (e) => {
		if (slider.touchDown === null) {
			return;
		}

		const currentPosition = e.clientX;
		const direction = slider.touchDown - currentPosition;
		if (direction < 0) {
			moveSlider(1);
		}

		if (direction > 0) {
			moveSlider(-1);
		}

		setSlider((slider) => {
			return {
				...slider,
				touchDown: null,
			};
		});
	};
	const lineStyle = {
		left: slider.left,
	};

	return (
		<FrontImagesSlider
			images={images}
			moveSlider={moveSlider}
			handleTouchStart={handleTouchStart}
			handleTouchMove={handleTouchMove}
			handleClickStart={handleClickStart}
			handleClickMove={handleClickMove}
			lineStyle={lineStyle}
		/>
	);
};

const FrontImagesSlider = (props) => {
	const initialImg =
		"http://buzzviral.ru/wp-content/uploads/2018/06/lil-devil.png";
	const {
		images = [initialImg],
		moveSlider,
		handleTouchStart,
		handleTouchMove,
		handleClickStart,
		handleClickMove,
		lineStyle,
	} = props;
	return (
		<div className="product-box__images">
			<button className="slider__btn left" onClick={() => moveSlider(-1)}>
				{"<"}
			</button>
			<div className="product-image-slider">
				<div
					className="product-box__images-line"
					style={lineStyle}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onMouseDown={handleClickStart}
					onMouseMove={handleClickMove}
				>
					{images.map((image, idx) => {
						return (
							<div key={idx}>
								<img src={image} alt="" />
							</div>
						);
					})}
				</div>
			</div>
			<button className="slider__btn right" onClick={() => moveSlider(1)}>
				{">"}
			</button>
		</div>
	);
};

export default ProductBoxImages;
