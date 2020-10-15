import React, { Component } from "react";
import { Select, MenuItem } from "@material-ui/core";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";
import logo from "../../images/logo.png";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
            colorFormat: 'hex'
        };
        this.handleColorFormatChange = this.handleColorFormatChange.bind(this)
    }
    handleColorFormatChange(evt){
        this.setState({ colorFormat : evt.target.value  });
        this.props.changeColorFormat(evt.target.value)
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
				<div className="NavBar-select-container">
					<Select
						value={this.state.colorFormat}
						onChange={this.handleColorFormatChange}
					>
						<MenuItem value="hex">HEX - #ffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255, 255, 255, 0.2)</MenuItem>
					</Select>
				</div>
			</div>
		);
	}
}

export default NavBar;
