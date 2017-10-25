import React, { Component } from 'react';
import './App.css';

class HomePage extends Component {
  render() {
    return (
      <div> 
        <div className="contentBackground">
          <img className="puppyIMG" src={require('./img/puppy2.jpg')}/>
          <div> <h1 className="HomePageHeader"> We Sell the Best Pet Products In the Greater City of Pittsburgh </h1> </div>
          <a href="#"> <div onClick={this.props.buttonPressed} id="Products" className="browseProductsButton"> Browse Products </div> </a>
        </div>
      </div>
    );
  }
}

export default HomePage;