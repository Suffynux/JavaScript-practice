document.addEventListener("DOMContentLoaded", () => {

    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");

    // Ten questions in an Array with the combination of object
    const questions = [
        {
            question: "What is the capital of Italy?",
            choices: ["Rome", "Paris", "Berlin", "Madrid"],
            answer: "Rome",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Leo Tolstoy"],
            answer: "William Shakespeare",
        },
        {
            question: "What is the largest planet in our solar system?",
            choices: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter",
        },
        {
            question: "What is the chemical symbol for water?",
            choices: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            choices: ["China", "Japan", "Thailand", "Vietnam"],
            answer: "Japan",
        },
        {
            question: "What is the square root of 64?",
            choices: ["6", "7", "8", "9"],
            answer: "8",
        },
        {
            question: "What is the currency of the United States?",
            choices: ["Euro", "Dollar", "Yen", "Pound"],
            answer: "Dollar",
        },
        {
            question: "What is the tallest mountain in the world?",
            choices: ["K2", "Mount Everest", "Kilimanjaro", "Denali"],
            answer: "Mount Everest",
        },
        {
            question: "Who painted the Mona Lisa?",
            choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Leonardo da Vinci",
        },
        {
            question: "What is the freezing point of water?",
            choices: ["0°C", "100°C", "50°C", "-10°C"],
            answer: "0°C",
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener("click" , () => {
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        
    })


});
