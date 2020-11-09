import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import NewPaletteNav from '../NewPaletteNav/NewPaletteNav'
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import styles from "../../styles/NewPaletteStyles";

class NewPalette extends Component {
    static defaultProps = {
      maxColors: 20
    };
    constructor(props) {
      super(props);
      this.state = {
        drawerOpen: true,
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
  
   
    render() {
      const { classes } = this.props;
      const { drawerOpen } = this.state;
  
      return (
        <div className={classes.root}>
          <NewPaletteNav drawerOpen={drawerOpen} handleDrawerOpen={this.handleDrawerOpen}/>
          <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={drawerOpen}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <div className={classes.container}>
              <Typography variant='h4' gutterBottom>
                Design Your Palette
              </Typography>

            
            </div>
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: drawerOpen
            })}
          >
            <div className={classes.drawerHeader} />
          
          </main>
        </div>
      );
    }
  }
  export default withStyles(styles, { withTheme: true })(NewPalette);
  