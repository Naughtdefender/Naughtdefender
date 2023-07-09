try {
  var readlineSync = require("readline-sync");

  var userName = readlineSync.question("What's Your Name? ");

  var score = 0;

  console.log("Welcome Home " + userName);

  function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer === answer) {
      console.log("You are right!");
      score = score + 1;
    } else {
      console.log("You are wrong");
      score = score - 1;
    }

    console.log("Current Score: " + score);
    console.log("-----------------");
  }

  var questions = [
    {
      question: "Where do I live? ",
      answer: "Rishikesh"
    },
    {
      question: "What is my pet's name? ",
      answer: "Tuffy"
    },
    {
      question: "What is the name of my bike? ",
      answer: "KTM"
    }
  ];

  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }

  console.log("YAY! You Scored: " + score);
} catch (error) {
  console.error('An error occurred:', error);
}
