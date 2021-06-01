// IIFE Array of Pokemon (objects)
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

  // Add Pokemon to the Pokemon List
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Get all Pokemon from the Pokemon List
  function getAll() {
    return pokemonList;
  }

  // Print pokemon details to the console
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // Add buttons to the list items & add list items to unordered pokemon list
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    // Event Listener for click
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    showDetails: showDetails,
    addListItem: addListItem,
  };
})();

console.log(pokemonRepository.getAll());

// Loop to iterate over array of Pokemon (objects) and add Pokemon to Pokemon List item
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
