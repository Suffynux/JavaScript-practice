const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama"
  ];
  
  function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteText").innerText = quote;
  }
  