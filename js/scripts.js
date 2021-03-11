//defined variable//

let pokemonList = [
  {name: "Gryados", height: 6.5, type: "flying,water"},
  {name: "Mewtwo", height: 2, type: "psychic"},
  {name: "Scyther", height:1.5, type:"bug, flying"}

];

//loop//
for (let i=0; i <pokemonList.length; i++){


//conditional//
if (pokemonList[i].height<5){
document.write(pokemonList[i].name +pokemonList[i].height+ pokemonList[i].type)

}
}


//conditonal with height emphasis//
for (let i=0; i <pokemonList.length; i++){

if (pokemonList[i].height>5){
document.write(pokemonList[i].name +pokemonList[i].height+ pokemonList[i].type+"Wow, thats big!")


}
} 


