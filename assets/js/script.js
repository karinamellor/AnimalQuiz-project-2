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
        
      },
      { 

          
          
           question: "The Anaconda kills its preys with venon?",
          answers: [
              {option:"No!",answer:true},
              {option:"Yes!",answer:false}
          ]
      }

]

restartBtn.addEventListener('click,restart');
prevBtn.addEventListener('click,prev'); 
nextBtn.addEventListener('click,next');
submitBtn.addEventListener(click,submit);

function beginQuiz(){
    currentQuestion =0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }    
        }    
        userScore.innerHTML = score;
        if(currentQuestion<2){
             nextBtn();
        }
    } 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }        
        userScore.innerHTML = score;
        if(currentQuestion<2){
            nextBtn();
        }
    }        