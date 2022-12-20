import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { fetchProductsByID } from "../../redux/actions";
import WithShopService from "../hoc";
import "./css/product-page.css";
import slider from "./js/slider";
class ProductPage extends Component {
	componentDidMount() {
		this.props.fetchProductsByID(this.props.location.state.id);
	}
	render() {
		const { products: product, loading, error } = this.props;
		if (loading) return <Spinner />;
		if (error) return <ErrorIndicator />;
		return <BlockProduct />;
	}
}

const BlockProduct = () => {
	const [slider, setSlider] = useState({
		left: 0,
		widthSlide: 0,
		count: 0,
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
	console.log(slider);
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
	const lineStyle = {
		left: slider.left,
	};
	return (
		<section className="section-product">
			<h1>Telephoneeee</h1>
			<div className="wrap-product-block">
				<div className="product-box__images">
					<button className="left" onClick={() => moveSlider(-1)}>
						left
					</button>
					<button className="right" onClick={() => moveSlider(1)}>
						right
					</button>
					<div className="product-image-slider">
						<div className="product-box__images-line" style={lineStyle}>
							<div>
								<img
									src="http://buzzviral.ru/wp-content/uploads/2018/06/lil-devil.png"
									alt=""
								/>
							</div>
							<div>
								<img
									src="http://buzzviral.ru/wp-content/uploads/2018/06/lil-devil.png"
									alt=""
								/>
							</div>
							<div>
								<img
									src="http://buzzviral.ru/wp-content/uploads/2018/06/lil-devil.png"
									alt=""
								/>
							</div>
							<div>
								<img
									src="http://buzzviral.ru/wp-content/uploads/2018/06/lil-devil.png"
									alt=""
								/>
							</div>
							<div>
								<img
									src="http://buzzviral.ru/wp-content/uploads/2018/06/lil-devil.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="product-box-description">
					<div className="product-box__buttons">
						<button className="change-description">Show description</button>
						<button className="add-to-cart">Show description</button>
					</div>
					<div className="description">
						<ul>
							<li>
								<span>brand</span>
								<p>Apple</p>
							</li>
							<li>
								<span>category</span>
								<p>smartphones</p>
							</li>
							<li>
								<span>description</span>
								<p>
									SIM-Free, Model A19211 6.5-inch Super Retina HD display with
									OLED technology A12 Bionic chip with ...
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = ({ products, loading, error }) => {
	return { products, loading, error };
};

const mapDispatchToProps = (dispatch, { shopService }) => {
	return {
		fetchProductsByID: (id) => fetchProductsByID(dispatch, shopService)(id),
	};
};
export default WithShopService()(
	connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
