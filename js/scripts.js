//IIFE
let pokemonRepository = (function(){
  let modalContainer = document.querySelector('#modal-container');
  let pkList = document.querySelector('.pokemon-list');
 
  //array 
  let pokemonList = [];
 // API variable 
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
 
  // function showmodal
  function showModal(pokemon) {
    
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let pkName = document.createElement('h1');
    pkName.innerText = pokemon.name;
    modal.appendChild(pkName);

    
    let pkHeight = document.createElement('p');
    pkHeight.innerText = pokemon.height;
    modal.appendChild(pkHeight);

    
    let containerImg = document.querySelector('#image-container');
    let pkImg = document.createElement('img');
    pkImg.src = pokemon.imageUrl;
    modal.appendChild(pkImg);


    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible'); 
  }

//function addlist
  function addListItem(pokemon){
  let pkList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  
  button.innerText = pokemon.name;
  button.classList.add('button-class');
  
  listItem.appendChild(button);
  pkList.appendChild(listItem);
  
  button.addEventListener('click', function(event){
        showDetails(pokemon);      
    });
  }
 
  


  //function show details
  function showDetails(pokemon){
    loadDetails(pokemon).then(function(){
    showModal(pokemon);  
    });
  }


  function getAll(){
    return pokemonList;
  }


  function add(pokemon){
    if (typeof pokemon === 'object' &&
    'name' in pokemon
    ){
    pokemonList.push(pokemon);
    } 
  }
//function load from api
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }


function loadDetails(item){
  let url = item.detailsUrl;
  return fetch(url).then(function(response){
    return response.json();
  }).then(function(details){
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e){
    console.error(e);
  })
}

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem
  };
    })();
 
  pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
});
