'use strict'
const form = document.getElementById('form');
const pokeInfoDisplay = document.getElementById('pokeInfoDisplay'); 
const pokeImg = document.getElementById('pokeImg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pokeName = document.getElementById('pokeName');
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName.value}`;
    fetchPokemon(url);
    

});

async function fetchPokemon(url){
    const response = await fetch(url);
    const responseJSON = await response.json();
    pokeImg.src = responseJSON.sprites.other["official-artwork"].front_default;
    pokeImg.classList.toggle("hidden");
}