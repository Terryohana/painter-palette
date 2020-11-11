import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import styles from "../../styles/ColorPickerStyles";

class ColorPicker extends Component {
	constructor(props) {
		super(props);
		this.state = { currentColor: "#3f51b5", newColorName: "" };
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		//Need to validate if the color is unique and if the color name entered
		//is unique
		console.log(this.props.colors)
		ValidatorForm.addValidationRule("isColorNameUnique", (value) => 
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule("isColorUnique", (value) => 
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		)
	}

	handleColorChange = (color) => {
		this.setState({ currentColor: color.hex });
	};
	handleFormChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleSubmit() {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName,
		};
		this.props.addColor(newColor);
		this.setState({ newColorName: "" });
	}
	render() {
		let { classes } = this.props;
		let { currentColor, newColorName } = this.state;
		return (
			<div className={classes.root}>
				<ChromePicker
					color={this.state.currentColor}
					onChangeComplete={this.handleColorChange}
				/>
				<ValidatorForm
					ref="form"
					onSubmit={this.handleSubmit}
					instantValidate={false}
				>
					<TextValidator
						className={classes.colorNameForm}
						label="Color Name"
						onChange={this.handleFormChange}
						variant='filled'
						margin='normal'			
						name="newColorName"
						value={newColorName}
						validators={["required", "isColorNameUnique", "isColorUnique"]}
						errorMessages={[
							"this field is required",
							"color name taken",
							"color already used",
						]}
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
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPicker);
