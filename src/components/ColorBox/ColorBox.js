import React, { Component } from 'react';
import './ColorBox.css'
class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let {color} = this.props
        return ( 
            <div style={{background: color.color}}className="ColorBox">
                <span>{color.name}</span>
                <span>More</span>
            </div>
         );
    }
}
 
export default ColorBox;