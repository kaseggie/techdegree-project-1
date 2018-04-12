// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// the quotes array of objects
var quotes = [
  {
    quote: 'Computer science is no more about computers than astronomy is about telescopes.',
    source: 'Edsger W. Dijkstra',
  },
  {
    quote: 'Simplicity is prerequisite for reliability.',
    source: 'Edsger W. Dijkstra',
    year: '1971'
  },
  {
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    source: 'Nelson Mandela',
  },
  {
    quote: 'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.',
    source: 'Nelson Mandela',
    citation: 'Presidential Inauguration',
    year: '1994'
  },
  {
    quote: 'Study nature, love nature, stay close to nature. It will never fail you.',
    source: 'Frank Lloyd Wright',
    citation: 'Unveiling of Fallingwater',
    year: '1939'
  },
];

/*
 * generates a random number between 0 and the length of the quotes array - 1,
 * and returns the quote from the quotes array at that index
 */
function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/*
 * generates the string that contains all the quote's properties, and prints it
 */
function printQuote() {
  var quote =  getRandomQuote();
  var message = '';
  message += '<p class="quote">' + quote.quote + '</p>';
  message += '<p class="source">' + quote.source + '</p>';
  if (quote.hasOwnProperty('citation')) {
    message += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.hasOwnProperty('year')) {
    message += '<span class="citation">' + quote.year + '</span>';
  }
  document.getElementById('quote-box').innerHTML = message;
}
