import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox'
import './Palette.css'

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //Map over colors and create a box corresponding to that color
        const colorBoxes = this.props.palette.colors[300].map(color => (
            <ColorBox backgroundColor={color.hex} colorName={color.name}/>
        ))
        return ( 
            <div className="Palette">
                {/* Navbar will go here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* Footer will go here */}
            </div>
         );
    }
}
 
export default Palette;