import React from "react";
import "./App.css";
import Palette from "./components/Palette/Palette";
import seedColorPalettes from "./seedColorPalettes";
import { generatePalette } from "./helpers/generatePalette";
import { Switch, Route } from "react-router-dom";
import { Component } from "react";
import PaletteList from "./components/PaletteList/PaletteList";
class App extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	//Search Available color palettes and return the palette object
	findPalette(id) {
		return seedColorPalettes.find(function (palette) {
			return palette.id === id;
		});
	}

	render() {
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/painter-palette"
						render={(routeProps) => (
							<PaletteList list={seedColorPalettes} {...routeProps} />
						)}
					/>
					<Route
						exact
						path="/painter-palette/palette/:id"
						render={(routeProps) => (
							<Palette
								palette={generatePalette(
									this.findPalette(routeProps.match.params.id)
								)}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
