document.addEventListener("DOMContentLoaded", function() { 
    const copyBtn = document.getElementById("copy-btn");

    const quotes = [
        {
            text: "The best way to predict your future is to create it.",
            author: "Abraham Lincoln"
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            author: "Albert Schweitzer"
        },
        {
            text: "You miss 100% of the shots you don’t take.",
            author: "Wayne Gretzky"
        },
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        }, 
        {
  text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  author: "Christian D. Larson"
},
{
  text: "You can't build a reputation on what you are going to do.",
  author: "Henry Ford"
},
{
  text: "The only limit to our realization of tomorrow will be our doubts of today.",
  author: "Franklin D. Roosevelt"
},
{
  text: "I have not failed. I've just found 10,000 ways that won't work.",
  author: "Thomas Edison"
},
{
  text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
  author: "Steve Jobs"
},
{
  text: "In three words I can sum up everything I've learned about life: it goes on.",
  author: "Robert Frost"
},
{
  text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  author: "Nelson Mandela"
}       
    ];

    const quoteText = document.getElementById("text");
    const quoteAuthor = document.getElementById("author");
    const newQuoteBtn = document.getElementById("new-quote");

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.innerText = quotes[randomIndex].text;
        quoteAuthor.innerText = quotes[randomIndex].author;
    }

    newQuoteBtn.addEventListener("click", getRandomQuote);

    // call the function to display a quote on page load
    getRandomQuote();
    
    copyBtn.addEventListener("click", function() {
        const quoteToCopy = quoteText.innerText + " - " + quoteAuthor.innerText;
        navigator.clipboard.writeText(quoteToCopy);
    });
});

