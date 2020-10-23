import { render } from "@testing-library/react";
import React from "react";
import styles from "../../styles/MiniPalette";
import { withStyles } from "@material-ui/styles";

function MiniPalette(props) {
	let { paletteName, colors, emoji, classes } = props;

	//Create the mini color boxes using the JSS styling from MiniPalette
	const miniboxes = colors.map((box) => (
		<div
            key={box.id}
			className={classes.miniColor}
			style={{ backgroundColor: box.color }}
		></div>
	));
	return (
		//MiniPalette Container
		<div className={classes.root}>
			<div className={classes.colors}>{miniboxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
