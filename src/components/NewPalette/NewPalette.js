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
		};
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
	}

	handleDrawerOpen() {
		this.setState({ drawerOpen: true });
	}
	handleDrawerClose() {
		this.setState({ drawerOpen: false });
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};
	render() {
		const { classes } = this.props;
		const { drawerOpen, colors } = this.state;

		return (
			<div className={classes.root}>
				<NewPaletteNav
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
						<Typography variant="h5" gutterBottom>
							Design Your Palette
						</Typography>

						<ColorPicker />
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
						// removeColor={this.removeColor}
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
