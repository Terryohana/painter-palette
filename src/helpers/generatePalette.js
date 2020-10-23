// Chroma.js is a small-ish zero-dependency JavaScript library for all kinds of color conversions and color scales.
//
// The premise of these helper functions is given a defined palette color theme, we can create and manipulate
// those colors to dynamically alter the color across all levels (ie font-weight: 500 || 600 ||..etc)
//
//	- Creates a new palette object that changes...
//		-  colors array -> colors object that changes...
//			- name -> name and font-weight (ie. red 500)
//			- adds -> new hex color code
//			- adds -> rgb color code 
//			- adds -> rgba color code 

import chroma from "chroma-js";
const colorLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(input) {

	let newPalette = {
		paletteName: input.paletteName,
		id: input.id,
		emoji: input.emoji,
		colors: {},
	};
	//Create an array for each of the color levels so we can push the generated color scales
	//into its corresponding color level
	for (let level of colorLevels) {
		newPalette.colors[level] = [];
	}
	// Loop over the colors within the palette
	for (let color of input.colors) {
		//Create a scale for each color inside the palette
		//  - We reverse it so its light -> dark
		let scale = generateScale(color.color, 10).reverse();

		// Loop over the scale and push that color into the corresponding colorLevel
		for (let i in scale) {
			newPalette.colors[colorLevels[i]].push({
				name: `${color.name} ${colorLevels[i]}`,
				id: color.name.toLowerCase().replace(/ /g, "-"),
				hex: scale[i],
				rgb: chroma(scale[i]).css(),
				rgba: chroma(scale[i])
					.css()
					.replace("rgb", "rgba")
					.replace(")", ",1.0)"), // Need to change rgb to rgba and add the alpha value
			});
		}
	}
	return newPalette;
}
// Takes a hex color and creates a color range using the chroma.js package
//  - We darken the original color for one side of scale and use white as
//    the other side of the scale
function getRange(hexInput) {
	const end = "#fff";
	return [chroma(hexInput).darken(1.4).hex(), hexInput, end];
}
// Creates a scale with the inputted hexColor and number of colors to generate
// the scale for the given range provided
//  -"lab" stands for 'lightness a b' and .colors takes the scale and spits out 10 colors
function generateScale(hexColor, numColors) {
	return chroma.scale(getRange(hexColor)).mode("lab").colors(numColors);
}

export { generatePalette };
