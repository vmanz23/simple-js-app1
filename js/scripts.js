const pokemonRepository = (function(){
  const pokemonList = [];
  const apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  const searchInput = document.querySelector('#search-bar');

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    if (
      typeof item === 'object' &&
      'name' in item &&
      'detailsUrl' in item
    ) {
        pokemonList.push(item);
      }
  }

  function addListItem(pokemon) {
    let container = document.querySelector('.list-group');
    
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.classList.add('list-group-item-action');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn');
    button.classList.add('btn-block');
    button.setAttribute('data-target', '#pokemonModal');
    button.setAttribute('data-toggle', 'modal');
    listItem.appendChild(button);
    container.appendChild(listItem);
    button.addEventListener('click', function(){
      showDetails(pokemon);
    });
  }

//function fetches list of pokemon from pokeapi
function loadList() {
  return fetch(apiURL).then(function(response){
    return response.json();
  }).then (function(json){
    json.results.forEach(function(item){
      let pokemon = {
        name: item.name,
        detailsUrl: item.url,
       
      };
      add(pokemon);
    });
  }).catch(function(e){
    console.error(e);
  });
}

//function fetches details of pokemons from pokeapi
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response){
    return response.json();
  }).then(function (details){
    item.imageUrlFront = details.sprites.other.dream_world.front_default;
    item.height = details.height;
    item.weight = details.weight;
    item.types = [];
        details.types.forEach(function(itemType) {
          item.types.push(itemType.type.name);
        });
        item.abilities = [];
        details.abilities.forEach(function(itemAbilities) {
          item.abilities.push(itemAbilities.ability.name);
        });
      
  }).catch(function(e){
    console.error(e);
  });
}

//function log pokemon details to the console
function showDetails(pokemon) {

loadDetails(pokemon).then(function () {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  //let modalHeader = $('.modal-header');

  modalTitle.empty();
  modalBody.empty();

  let pkName = $('<h1>' + pokemon.name + '</h1>');
  let pkImage = $('<img class="modal-img" style="width:60%">');
  pkImage.attr('src', pokemon.imageUrlFront);
  let pkHeight = $('<p>' + 'Height   : ' + pokemon.height + '</p>');
  let pkWeight = $('<p>' + 'Weight   : ' + pokemon.weight + '</p>');
  let pkTypes = $('<p>' + 'Types      : ' + pokemon.types + '</p>');
  let pkAbilities =$('<p>' + 'Abilities    : ' + pokemon.abilities + '</p>');


  modalTitle.append(pkName);
  modalBody.append(pkImage);
  modalBody.append(pkHeight);
  modalBody.append(pkWeight);
  modalBody.append(pkTypes);
  modalBody.append(pkAbilities);
});
}

  
searchInput.addEventListener('input', function(){
        let pokemonList = document.querySelectorAll('.list-group-item');
        let filterValue = searchInput.value.toUpperCase();

        pokemonList.forEach(function(pokemon){
            console.log(pokemon.innerText);
            if(pokemon.innerText.toUpperCase().indexOf(filterValue) > -1){
                pokemon.style.display = '';
            }else{
                pokemon.style.display = 'none';
            }
        })
    }); 

  return { getAll,addListItem,loadList };
})();

pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
  });
});