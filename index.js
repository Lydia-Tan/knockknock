
var owl = [
  "Olive",
  "Beets",
  "Adore",
"Dozen",
"Abby"
];

var owl2 = [
  "Olive you!",
  "Beets me!",
  "Adore is between us. Open up!",
  "Dozen anybody want to let me in?",
  "Abby birthday to you!"
];

var btnpress = document.querySelector('#btn');
var firstJoke = document.querySelector('.joke1');
var responseFirst = document.querySelector('.joke2');
var finalJoke = document.querySelector('.jokeend');

btnpress.addEventListener('click', appendJoke);

function appendJoke() {
  var indexer = Math.floor(Math.random() * owl.length);
  var joke = owl[indexer];
  firstJoke.innerText = joke;
  responseFirst.innerText = joke + " who?";
  var joke2 = owl2[indexer];
  finalJoke.innerText = joke2;
}
