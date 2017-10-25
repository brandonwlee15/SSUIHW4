import React, { Component } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Products from './Products';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    localStorage.setItem('cart', JSON.stringify([]));
    this.state = {
      page: "HomePage",
      cartQuantity: 0
    };
  }

  buttonPressed(e){
    var newState = e.target.id;
    console.log("button pressed: ", newState);

    // Update this.state
    this.setState({page: newState});
    console.log("updated?");
    console.log(this.state);
  }

  addCartQuantity(){
    console.log("triggered addCartQuantity");
    var prevCartQuantity = this.state.cartQuantity;
    this.setState({cartQuantity: prevCartQuantity+1})
    // this.state.cartQuantity += 1;
    // console.log(this.state.cartQuantity);
  }

  removeCartQuantity(){
    console.log("triggered removeCartQuantity");
    var prevCartQuantity = this.state.cartQuantity;
    this.setState({cartQuantity: prevCartQuantity-1})
    // this.state.cartQuantity -= 1;
  }

  renderPageView(){
    // Home Page
    if (this.state.page == "HomePage" || this.state.page == "MPAGLogo"){
      return <HomePage buttonPressed={this.buttonPressed.bind(this)}/>
    }

    // Products List
    if (this.state.page == "Products"){
      return <Products buttonPressed={this.buttonPressed.bind(this)}/>
    }

    // Shopping Cart Page
    if (this.state.page == "Cart"){
      return <ShoppingCart removeCartQuantity={this.removeCartQuantity.bind(this)}/>
    }

    // Product Detail Pages
    if (this.state.page == "Cat Harness"){
      var productOne = "https://s3.us-east-2.amazonaws.com/ssui4images/catHarness.jpg";
      return <ProductDetails addCartQuantity={this.addCartQuantity.bind(this)} name="Cat Harness" img={productOne}/>
    }
    if (this.state.page == "Dog Harness"){
      var productTwo = "https://s3.us-east-2.amazonaws.com/ssui4images/dogHarness.jpg";
      return <ProductDetails addCartQuantity={this.addCartQuantity.bind(this)} name="Dog Harness" img={productTwo}/>
    }
    if (this.state.page == "Storage Harness"){
      var productThree = "https://s3.us-east-2.amazonaws.com/ssui4images/storageHarness.jpg";
      return <ProductDetails addCartQuantity={this.addCartQuantity.bind(this)} name="Storage Harness" img={productThree}/>
    }
    if (this.state.page == "GPS Collar"){
      var productFour = "https://s3.us-east-2.amazonaws.com/ssui4images/gpsCollar.jpg";
      return <ProductDetails addCartQuantity={this.addCartQuantity.bind(this)} name="GPS Collar" img={productFour}/>
    }
  }

  render() {
    return (
      <div> 
        <Header cartQuantity={this.state.cartQuantity} buttonPressed={this.buttonPressed.bind(this)}/>
        {this.renderPageView()}
        <Footer/>
      </div>
    );
  }
}

export default App;