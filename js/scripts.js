let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      type: ["grass", "poison"],
    },
    {
      name: "Squirtle",
      height: 0.5,
      type: ["water"],
    },
    {
      name: "Charmander",
      height: 0.6,
      type: ["fire"],
    },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  console.log(
    pokemon.name +
      " is " +
      pokemon.height +
      "m tall, and " +
      pokemon.type +
      " type Pokemon!"
  );
});

// pokemonList.forEach(function (pokemon) {
// console.log(
// pokemon.name +
// " is " +
// pokemon.height +
// "m tall, and " +
// pokemon.type +
// " type Pokemon!");
