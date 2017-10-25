import React, { Component } from 'react';
import './App.css';

class ShoppingCartItem extends Component {
	getImageSource(){
		return this.props.img;
	}

	getQuantity(){
		return this.props.quantity;
	}

	getProductName(){
		return this.props.id;
	}

	getIndex(){
		return this.props.index;
	}

	getSize(){
		return this.props.size;
	}

	getColor(){
		return this.props.color;
	}

	render() {
		var img = this.getImageSource();
		var quantity = this.getQuantity();
		var productName = this.getProductName();
		var size = this.getSize();
		var color = this.getColor();
		var index = this.getIndex();
		console.log("index: ", index);

		return (
			<div>
				<div className="shoppingCartItem">
					<img className="itemInShoppingCart" src={img}/>
					<div className="namePriceInCart">
						<p className="name"> {productName} </p>
						<p className="price"> $11.99 </p>
						<img className="rating" src={require('./img/RatingAndReviews.png')}/> 
						<a href="#"> <img onClick={() => this.props.removeShoppingCartItem(index)} className="removeFromCartButton" src={require('./img/RemoveFromCartButton.png')}/> </a>
						<p className="quantity"> Quantity: <span> {quantity} </span> </p>
						<p className="cartItemSize"> Size: {size} </p>
						<p className="cartItemColor"> Color: {color} </p>
					</div>
				</div>
			</div>
		);
	}
}

export default ShoppingCartItem;	