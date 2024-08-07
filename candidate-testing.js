const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName. Declare this variable as an empty string. // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = [   "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];

let correctAnswers = [  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"]; // 3 should still be a string

candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("\nWhat is your name (FirstName LastName)? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let q = 0; q < questions.length; q++) {
  candidateAnswers.push(input.question(questions[q]));
 //console.log(candidateAnswers[q]);
  }
 //console.log(candidateAnswers);
  console.log(`-----------------------------------------------`);
}

function gradeQuiz(candidateAnswers) {
    let score = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log("");

  for (q = 0; q < questions.length; q++) {
    console.log(`${q+1}) ${questions[q]}`)
    console.log(`Your answer: ${candidateAnswers[q]}`);
    console.log(`Correct answer: ${correctAnswers[q]}`);
    
        if (candidateAnswers[q].toUpperCase() == correctAnswers[q].toUpperCase()) {
        console.log(`✓ You answered correctly \n`);
        score++;
        } else {
        console.log(`✗ You did not answer correctly \n`);  
        }
    }
    
  let grade = score/questions.length*100;  //TODO 3.2 use this variable to calculate the candidates score.
  let pass_fail = '';

  if (grade >= 80) {
    pass_fail = 'PASS';
  }
  else { 
    pass_fail = 'FAIL'; 
  }
    
    console.log(`>>> Overall Grade: ${grade}% (${score} of ${questions.length} responses correct)\n>>> Status: ${pass_fail}`); 

    return grade;
}

function runProgram() {
    askForName();

  // TODO 1.1c: Greet candidate using their name //
    console.log(`Candidate Name: ${candidateName} \n-----------------------------------------------`);
    askQuestion();
    gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
    candidateName: candidateName,
    question: question,
    correctAnswer: correctAnswer,
    candidateAnswer: candidateAnswer,
    questions: questions,
    correctAnswers: correctAnswers,
    candidateAnswers: candidateAnswers,
    gradeQuiz: gradeQuiz,
    runProgram: runProgram
};