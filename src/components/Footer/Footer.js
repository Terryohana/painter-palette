import React, { Component } from 'react';
import './Footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {paletteName, paletteEmoji} = this.props
        return ( 
            <div className="Footer">
                <span className="Footer-palette-name">
                    {paletteName}
                </span>
                <span className="Footer-palette-emoji">
                    {paletteEmoji}
                </span>
            </div>
         );
    }
}
 
export default Footer;