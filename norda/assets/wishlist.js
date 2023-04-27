import { text } from './shop.js';

const items = document.getElementById("items");

for (let item of text) {
    items.innerHTML += item;
}