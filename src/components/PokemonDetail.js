import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonDetail = ({ pokemonUrl }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(pokemonUrl)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.error(`Error fetching Pokemon data for ${pokemonUrl}:`, error);
      });
  }, [pokemonUrl]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const types = pokemonData.types.map(type => type.type.name).join(', ');

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '300px', backgroundColor: '#8ac262' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemonData.sprites.front_default && <img src={pokemonData.sprites.front_default} alt={`${pokemonData.name}-front`} style={{ width: '100px', marginRight: '10px' }} />}
        {pokemonData.sprites.back_default && <img src={pokemonData.sprites.back_default} alt={`${pokemonData.name}-back`} style={{ width: '100px' }} />}
      </div>
      <h3>Name: {pokemonData.name}</h3>
      <p>Type 1: {types.split(',')[0]}</p>
      <p>Type 2: {types.split(',')[1] || 'N/A'}</p>
      <h4>Base Stats:</h4>
      <ul>
        {pokemonData.stats.map(stat => (
          <li key={stat.stat.name}>
            {stat.stat.name} = {stat.base_stat}
          </li>
        ))}
      </ul>
      
    </div>
  );
};


export default PokemonDetail;
