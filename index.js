var positive = [
  "bad days don't last forever",
"you can't make everyone happy. and that's okay. most importantly, make yourself happy",
  "you are an important part of this world and you matter",
"be who you needed when you were younger",
"'you can. even if you don't believe it. even though it doesn't feel like it right now. even in the toughest of times. you can'"
];

var getInspired = document.querySelector('.remindersBtn');
var inspo = document.querySelector('.inspo');

getInspired.addEventListener('click', appendQuote);

function appendQuote() {
  var random = Math.floor(Math.random() * positive.length);
  var quote = positive[random];
  inspo.innerText = quote;
}
