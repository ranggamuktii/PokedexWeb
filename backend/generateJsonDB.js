const fs = require('fs');

async function generateJsonDB() {
  try {
    const pokemonApiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
    const pokemonList = await fetch(pokemonApiURL).then((res) => res.json());
    console.log(pokemonList);
  } catch (error) {
    console.log(error);
  }
}

generateJsonDB();
