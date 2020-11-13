import React from "react";
import styles from "../../styles/MiniPaletteStyles";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

function MiniPalette(props) {
	let { paletteName, colors, emoji, classes, deletePalette } = props;

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
		<div className={classes.root} >
			<div className={classes.colors} onClick={props.goToPalette}>{miniboxes}</div>
			<h5 className={classes.title} >
				<span onClick={props.goToPalette}>{paletteName}</span>
				
				<DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />

				{/* <span className={classes.emoji}>{emoji}</span> */}
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
