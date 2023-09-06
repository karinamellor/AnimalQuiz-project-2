const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev'); 
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');
var startButton = document.getElementById("start-quiz");

let currentQuestion = 0;
var score = 0;

/* Questions */

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

        question: "Although it is rare, it is possible to domesticate a fox.",
        answers: [
              {option:"No!",answer:false},
              {option:"Yes!",answer:true}
        ]
    },
    {
        
    
         question: "The Anaconda kills its preys with venon?",
         answers: [
          {option:"No!",answer:true},
          {option:"Yes!",answer:false}
        ]
    },
    {
        question: "Sharks have their babies by laying eggs.",
        answers: [
          {option:"No!",answer:true},
          {option:"Yes!",answer:false}
        ]      

         
    },
    {
        question: "Sloths eat only the leaves on the tree they were born on.",
        answers: [
            {option:"No!",answer:false},
            {option:"Yes!",answer:true}
        ]
         
    },
    {
        question: "Killer whales have a matriarchal society system, the pod is ruled by the oldest female.",
        answers: [
            {option:"No!",answer:false},
            {option:"Yes!",answer:true}
        ]    
            
    },

    




]



restartBtn.addEventListener('click' ,restart);
prevBtn.addEventListener('click' ,prev); 
nextBtn.addEventListener('click' ,next);
submitBtn.addEventListener('click' ,submit);

/* Begin Quiz */

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
        }1
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
            next();
        }
    }        
    prevBtn.classList.add('hide');
}

beginQuiz();

function restart(){
     currentQuestion = 0;
     prevBtn.classList.remove('hide');
     nextBtn.classList.remove('hide');
     submitBtn.classList.remove('hide');
     trueBtn.classList.remove('hide');
     falseBtn.classList.remove('hide');
     score = 0;
     userScore.innerHTML = score;
     beginQuiz();
}     

function next(){
    currentQuestion++;
    if(currentQuestion>=2){
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    } 
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
            next();
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
        userScore,innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }    
    prevBtn.classList.remove('hide');
    
}    

function prev(){
  currentQuestion--;
  if(currentQuestion<=0){
      prevBtn.classList.add('hide');
      nextBtn.classList.remove('hide'); 
   }

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
            next();   
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
            next();
        }
    }           

     nextBtn.classList.remove('hide');
}  

function submit(){
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    questionText.innerHTML = "Congratulations!";
}    