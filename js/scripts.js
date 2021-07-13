// IIFE Array of Pokemon (objects)

// Creating an array for pokemon objects that contains pokemon data
let pokemonRepository = (function () {
  let pokemonList = [];
  // API link below
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // Add Pokemon to the Pokemon List
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  // Allows access to print pokemonList
  function getAll() {
    return pokemonList;
  }

  // Add buttons to the list items & add list items to unordered pokemon list
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");

    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.classList.add("border-0");

    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button", "button-block");
    button.setAttribute("data-target", "#pokeModal");
    button.setAttribute("data-toggle", "modal");

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  // Load data from API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })

      .catch(function (e) {
        console.error(e);
      });
  }

  // Loads details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Add details to the item
        item.imageUrlFront = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;

        //poke types
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }

        //poke abilities
        item.abilities = [];
        for (var i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }
      })

      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  // SHOW THE MODAL
  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    //This clears exisiting model content
    modalTitle.empty();
    modalBody.empty();

    //Create an element for the name in the modal Content
    let nameElement = $("<h1>" + item.name + "</h1>");

    //Create img in model content
    let imageElementFront = $('<img class="modal-img" style="width:35%">');
    imageElementFront.attr("src", item.imageUrlFront);

    let imageElementBack = $('<img class="modal-img" style="width:35%">');
    imageElementBack.attr("src", item.imageUrlBack);

    //creating element for height
    let heightElement = $("<p>" + "Height: " + item.height + "m" + "</p>");

    //creating element for weight
    let weightElement = $("<p>" + "Weight: " + item.weight + "kg" + "</p>");

    //creating element for type
    let typeElement = $("<p>" + "Types: " + item.types + "</p>");

    //creating element for abilities
    let abilitiesElement = $("<p>" + "Abilities: " + item.abilities + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typeElement);
    modalBody.append(abilitiesElement);
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
