/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array of objects containing all the properties for each quote used in the program
***/
const quotes = [
  {
    quote: 'It does not do to dwell on dreams and forget to live.',
    source: 'J. K. Rowling',
    citation: 'Harry Potter and the Sorcerer\'s Stone',
    year: '1997'
  },
  {
    quote: 'Everyone has talent. What is rare is the courage to follow the talent to the dark place where it leads.',
    source: 'Erica Jong',
    subject: 'Talent'
  },
  {
    quote: 'All these years I\'ve been feeling like I was growing into myself. Finally, I feel grown.',
    source: 'Oprah Winfrey',
    citation: 'O Magazine, What I Know For Sure',
    year: '2004'
  },
  {
    quote: 'Get busy living or get busy dying.',
    source: 'Stephen King',
  },
  {
    quote: 'Those who dare to fail miserably can achieve greatly.',
    source: 'John F. Kennedy',
  },
  {
    quote: 'I\'m a success today because I had a friend who believed in me and I didn\'t have the heart to let him down.',
    source: 'Abraham Lincoln',
  }
];

//console.log(quotes);


/***
 * `getRandomQuote` function will return a random quote object from the quotes array of objects.
***/
function getRandomQuote () {
  const randomNum = Math.floor(Math.random() * quotes.length);
  //console.log(randomNum);
  //console.log(quotes[randomNum]);
  return quotes[randomNum];
}

/***
 * `printQuote` function will load the HTML for the quote onto the page.  It loads the quote, citation and optionally the year and citation, if available.
***/
function printQuote () {
  const chosenQuote = getRandomQuote();
  let quoteHTML = `
    <p class="quote">${chosenQuote.quote}</p>
    <p class="source">${chosenQuote.source}
  `;

  //if statements determine if the returned quote object contains these additional properties
  if ( chosenQuote.hasOwnProperty('citation') ) {
    quoteHTML += `
      <span class="citation">${chosenQuote.citation}</span>
    `;
  }

  if ( chosenQuote.hasOwnProperty('year') ) {
    quoteHTML += `
      <span class="year">${chosenQuote.year}</span>
    `;
  }

  if ( chosenQuote.hasOwnProperty('subject') ) {
    quoteHTML += `
      <span class="subject">${chosenQuote.subject}</span>
    `;
  }

  quoteHTML += `</p>`;

  document.getElementById('quote-box').innerHTML = quoteHTML;

  return quoteHTML;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);