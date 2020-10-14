import React, { Component } from "react";
import "./ColorBox.css";
class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let { color } = this.props;
		return (
			<div style={{ background: color.color }} className="ColorBox">
				<div className="ColorBox-copy-container">
					<div className="ColorBox-description">
						<span>{color.name}</span>
					</div>
                    <button className="ColorBox-copy-button">Copy</button>
				</div>
                <span className="ColorBox-more-btn">
                    More
                </span>
			</div>
		);
	}
}

export default ColorBox;
