const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Begin coding

function randomQuote(inspQuote, philQuote, funFact) {

  const inspQuote = ["Be yourself; everyone else is already taken - Oscar Wilde", "It is during our darkest moments that we must focus to see the light - Aristotle",
      "If opportunity doesn't knock, build a door -Milton Berle", 
      "Perfection is not attainable, but if we chase perfection we can catch excellence -Vince Lombardi",
      "A champion is someone who gets up when he can't -Jack Dempsey",
      "It is never too late to be what you might have been -George Eliot"]
  const philQuote = ["Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation -Oscar Wilde",
      "That which can be destroyed by the truth should be -P.C. Hodgell",
      "Once upon a time, in some out of the way corner of that universe which is dispersed into numberless twinkling solar systems, there was a star upon which clever beasts invented knowing. That was the most arrogant and mendacious minute of world history, but nevertheless, it was only a minute. After nature had drawn a few breaths, the star cooled and congealed, and the clever beasts had to die. One might invent such a fable, and yet he still would not have adequately illustrated how miserable, how shadowy and transient, how aimless and arbitrary the human intellect looks within nature -Friedrich Nietzsche",
      "Death does not concern us, because as long as we exist, death is not here. And when it does come, we no longer exist -Epicurus",
      "It is the mark of an educated mind to be able to entertain an idea without accepting it -Aristotle"]
  const funFact = ["Tigers have striped skin", "Octopi have three hearts", "Earth's rotation is slowing down",
      "The universe's average color is called Cosmic Latte", "The fear of long words is called Hippopotomonstrosesquippedaliophobia"]

    function randomNumber() {
    return (Math.floor(Math.random() * 14))
  } 
 
  if (randomNumber === 0) {
    return randomQuote.indexOf(inspQuote[0]);
  } else if (randomNumber === 1) {
    return randomQuote.indexOf(philQuote[0]);
  } else if (randomNumber === 2) {
    return randomQuote.indexOf(funFact[0]);
  } else if (randomNumber === 3) {
    return randomQuote.indexOf(inspQuote[1]);
  } else if (randomNumber === 4) {
    return randomQuote.indexOf(philQuote[1]);
  } else if (randomNumber === 5) {
    return randomQuote.indexOf(funFact[1]);
  } else if (randomNumber === 6) {
    return randomQuote.indexOf(inspQuote[2]);
  } else if (randomNumber === 7) {
    return randomQuote.indexOf(philQuote[2]);
  } else if (randomNumber === 8) {
    return randomQuote.indexOf(funFact[2]);
  } else if (randomNumber === 9) {
    return randomQuote.indexOf(inspQuote[3]);
  } else if (randomNumber === 10) {
    return randomQuote.indexOf(philQuote[3]);
  } else if (randomNumber === 11) {
    return randomQuote.indexOf(funFact[3]);
  } else if (randomNumber === 12) {
    return (inspQuote[4]);
  } else if (randomNumber === 13) {
    return randomQuote.indexOf(philQuote[4]);
  } else if (randomNumber === 14) {
    return randomQuote.indexOf(funFact[4]);
  } else {
    return "Something went wrong. Please try again."
  }
  };
  