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
pokemonList.forEach(function (pokemon) {
  console.log(
    pokemon.name +
      " is " +
      pokemon.height +
      "m tall, and " +
      pokemon.type +
      " type Pokemon!"
  );
});

// let pokemonBig = 0.61;
// for (let i = 0; i < pokemonList.length; i++) {
// document.write(
// ` ${pokemonList[i].name} (Height: ${pokemonList[i].height} m) ${
// pokemonList[i].height > pokemonBig ? "- Wow that is big!" : ""
// }`
// );
// }

// **** NOTES SECTION BELOW -- WILL DELETE LATER AFTER MORE COMFORTABLE WITH JAVASCRIPT CODE****
/// Template Literal: `${}` <-- BACKTICKS used, not apostrophe
// Ternary: question ? yes : no  (x < 100 ? true : false) Replaced " if else statements"

// " " + pokemonList[i].name + " (Height: " + pokemonList[i].height + " m)"

// Examples:
// let anne = {
// name: 'Anne Smith',
// age: 38,
// hasChildren: false
// };
// function getPersonDescription(person) {
// let ageDescription = person.age + ' years old';
// let childrenDescription = person.hasChildren ? 'has children' : 'has no children';

// return person.name + ', ' + ageDescription + ', ' + childrenDescription;
// }

// console.log(getPersonDescription(anne));

// This would read - Anne smith, 38 years old, has no children

//This can and should be written as:
// let anne = {
// name: 'Anne Smith',
// age: 38,
// hasChildren: false
//   };
//   function getAgeDescription(age) {
// return age + ' years old';
//   }
//   function getChildrenDescription(hasChildren) {
// return hasChildren ? 'has children' : 'has no children';
//   }
//   function getPersonDescription(person) {
// let ageDescription = getAgeDescription(person.age);
// let childrenDescription = getChildrenDescription(person.hasChildren);

// return person.name + ', ' + ageDescription + ', ' + childrenDescription;

// This would also read - Anne Smith, 38 years old, has no children - Remember - functions should be as small as possible, it's better to have many small functions than big ones.
