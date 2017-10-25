import React, { Component } from 'react';
import MPAGLogo from './img/MPAGLogo.svg'; //importing IMG from another directory vs. src=img 
import './App.css';

class Header extends Component {
	constructor() {
    super();
    // this.state = {
    //   hover: false
    // };
  }

	getCartQuantity(){
		// var parsedCart = JSON.parse(localStorage.getItem('cart'));
		// console.log("parsedCart: " + parsedCart.length);
		// return parsedCart.length
		var parsedCart = JSON.parse(localStorage.getItem('cart'));
		console.log("this.props.cartQuantity: ", this.props.cartQuantity);
		return this.props.cartQuantity;
	}

	getImageSource(product){
		var productOne = "https://s3.us-east-2.amazonaws.com/ssui4images/catHarness.jpg";
		var productTwo = "https://s3.us-east-2.amazonaws.com/ssui4images/dogHarness.jpg";
		var productThree = "https://s3.us-east-2.amazonaws.com/ssui4images/storageHarness.jpg";
		var productFour = "https://s3.us-east-2.amazonaws.com/ssui4images/gpsCollar.jpg";

		if (product["product"] == "Cat Harness"){
			return productOne;
		}
		if (product["product"] == "Dog Harness"){
			return productTwo;
		}
		if (product["product"] == "Storage Harness"){
			return productThree;
		}
		if (product["product"] == "GPS Collar"){
			return productFour;
		}
	}

	previewShoppingCartItems(){
		console.log("hovering");
		var items = [];
		var parsedCart = JSON.parse(localStorage.getItem('cart'));

		for (var i=0; i<parsedCart.length; i++){
			var product = parsedCart[i];
			console.log(product);
			var imgSource = this.getImageSource(product);
			items.push(<a href="#"> 
									<div className="previewDescription"> 
										<p> <strong> {product["product"]} </strong> </p>
										<p> Size: {product["size"]} </p> 
										<p> Color: {product["color"]} </p>
										<img className="previewImg" src={imgSource}/> 
									</div> 
								</a>)
		}
		return items;
	}

	render() {
		var cartQuantity = this.getCartQuantity();

		return (
			<div>
			  <header className="FixedHeader">
			    <a href="#"> <img onClick={this.props.buttonPressed} id="MPAGLogo" src={MPAGLogo} className="MPAGLogo" alt="logo" /> </a>
			    <h1 className="HeaderTitle">Muddy Paw Adventure Gear</h1>
			    <form>
				  	<input className="SearchBar" placeholder="Search for Products">
				  	</input>
			  	</form>
			  	<nav className="navbar">
				  	<a href="#"> <div onClick={this.props.buttonPressed} id="Products" className="navbarOption"> <img className="navbarIcon" src={require('./img/products.svg')}/> Products </div> </a>
				  	<a href="#"> <div id="AboutUs" className="navbarOption"> <img className="navbarIcon" src={require('./img/aboutUs.svg')}/> About Us </div> </a>
				  	<a href="#"> <div id="ContactUs" className="navbarOption"> <img className="navbarIcon" src={require('./img/mail.svg')}/> Contact Us </div> </a>
				  	<div className="dropdown"> 
					  	<a href="#"> 
					  		<div onClick={this.props.buttonPressed} id="Cart" className="navbarOption cartQuantity dropbown btn"> <img className="navbarIcon" src={require('./img/cart.svg')}/> Cart: <span> {cartQuantity} </span> </div> 
					  	</a> 
					  	<div className="dropdown-content">
					  		{this.previewShoppingCartItems()}
					  	</div>
				  	</div>
			  	</nav>
			  </header>
			</div>
		);
	}
}

export default Header;