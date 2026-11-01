
const quotes = [
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "Happiness depends upon ourselves.",
        author: "Aristotle"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C. S. Lewis"
    },
    {
        text: "Small steps every day lead to big changes.",
        author: "Unknown"
    },
    {
        text: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
    },
    {
        text: "Nothing will work unless you do.",
        author: "Maya Angelou"
    },
    {
        text: "The best way out is always through.",
        author: "Robert Frost"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("newQuote");

let previousIndex = -1;

function showRandomQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes.length > 1 && randomIndex === previousIndex);

    previousIndex = randomIndex;

    const selectedQuote = quotes[randomIndex];

    quoteElement.style.opacity = "0";

    setTimeout(() => {
        quoteElement.textContent = selectedQuote.text;
        authorElement.textContent = "— " + selectedQuote.author;
        quoteElement.style.opacity = "1";
    }, 150);
}

newQuoteButton.addEventListener("click", showRandomQuote);

// Show a random quote every time the app opens.
showRandomQuote();
