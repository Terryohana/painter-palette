import React from 'react';
import './App.css';
import Palette from './components/Palette/Palette';
import seedColorPalettes from './seedColorPalettes'

function App() {
  return (
    <div className="App">
        <Palette {...seedColorPalettes[0]}/>
    </div>
  );
}

export default App;
