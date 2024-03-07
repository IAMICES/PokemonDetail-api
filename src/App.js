import React, { useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

const App = () => {
  const [showPokemonList, setShowPokemonList] = useState(false);

  const handleButtonClick = () => {
    setShowPokemonList(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon API</h1>
        <button className="button" onClick={handleButtonClick}>Get Pokemon Dex</button>
        {showPokemonList && <PokemonList />}
      </header>
    </div>
  );
};

export default App;
