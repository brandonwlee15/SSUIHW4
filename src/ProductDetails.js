import React, { Component } from 'react';
import './App.css';

class ProductDetails extends Component {
	constructor(){
		super();
		this.state = {
			size: "tiny",
			color: "strawberry"
		};
	}

	updateColorSelected(colorSelected){
		var colors = document.getElementsByClassName('color');
		// Clear existing selected one
		for (var i=0; i<colors.length; i++){
			colors[i].className = "color";
		}
		// Update new selected one
		var newColorSelected = document.getElementById(colorSelected);
		newColorSelected.className = "color selected";
		// Update state of color
		this.setState({color: colorSelected});
	}

	updateSizeSelected(sizeSelected){
		var sizes = document.getElementsByClassName('size');
		// Clear existing selected one
		for (var i=0; i<sizes.length; i++){
			sizes[i].className = "size";
		}
		// Updated new selected one
		var newSizeSelected = document.getElementById(sizeSelected);
		newSizeSelected.className = "size selected";
		// Update state of size
		this.setState({size: sizeSelected});
		console.log(this.state);
	}

	addToCart(item){
		this.props.addCartQuantity();
		alert("A " + item["size"] + " " + item["color"] + " " + item["product"] + " has been added to your cart");

		var parsedCart = JSON.parse(localStorage.getItem('cart'));
		parsedCart.push(item);
		localStorage.setItem('cart', JSON.stringify(parsedCart));

		var parsedCart = JSON.parse(localStorage.getItem('cart'));
	}

	getImageSource(){
		return this.props.img;
	}

	getProductName(){
		return this.props.name;
	}

	render() {
		var img = this.getImageSource();
		var name = this.getProductName();

		return (
			<div className="productDetails">
				<img className="productImage" src={img}/>
				<div className="namePrice"> 
					<p className="nameProductDetails"> {name} </p>
					<p className="price"> $11.99 </p>
					<img className="rating" src={require('./img/RatingAndReviews.png')}/> 
					<p className="instock"> In Stock </p>
				</div>
				<div className="colors">
					<img onClick={() => this.updateColorSelected("strawberry")} id="strawberry" className="color selected" src={require('./img/strawberry.png')}/>
					<img onClick={() => this.updateColorSelected("blackberry")} id="blackberry" className="color" src={require('./img/blackberry.png')}/>
					<img onClick={() => this.updateColorSelected("crazyberry")} id="crazyberry" className="color" src={require('./img/crazyberry.png')}/>
					<br/>
					<img onClick={() => this.updateColorSelected("camouflage")} id="camouflage" className="color" src={require('./img/camouflage.png')}/>
					<img onClick={() => this.updateColorSelected("nightmoon")} id="nightmoon" className="color" src={require('./img/nightmoon.png')}/>
					<img onClick={() => this.updateColorSelected("fireorange")} id="fireorange" className="color" src={require('./img/fireorange.png')}/>
				</div>
				<div className="sizes">
					<img onClick={() => this.updateSizeSelected("tiny")} id="tiny" className="size selected" src={require('./img/TinyButton.png')}/>
					<br/>
					<img onClick={() => this.updateSizeSelected("small")} id="small" className="size" src={require('./img/SmallButton.png')}/>
					<br/>
					<img onClick={() => this.updateSizeSelected("medium")} id="medium" className="size" src={require('./img/MediumButton.png')}/>
					<br/>
					<img onClick={() => this.updateSizeSelected("large")} id="large" className="size" src={require('./img/LargeButton.png')}/>
				</div>
				<div className="actionButtons">
					<img className="AddToWishlistButton" src={require('./img/AddToWishlistButton.png')}/>
					<br/>
					<a href="#"> <img onClick={() => this.addToCart({"product":name, "color":this.state.color, "size": this.state.size})} className="AddToCartButton" src={require('./img/AddToCartButton.png')}/> </a>
				</div>
				<div className="productDescription">
					<p> Our {name} is an all-time favorite product for our customers. It comes in a variety of colors/sizes and has a 90-day return guarantee if there are any defects in the product! Please contact our support group if you have any questions. </p>
				</div> 
			</div>
		);
	}
}

export default ProductDetails;