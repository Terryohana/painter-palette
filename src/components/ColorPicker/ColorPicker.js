import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import styles from "../../styles/ColorPickerStyles";

class ColorPicker extends Component {
	constructor(props) {
		super(props);
		this.state = { currentColor: "#3f51b5", newColorName: "" };
	}
	handleColorChange = (color) => {
		this.setState({ currentColor: color.hex });
	};
	render() {
		let { classes } = this.props;
		let { currentColor } = this.state;
		return (
			<div className={classes.root}>
				<ChromePicker
					color={this.state.currentColor}
					onChangeComplete={this.handleColorChange}
				/>
				<Button
					className={classes.addBtn}
					variant="contained"
					type="submit"
					color="primary"
					style={{ backgroundColor: currentColor }}
				>
					Add Color
				</Button>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPicker);
