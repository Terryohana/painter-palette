import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
		let { backgroundColor, colorName } = this.props;
		let { showCopyOverlay } = this.state;
		return (
			<CopyToClipboard text={backgroundColor} onCopy={this.showOverlay}>
				<div style={{ background: backgroundColor }} className="ColorBox">
					<div
						style={{ background: backgroundColor }}
						className={`ColorBox-copy-overlay ${showCopyOverlay && "show"}`}
					/>
					<div className={`ColorBox-copy-overlay-content ${showCopyOverlay && "show"}`}
					>
						<h1>Copied!</h1>
						<p>{backgroundColor}</p>
					</div>

					<div className="ColorBox-copy-container">
						<button className="ColorBox-copy-button">Copy</button>
					</div>
					<div className="ColorBox-description">
						<span>{colorName}</span>
					</div>
					<span className="ColorBox-more-btn">More</span>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
