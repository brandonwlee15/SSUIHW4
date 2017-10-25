import React, { Component } from 'react';
import './App.css';
import Product from './Product';

class Products extends Component {

	render() {
		var productOne = "https://s3.us-east-2.amazonaws.com/ssui4images/catHarness.jpg";
		var productTwo = "https://s3.us-east-2.amazonaws.com/ssui4images/dogHarness.jpg";
		var productThree = "https://s3.us-east-2.amazonaws.com/ssui4images/storageHarness.jpg";
		var productFour = "https://s3.us-east-2.amazonaws.com/ssui4images/gpsCollar.jpg";

		return (
			<div>
				<Product buttonPressed={this.props.buttonPressed} img={productOne} id={"Cat Harness"}/> 
				<Product buttonPressed={this.props.buttonPressed} img={productTwo} id={"Dog Harness"}/>
				<Product buttonPressed={this.props.buttonPressed} img={productThree} id={"Storage Harness"}/>
				<Product buttonPressed={this.props.buttonPressed} img={productFour} id={"GPS Collar"}/>
			</div>
		);
	}
}

export default Products;