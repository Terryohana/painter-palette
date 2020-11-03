import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import getTextColor from '../../helpers/getTextColor'

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showCopyOverlay: false,
		};
		this.showOverlay = this.showOverlay.bind(this);
	}
	// Show overlay when a color box has been clicked on
	//   - Set the state to show the overlay
	showOverlay() {
		this.setState({ showCopyOverlay: true });
		setTimeout(() => {
			this.setState({ showCopyOverlay: false });
		}, 1000);
	}
	render() {
		let { backgroundColor, colorName, colorID, palette, showLink } = this.props;
		let { showCopyOverlay } = this.state;

		return (
			<CopyToClipboard text={backgroundColor} onCopy={this.showOverlay}>
				<div style={{ background: backgroundColor }} className="ColorBox">
					<div
						style={{ background: backgroundColor }}
						className={`ColorBox-copy-overlay ${showCopyOverlay && "show"}`}
					/>
					<div
						className={`ColorBox-copy-overlay-content ${
							showCopyOverlay && "show"
						}`}
					>
						<h1 style={{color : getTextColor(backgroundColor)}} >Copied!</h1>
						<p style={{color : getTextColor(backgroundColor)}}>{backgroundColor}</p>
					</div>

					<div className="ColorBox-copy-container">
						<button style={{color : getTextColor(backgroundColor)}} className="ColorBox-copy-button">Copy</button>
					</div>
					<div className="ColorBox-description">
						<span style={{color : getTextColor(backgroundColor)}}>
							{colorName} 
						</span>
					</div>
					{showLink && (
						<Link
							to={`/painter-palette/palette/${palette.id}/${colorID}`}
							onClick={(e) => e.stopPropagation()}
						>
							<span style={{color:getTextColor(backgroundColor)}} className="ColorBox-more-btn">More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
