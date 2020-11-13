import React from "react";
import "./App.css";
import Palette from "./components/Palette/Palette";
import seedColorPalettes from "./seedColorPalettes";
import { generatePalette } from "./helpers/generatePalette";
import { Switch, Route } from "react-router-dom";
import { Component } from "react";
import PaletteList from "./components/PaletteList/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette/SingleColorPalette";
import NewPalette from "./components/NewPalette/NewPalette";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			palettes: JSON.parse(
				window.localStorage.getItem("palettes") || seedColorPalettes
			),
		};
		this.savePalette = this.savePalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}

	//Search Available color palettes and return the palette object
	findPalette(id) {
		return this.state.palettes.find(function (palette) {
			return palette.id === id;
		});
	}
	//Save the newly created palette
	savePalette(newPalette) {
		this.setState({ palettes: [...this.state.palettes, newPalette] }, () =>
			window.localStorage.setItem(
				"palettes",
				JSON.stringify(this.state.palettes)
			)
		);
	}
	//Delete the palette from palette list
	deletePalette(id) {
		this.setState({palettes: this.state.palettes.filter((palette) => palette.id !== id)}, () =>
			window.localStorage.setItem(
				"palettes",
				JSON.stringify(this.state.palettes)
			)
		);
	}
	render() {
		const { palettes } = this.state;
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/painter-palette"
						render={(routeProps) => (
							<PaletteList
								list={palettes}
								{...routeProps}
								deletePalette={this.deletePalette}
							/>
						)}
					/>
					<Route
						exact
						path="/painter-palette/palette/new"
						render={(routeProps) => (
							<NewPalette
								palettes={palettes}
								savePalette={this.savePalette}
								{...routeProps}
							/>
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
					<Route
						exact
						path="/painter-palette/palette/:paletteID/:colorID"
						render={(routeProps) => (
							<SingleColorPalette
								colorID={routeProps.match.params.colorID}
								palette={generatePalette(
									this.findPalette(routeProps.match.params.paletteID)
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
