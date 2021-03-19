let pokemonRepository = (function () {
  let pokemonList = [ { name: 'Gyrados', height: '6.5', types: ['flying', 'water']}, 
  { name: 'Mewtwo', height: '2', types: ['psychic']}, 
  { name: 'Scyther', height: '1.5', types: ['bug', 'flying']}, 
  
];

  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }    
  };
})();

pokemonRepository.getAll().forEach(function() {  

});




  
  