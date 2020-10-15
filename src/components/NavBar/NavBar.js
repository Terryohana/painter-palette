import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";
import logo from "../../images/logo.png";
class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let { colorLevel, changeColorLevel } = this.props;
		return (
			<div className="NavBar">
				<div className="NavBar-logo">
					<img src={logo} alt="painter palette logo" />
					<a href="#">painter palette</a>
				</div>
				<div className="NavBar-slider-container">
					<span className="NavBar-slider-textVal">Level: {colorLevel}</span>
					<div className="NavBar-palette-slider">
						<Slider
							defaultValue={colorLevel}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeColorLevel}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;
