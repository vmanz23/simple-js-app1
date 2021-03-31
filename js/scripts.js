//IIFE

let pokemonRepository = (function () {
  
  let modalContainer = document.querySelector 
  ('#modal-container');
  //array empty
  let pokemonList = [];
  //url as a variable 
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//function modal
  function showModal(pokemon) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    //button click modal
    let closeButtonElement = document.createElement ('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener ('click', hideModal);
    modal.appendChild(closeButtonElement);

// name display with modal
    let pkName = document.createElement('h1');
    pkName.innerText = pokemon.name;
    modal.appendChild(pkName);

// height display with modal
    let pkHeight = document.createElement('p');
    pkHeight.innerText = pokemon.height;
    modal.appendChild(pkHeight);

// image display of pokemon with modal
    let pkImg = document.createElement('img');
    pkImg.src = pokemon.imageUrl;
    modal.appendChild(pkImg);
    modal.appendChild(cotain)

    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
  }
// function to hide
  function hideModal() {
    modalContainer.classList.remove ('is-visible')
  
  }
//close eventlistener 
  window.addEventListener ('keydown', (e) => {
    if(e.key === 'Close' && modalContainer.classList.contains('is=visible')) {
      hideModal();
    }
  });
//close with click 
  modalContainer.addEventListener ('click', (e) =>{
    let target = e.target;
    if(target === modalContainer) {
      hideModal();
    }
  });


//DOM List function
function addListItem(pokemon){
  let pokeList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
// button pokemon names
  button.innerText = pokemon.name;
  button.classList.add('button-class');
 

  listItem.appendChild(button);
  pokeList.appendChild(listItem);

// click eventlistener
  button.addEventListener('click', function(event){
    showDetails(pokemon);
  });
}

// function for console showModal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(){
      showModal(pokemon);
    });
  }

  //function for pokemonList
  function getAll(){
        return pokemonList;
  }
  function add(pokemon) {
    if (typeof(pokemon) === 'object'){
      pokemonList.push(pokemon);
    } 
  }

  //function to get list from API
  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      hideLoadingMEssage();
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      hideLoadingMEssage();
      console.error(e);
    })
  }

// function to get pokemon details from url
  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  // function to show loading and hide message
  function showLoadingMessage () {
  }
  function hideLoadingMEssage () {
  }
  

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();
  
//calling loadList from repository
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
