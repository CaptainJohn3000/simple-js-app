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

let pokemonBig = 0.61;

for (let i = 0; i < pokemonList.length; i++) {
  // if pokemon[i] > 0.6...
  // Append 'Wow, that's big!"

  document.write(
    ` ${pokemonList[i].name} (Height: ${pokemonList[i].height} m) ${
      pokemonList[i].height > pokemonBig ? "- Wow that is big!" : ""
    }`
  );
}

/// Template Literal: `${}` <-- BACKTICKS used, not apostrophe
// Ternary: question ? yes : no  (x < 100 ? true : false) Replaced " if else statments"

// " " + pokemonList[i].name + " (Height: " + pokemonList[i].height + " m)"

// let x = 100
