let pokemonRepository = (function () {
  let pokemonList = [  {name: "Gryados", height: 6.5, type: "flying,water"},
  {name: "Mewtwo", height: 2, type: "psychic"},
  {name: "Scyther", height:1.5, type:"bug, flying"}]; 

  pokemonList.forEach(function(pokemon) {
    let pokemonName = pokemon.name
    let pokemonHeight = pokemon.height
    if (pokemonHeight >5) {
      document.write (pokemonName + " :  " + pokemonHeight + '   wow thats big!  ');
    } else{
      document.write(pokemonName + "  :  " + pokemonHeight);
    }
    document.write('<br>');
    });
  
    
  return {
  add: function(pokemon) {
  pokemonList.push(pokemon);
  },
  getAll: function() {
  return pokemonList;
  }
  };
  })();