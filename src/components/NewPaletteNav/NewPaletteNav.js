import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/styles";

import classNames from "classnames";
import styles from "../../styles/NewPaletteNavStyles";
import { CssBaseline } from "@material-ui/core";

class NewPaletteNav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let { classes, drawerOpen, handleDrawerOpen } = this.props;
		return (
			<div className={classes.root}>
                {/* <CssBaseline /> */}
				<AppBar
					position="fixed"
					color="default"
					className={classNames(classes.navBar, {
						[classes.navBarShift]: drawerOpen,
					})}
				>
					<Toolbar disableGutters={!drawerOpen}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={handleDrawerOpen}
							className={classNames(classes.menuButton, {
								[classes.hide]: drawerOpen,
							})}
						>
							<AddToPhotosIcon />
						</IconButton>

						<Typography variant="h6" color="inherit" noWrap>
							Create A Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtns}>
                    <Link to='/painter-palette/'>
							<Button
								className={classes.button}
								variant="contained"
								color="secondary"
							>
								Go Back
							</Button>
                        </Link>
							<Button
								className={classes.button}
								variant="contained"
								color="primary"
							>
								Save Palette
							</Button>
					</div>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteNav);
