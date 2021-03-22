let pokemonRepository = (function () {
  let repository = [ { name: 'Gyrados', height: '6.5', types: ['flying', 'water']}, 
  { name: 'Mewtwo', height: '2', types: ['psychic']}, 
  { name: 'Scyther', height: '1.5', types: ['bug', 'flying']}, 
  
];

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "height" in pokemon &&
    "types" in pokemon
  ) {
    repository.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
}
function getAll() {
  return repository;
}

function showDetails(pokemon) {    
  console.log (pokemon.name)();
   

}


function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function () {
      showDetails(pokemon);

    });


}




return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,  
  showDetails: showDetails
};


})();
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());




  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    });




