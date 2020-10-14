import React from 'react';
import './App.css';
import Palette from './components/Palette/Palette';
import seedColorPalettes from './seedColorPalettes'
import {generatePalette} from './helpers/generatePalette'

function App() {
  console.log(generatePalette(seedColorPalettes[0]))

  return (
    <div className="App">
        <Palette {...seedColorPalettes[0]}/>
    </div>
  );
}

export default App;
