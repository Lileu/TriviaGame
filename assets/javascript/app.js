
// VARIABLES
// ==========================================================================
// question object/properties/values
var triviaQuestions = [{
    question: "Who does Tom Cruise play in Mission: Impossible?",
    answerList: [ "Michael Wand", "Martin Riggs", "Ethan Hunt", "Bryan Mills" ],
    correctAnswer: 2,
    correctGif: "assets/images/tom1.gif",
    incorrectGif: ""
}, {
    question: "Who does Tom Cruise play in Mission: Impossible?",
    answerList: [ "Michael Wand", "Martin Riggs", "Ethan Hunt", "Bryan Mills" ],
    correctAnswer: 2,
    correctGif: "assets/images/tom1.gif",
    incorrectGif: ""
}, {
    question: "Who does Tom Cruise play in Mission: Impossible?",
    answerList: [ "Michael Wand", "Martin Riggs", "Ethan Hunt", "Bryan Mills" ],
    correctAnswer: 2,
    correctGif: "assets/images/tom1.gif",
    incorrectGif: ""
}, {
    question: "Who does Tom Cruise play in Mission: Impossible?",
    answerList: [ "Michael Wand", "Martin Riggs", "Ethan Hunt", "Bryan Mills" ],
    correctAnswer: 2,
    correctGif: "assets/images/tom1.gif",
    incorrectGif: ""
}, {
    question: "Who does Tom Cruise play in Mission: Impossible?",
    answerList: [ "Michael Wand", "Martin Riggs", "Ethan Hunt", "Bryan Mills" ],
    correctAnswer: 2,
    correctGif: "assets/images/tom1.gif",
    incorrectGif: ""
}];

// game variables and methods
var game = {
    questions: triviaQuestions
    correctCount : 0,
    inCorrectCount : 0,
    unansweredCount: 0,
    timer: 30,
    currentQuestion: 0,
    
    
    // start game 
    startGame: function() {
        
    },
    
    // player clicks 
    checkGuess: function() {
        
    },
    // correct guess
    correctlyAnswered: function() {
        
    },
    // incorrect guess
    incorrectelyAnswered: function() {
        
    },
    
    // next question
    nextQuestion: function() {

    },
    
     // time out game 
     // show correct count, incorrect count, unanswer? option to restart by clicking
     timeOut: function() {
         
    },
    
    // reset game 
    resetGame: function() {
        
    },    
}

// MAIN PROCESS
// ==========================================================================
// $(document).ready(function(){
$('#startButton').on('click', function(){
    $(this).hide();
    startGame();
});

// })
