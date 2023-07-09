var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " to 'DO YOU KNOW MY THINGS'?");
console.log("Let's see how much you know about my Things?");
console.log("---------------------------------------------------");

var score = 0;

// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!");
    score = score + 1;
  } else {
    console.log("You are wrong!");
  }

  console.log("Current Score: ", score);
  console.log("---------------------------------------------------");
}

// array of objects

var questions = [
    {
    question: "What is thing I lost recently in Hostel? ",
    answer: "Ear Buds"
    },
    {
    question: "Which Bike I Ride? ",
    answer: "KTM"
    },
    {
    question: "What is my favourite color? ",
    answer: "Orange"
    },
    {
    question: "What is my Dream Bike? ",
    answer: "Kawasaki Ninja ZX-10R"
    },
    {
    question: "What is my favourite Web Series? ",
    answer: "Game Of Thrones"
    },
    {
    question: "What is my Laptop Brand Name? ",
    answer: "Dell"
    },
    {
    question: "What is my favourite Place to visit? ",
    answer: "Chamba"
    }
    ];

// loop

for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
    console.log(answer[i]);
    console.log("-----------------------------------------------");
    }

// final score

console.log("YAY! You SCORED: ", score);
console.log("---------------------------------------------------");

// high scores

var highScores = [
    {
    name: "Kshitiz",
    score: 7
    },
    {
    name: "Abhay",
    score: 6
    }
    ];

console.log("Check out the high scores, if you should be there ping me and I'll update it");

for (var i=0; i<highScores.length; i++) {
    var currentScore = highScores[i];
    console.log(currentScore.name, " : ", currentScore.score);
    }