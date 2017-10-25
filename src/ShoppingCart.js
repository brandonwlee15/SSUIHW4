import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import './App.css';

class ShoppingCart extends Component {
	getQuantities(){
		var catHarnessQuantity = 0;
		var dogHarnessQuantity = 0;
		var storageHarnessQuantity = 0;
		var gpsCollarQuantity = 0;
		var parsedCart = JSON.parse(localStorage.getItem('cart'));
		for(var i=0; i<parsedCart.length; i++){
			var productName = parsedCart[i].product;
			if(productName === "Cat Harness"){
				catHarnessQuantity += 1;
			}
			if(productName === "Dog Harness"){
				dogHarnessQuantity += 1;
			}
			if(productName === "Storage Harness"){
				storageHarnessQuantity += 1;
			}
			if(productName === "GPS Collar"){
				gpsCollarQuantity += 1;
			}
		}
		var totalQuantity = (catHarnessQuantity + dogHarnessQuantity + storageHarnessQuantity + gpsCollarQuantity);
		return {"catHarnessQuantity": catHarnessQuantity, "dogHarnessQuantity": dogHarnessQuantity, 
						"storageHarnessQuantity": storageHarnessQuantity, "gpsCollarQuantity": gpsCollarQuantity, 
						"totalQuantity": totalQuantity};
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

	removeShoppingCartItem(i){
		this.props.removeCartQuantity();

		var parsedCart = JSON.parse(localStorage.getItem('cart'));
		console.log("initial parsedCart: ", parsedCart);
		parsedCart.splice(i,1);
		console.log("removing: " + i + " from cart");
		console.log("removed parsedCart: ", parsedCart);
		localStorage.setItem('cart', JSON.stringify(parsedCart));

		// make call to updateShoppingCartItems() to refresh
		alert("An item has been removed from your cart");
		this.updateShoppingCartItems();
	}

	updateShoppingCartItems(){
		console.log("recall to updateShoppingCartItems?");
		var items = [];
		var parsedCart = JSON.parse(localStorage.getItem('cart'));

		for (var i=0; i<parsedCart.length; i++){
			var product = parsedCart[i];
			var imgSource = this.getImageSource(product);
			items.push(<ShoppingCartItem removeShoppingCartItem={this.removeShoppingCartItem.bind(this)} quantity={1} img={imgSource} index={i} id={product["product"]} size={product["size"]} color={product["color"]}/>)
		}
		return items;
	}

	render() {
		var productOne = "https://s3.us-east-2.amazonaws.com/ssui4images/catHarness.jpg";
		var productTwo = "https://s3.us-east-2.amazonaws.com/ssui4images/dogHarness.jpg";
		var productThree = "https://s3.us-east-2.amazonaws.com/ssui4images/storageHarness.jpg";
		var productFour = "https://s3.us-east-2.amazonaws.com/ssui4images/gpsCollar.jpg";

		var quantities = this.getQuantities();
		console.log("quantities: ", quantities);

		return (
			<div>
				<div className="shoppingCartCheckout">
					<p className="checkoutHeader"> Shopping Cart: </p>
					<p className="checkoutSubtotal"> Subtotal: $ <span> {quantities["totalQuantity"]*11.99} </span> </p>
					<img className="checkoutButton" src={require('./img/CheckoutButton.png')}/>
				</div>
				<div id="shoppingCart" className="shoppingCart">
					{this.updateShoppingCartItems()}
				</div>
			</div>
		);
	}
}

export default ShoppingCart;