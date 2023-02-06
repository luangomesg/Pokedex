const url = "https://pokeapi.co/api/v2/pokemon/";
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let nome = document.querySelector(".nome");
let tipo = document.querySelector(".tipo");
let img = document.querySelector(".img");

btn.addEventListener("click", () => {
    let pokemon = input.value;
    console.log(pokemon);
    callPokemon(pokemon)
})

function callPokemon(pokemon) {
    let requisition = fetch(url + pokemon).then(response => response.json()).catch((error) => { console.log(error) })
    requisition.then((data) => {
        nome.innerHTML = "Nome: " + data.name;
        let types = [];
        data.types.map((type) => {
            types.push(type.type.name)
        });
        tipo.innerHTML = `<p> Tipo: ${types.join(", ")} </p>`;
        let urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
        console.log(data)
        img.src = data.sprites.other["official-artwork"].front_default;

    })
}



