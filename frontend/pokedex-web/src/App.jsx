import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [setPokemonData] = useState([]);

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
        <h1 className="text-4xl text-center font-bold p-8">Pokedex</h1>
      </header>
    </div>
  );
}

export default App;
