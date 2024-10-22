import { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch('http://localhost:3000/pokemon');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Failed to fetch Pokemon data:', error);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div>
      <header>
        <h1 className="text-6xl text-center font-bold p-8">Pokedex</h1>
      </header>
      <div className="max-w-7xl mx-auto mb-8 px-4">
        <PokemonList pokemonData={pokemonData} />
      </div>
    </div>
  );
}

export default App;
