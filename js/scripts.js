let pokemonRepository = (function () {
  
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

let pokemonList = [{ name: 'Gyrados', height: '6.5', types: ['flying', 'water']}, 
{ name: 'Mewtwo', height: '2', types: ['psychic']}, 
{ name: 'Scyther', height: '1.5', types: ['bug', 'flying']}, ];

pokemonList.forEach(function(pokemon) {
  let pokemonName = pokemon.name
  let pokemonHeight = pokemon.height
  if (pokemonHeight >5) {
    document.write (pokemonName + '  :  '+ pokemonHeight + '  Wow, thats big!  ');
  } else{
    document.write(pokemonName + '  :  '+ pokemonHeight);
  }
  document.write('<br>'), ('<br>');
  });

  console.log (pokemonList);