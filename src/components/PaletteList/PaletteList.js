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

	render() {
        let { list, classes } = this.props;
        
        // <Link  to={`/palette/${palete.id}`}>
		// 		<div className="PaletteList-card" onClick={this.changePalette}>
		// 			{palete.colors.map((p) => (
		// 				<div
		// 					className="PaletteList-colorbox"
		// 					style={{ background: p.color }}
		// 				></div>
		// 			))}
		// 			<p className="PaletteList-title">{palete.id}</p>
		// 		</div>
		// 	</Link>
		const paletteList = list.map((palette) => (
			<Link style={{ textDecoration: 'none' }} to={`painter-palette/palette/${palette.id}`}>
				<MiniPalette {...palette} />
			</Link>
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
