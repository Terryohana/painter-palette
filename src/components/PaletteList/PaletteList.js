import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import {Link} from 'react-router-dom'
import MiniPalette from "../MiniPalette/MiniPalette";
import styles from '../../styles/PaletteList'

class PaletteList extends Component {
	constructor(props) {
		super(props);
        this.state = {};
    }
    goToPalette(id){
        console.log("hey")
        this.props.history.push(`/painter-palette/palette/${id}`)
    }
	render() {
        let { list, classes } = this.props;
		const paletteList = list.map((palette) => (
			
				<MiniPalette {...palette} goToPalette={()=>this.goToPalette(palette.id)}/>
	
		));
		return (
			<div className={classes.root}>
				
                <div className={classes.container}>
					<nav className={classes.nav}>
						<h1>Painter Palette</h1>
					</nav>
                    <div className={classes.palettes}>{paletteList}</div>
				</div>
				
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
