let text = JSON.parse(localStorage.getItem("item"));

const items = document.getElementById("items");

items.innerHTML += text;