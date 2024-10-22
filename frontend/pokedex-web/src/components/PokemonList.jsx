import PokemonCard from './PokemonCard';

function PokemonList({ pokemonData }) {
  if (pokemonData.length === 0) {
    return <p className="text-center">Loading Pokemon data...</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} name={pokemon.name} types={pokemon.types} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
      ))}
    </div>
  );
}

export default PokemonList;
