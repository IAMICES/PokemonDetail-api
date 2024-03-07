import React, { useState, useEffect } from 'react';
import PokemonDetail from './PokemonDetail';
import axios from 'axios';
import './PokemonList.css'; // Import CSS file

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching Pokemon list:', error);
      });
  }, []);

  return (
    <div>
      <h2 className="pokemon-list-heading">Pokemon List</h2> 
      <div className="pokemon-list-container"> 
        {pokemonList.map((pokemon, index) => (
          <PokemonDetail key={index} pokemonUrl={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
