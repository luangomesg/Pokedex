const url = "https://pokeapi.co/api/v2/pokemon/";
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let nome = document.querySelector(".nome");
let tipo = document.querySelector(".tipo");
let img = document.querySelector(".img");
let peso = document.querySelector(".peso");
let habili = document.querySelector(".habilidades");
let hp = document.querySelector(".hp");
let atk = document.querySelector(".atk");
let def = document.querySelector(".def");
let satk = document.querySelector(".satk");
let sdef = document.querySelector(".sdef");
let speed = document.querySelector(".speed");

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
        let abilities = [];
        data.types.map((type) => {
            types.push(type.type.name)
        });
        tipo.innerHTML = `<p> Tipo: ${types.join(", ")} </p>`;
        console.log(data)
        img.src = data.sprites.other["official-artwork"].front_default;
        peso.innerHTML = "Peso: " + data.weight / 10 + " kg";
        data.abilities.map((abl) => {
            abilities.push(abl.ability.name)
        })
        habili.innerHTML = `Habilidades: ${abilities.join(", ")}`
        hp.innerHTML = "HP: " + data.stats[0].base_stat;
        atk.innerHTML = "ATK: " + data.stats[1].base_stat;
        def.innerHTML = "DEF: " + data.stats[2].base_stat;
        satk.innerHTML = "S-ATK: " + data.stats[3].base_stat;
        sdef.innerHTML = "S-DEF: " + data.stats[4].base_stat;
        speed.innerHTML = "SPEED: " + data.stats[5].base_stat;
    })
}



