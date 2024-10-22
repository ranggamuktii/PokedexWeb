const fs = require('fs');

async function generateJsonDB() {
  try {
    const pokemonApiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
    const pokemonList = await fetch(pokemonApiURL).then((res) => res.json());
    console.log(pokemonList);
    const payload = [];
    for (let index = 0; index < 1; index++) {
      const pokemon = pokemonList.results[index];
      const detail = await fetch(pokemon.url).then((res) => res.json());
      const species = await fetch(detail.species.url).then((res) => res.json());
      const evo = await fetch(species.evolution_chain.url).then((res) => res.json());

      const evolutionChains = [evo.chain.species.name];
      let evolveTo = evo.chain.evolves_to[0];
      while (evolveTo) {
        evolutionChains.push(evolveTo.species.name);
        evolveTo = evolveTo.evolves_to[0];
      }

      const item = {
        id: detail.id,
        name: pokemon.name,
        types: detail.types.map((ab) => ab.type.name),
        abilities: detail.abilities.map((ab) => ab.ability.name),
        height: detail.height,
        weight: detail.weight,
        cries: detail.cries,
        evolutionChains,
      };

      payload.push(item);
      console.log(detail);
    }
    console.log(payload);
  } catch (error) {
    console.log(error);
  }
}

generateJsonDB();
