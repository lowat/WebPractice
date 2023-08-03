'use strict';
const form = document.getElementById('form');
const pokeImg = document.getElementById('pokeImg');
const pokeName = document.getElementById('pokeName');
const urlBase = 'https://pokeapi.co/api/v2/pokemon/';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchPokemon(generateURL(urlBase, pokeName.value));
});

window.addEventListener('load', (e) => {
    e.preventDefault();
    fetchPokemon(generateURL(urlBase, 'pikachu'));
});

function generateURL(base, parameter) {
    return `${base}${parameter}`;
};

async function fetchPokemon(url) {
    const response = await fetch(url);
    const responseJSON = await response.json();
    pokeImg.src = responseJSON.sprites.other["official-artwork"].front_default;
    pokeImg.classList.toggle("hidden");
};
