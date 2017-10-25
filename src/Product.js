import React, { Component } from 'react';
import './App.css';

class Product extends Component {
	getImageSource(){
		// console.log(this.props.img);
		return this.props.img;
	}

	getProductName(){
		// console.log(this.props.id);
		var id = this.props.id;
		return id;
	}

	render() {
		var img = this.getImageSource();
		var productName = this.getProductName();

		return (
			<div className="product"> 
					<img className="productImage" src={img}/> 
					<div id={productName} className="namePrice"> 
						<p className="name"> {productName} </p>
						<p className="price"> $11.99 </p>
						<img className="rating" src={require('./img/RatingAndReviews.png')}/> 
					</div> 
					<a href="#"> <img onClick={this.props.buttonPressed} id={productName} className="viewItemButton" src={require('./img/ViewItemButton.png')}/> </a>
			</div>
		);
	}
}

export default Product;