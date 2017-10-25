import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
	render() {
		return (
			<div className="footerBackground">
				<div className="socialMediaLinks">
					<a href="#"> <img className="socialMediaIcons" src={require('./img/facebook.svg')}/> </a>
					<a href="#"> <img className="socialMediaIcons" src={require('./img/instagram.svg')}/> </a>
					<a href="#"> <img className="socialMediaIcons" src={require('./img/pinterest.svg')}/> </a>
				</div>
				<div className="footerText"> Copyright - Brandon W. Lee . SSUI Assignment 4: Building a React Web App </div>
			</div>
		);
	}
}

export default Footer;