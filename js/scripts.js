// array //
let pokemonList = [
  { name: 'Gyrados', height: '6.5', types: ['flying', 'water']}, 
  { name: 'Mewtwo', height: '2', types: ['psychic']}, 
  { name: 'Scyther', height: '1.5', types: ['bug', 'flying']}, 
];

// IIFE //
let pokemonRepository = (function () {
 return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

// IIFE with foreach loop // 
(function () {
  pokemonList.forEach(function(pokemon) {
      let pokemonName = pokemon.name
      let pokemonHeight = pokemon.height
      //conditional//
      if(pokemonHeight > 5) {
          document.write(pokemonName + ' : '+ pokemonHeight + ' - Wow, thats big!'); 
      } else {
          document.write(pokemonName + ' : '+ pokemonHeight); 
      }
          document.write('<br>');
      });
})();
