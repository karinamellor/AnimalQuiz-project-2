const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('true');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

let questions = [
    {
       question: "A Cheetah is capable of running at 80 to 98 km/h?",
       answers: [
          {option:"Yes!",answer:true},
          {option:"No!",answer:false}
        ]

      }, 
      {
           question: "The adult female Lion is larger than the male",
           answers: [
              {option:"No!",answer:true},
              {option:"Yes!",answer:false}
        ]
          
          question: "The Anaconda kills its preys with venon?",
          answers: [
              {option:"No!",answer:true},
              {option:"Yes!",answer:false}
        
