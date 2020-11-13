import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import NewPaletteNav from "../NewPaletteNav/NewPaletteNav";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ColorPicker from "../ColorPicker/ColorPicker";
import styles from "../../styles/NewPaletteStyles";
import seedColors from "../../seedColorPalettes";
import NewPaletteList from "../NewPaletteList/NewPaletteList";
import { arrayMove } from "react-sortable-hoc";

class NewPalette extends Component {
	static defaultProps = {
		maxColors: 20,
	};
	constructor(props) {
		super(props);
		this.state = {
			drawerOpen: true,
      colors: seedColors[0].colors,
      paletteName: ""
		};
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		this.addColorToPalette = this.addColorToPalette.bind(this);
    this.removeColorFromPalette = this.removeColorFromPalette.bind(this);
    this.saveNewPalette = this.saveNewPalette.bind(this)
	}

	handleDrawerOpen() {
		this.setState({ drawerOpen: true });
	}
	handleDrawerClose() {
		this.setState({ drawerOpen: false });
	}
  //Function to control the sorting of the colorboxs when they are dragged to a new
  //position
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};
  //Add a colorbox to the newly created palette
	addColorToPalette(newColor) {
		this.setState({
			colors: [...this.state.colors, newColor],
			newColorName: "",
		});
  }
  //Remove colorbox from newly created palette
	removeColorFromPalette(colorName) {
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== colorName),
		});
  }
  //Save a newly created palette
  saveNewPalette(paletteName){
    // let newName = this.state.paletteName
    let newName = paletteName
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    }
    this.props.savePalette(newPalette)
    this.props.history.push('/painter-palette')
  }

	render() {
		const { classes, palettes } = this.props;
		const { drawerOpen, colors  } = this.state;

    return (
			<div className={classes.root}>
				<NewPaletteNav
          palettes ={palettes}
          savePalette={this.saveNewPalette}
					drawerOpen={drawerOpen}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={drawerOpen}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>

					<Divider />

					<div className={classes.container}>
						<Typography variant="h6" gutterBottom>
							Design Your Color Box
						</Typography>

						<ColorPicker colors={colors} addColor={this.addColorToPalette} />
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: drawerOpen,
					})}
				>
					<div className={classes.drawerHeader} />

					<NewPaletteList
						colors={colors}
						removeColor={this.removeColorFromPalette}
						axis="xy"
						onSortEnd={this.onSortEnd}
						distance={20}
					/>
				</main>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(NewPalette);
