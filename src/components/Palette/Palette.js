import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.css";
import Navbar from '../NavBar/NavBar'
class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorLevel: 500,
		};
		this.changeColorLevel = this.changeColorLevel.bind(this);
	}
	changeColorLevel(newColorLevel) {
		this.setState({ colorLevel: newColorLevel });
	}
	render() {
		//Map over colors and create a box corresponding to that color
		const colorBoxes = this.props.palette.colors[
			this.state.colorLevel
		].map((color) => (
			<ColorBox backgroundColor={color.hex} colorName={color.name} />
		));
		return (
			<div className="Palette">
				
                <Navbar changeColorLevel ={this.changeColorLevel} colorLevel={this.state.colorLevel} />

				<div className="Palette-colors">{colorBoxes}</div>
				{/* Footer will go here */}
			</div>
		);
	}
}

export default Palette;
