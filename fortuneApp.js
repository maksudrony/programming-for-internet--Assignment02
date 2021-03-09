
const genFortune = document.getElementsByClassName('gen-fortune');
 //selectors
//variables defined with const behave like let variables,except they cannot be reassigned, const means constants.

(function newFortune() {

  var fortunes = ["In life, as in art, the beautiful moves in curves.",
  "I have to study myself in actuality – as I am, not as I wish to be.",
  "Your transformation affects the world.",
  "A free mind never concludes",
  "A room without books is like a body without a soul.",
  "Nothing is impossible, the word itself says ‘I’m possible’!",
  "Count your age by friends, not years. Count your life by smiles, not tears.",
  "Believe you can and you’re halfway there.",
  "You only live once, but if you do it right, once is enough.",
  "There is only one thing that makes a dream impossible to achieve: the fear of failure."]

  var randomFortune = Math.floor(Math.random() * fortunes.length);
  genFortune[0].innerText = fortunes[randomFortune];
})();
