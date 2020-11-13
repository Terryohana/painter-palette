import React, { PureComponent } from "react";
import styles from "../../styles/MiniPaletteStyles";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let {
			paletteName,
			colors,
			emoji,
			classes,
			deletePalette,
			goToPalette,
		} = this.props;

		//Create the mini color boxes using the JSS styling from MiniPalette
		const miniboxes = colors.map((box) => (
			<div
				key={box.name}
				className={classes.miniColor}
				style={{ backgroundColor: box.color }}
			/>
		));
		return (
			//MiniPalette Container
			<div className={classes.root}>
				<div className={classes.colors} onClick={goToPalette}>
					{miniboxes}
				</div>
				<h5 className={classes.title}>
					<span onClick={goToPalette}>{paletteName}</span>

					<DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />

					{/* <span className={classes.emoji}>{emoji}</span> */}
				</h5>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
