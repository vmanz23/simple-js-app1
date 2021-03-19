let pokemonRepository = (function () {
  let pokemonList = [{ name: 'Gyrados', height: '6.5', types: ['flying', 'water']}, 
  { name: 'Mewtwo', height: '2', types: ['psychic']}, 
  { name: 'Scyther', height: '1.5', types: ['bug', 'flying']}, ];
  

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
  
})();

console.log (pokemonRepository.getAll () );
