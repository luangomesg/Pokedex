const url = "https://pokeapi.co/api/v2/pokemon/";
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let pokemon = input.value;
    console.log(pokemon);
    callPokemon(pokemon)
})

 function callPokemon(pokemon) {
    let requisition = fetch(url + pokemon).then(response => response.json()).catch((error) => {console.log(error)})
    requisition.then(data => console.log(data));
}



