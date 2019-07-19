$(document).ready(function() {
    var gamebody = $("#game-body");
    gamebody.html('<button type="button" class="btn btn-light btn-block" id="startBtn">Lets get started!</button>');
})


$("#startButton").on('click', function(){
    $("#startButton").hide();

})
    

// VARIABLES
// ==========================================================================
// question object/properties/values
var triviaQuestions = [{
    question: "Who does Tom Cruise play in Mission: Impossible?",
    answerList: ["Michael Wand", "Martin Riggs", "Ethan Hunt", "Bryan Mills"],
    correctAnswer: 2,
    correctGif: "assets/images/tom1.gif",
    incorrectGif: "assets/images/tom2.gif"
}, {
    question: "Who plays 12-year-old Mathilda in the 1994 cult English-language French action thriller film, Léon: The Professional?",
    answerList: ["Jodie Foster", "Scarlett Johansson", "Drew Barrymore", "Natalie Portman"],
    correctAnswer: 3,
    correctGif: "assets/images/nat1.gif",
    incorrectGif: "assets/images/nat2.gif"
}, {
    question: "In which film does Jean-Claude Van Damme famously fight off a group of jealous Asians while drunk dancing?",
    answerList: ["The Quest", "Lion Heart", "Kickboxer", "Double Impact"],
    correctAnswer: 2,
    correctGif: "assets/images/jean1.gif",
    incorrectGif: "assets/images/jean2.gif"
}, {
    question: "?",
    answerList: ["", "", "", ""],
    correctAnswer: 2,
    correctGif: "assets/images/tom1.gif",
    incorrectGif: ""
}, {
    question: "?",
    answerList: ["", "", "", ""],
    correctAnswer: 2,
    correctGif: "assets/images/tom1.gif",
    incorrectGif: ""
}];

// game variables and methods
var game = {
    questions: triviaQuestions,
    correctCount: 0,
    inCorrectCount: 0,
    unansweredCount: 0,
    timer: 30,
    currentQuestion: 0,

    // count down
    countDown: function () {
        game.timer--;
    },

    // start game 
    startGame: function () {
        $("#startBtn").hide();
        timer = setInterval(game.countDown, 1000);
        $('#game-body').html('<h2>' + questions[game.currentQuestion].question + '</h2>');

        for (var i = 0; i < currentQuestion.length; i++) {
            $('#game-body')
            var choices = $('<button>');
            choices.text(triviaQuestions[currentQuestion].answerList[i]);
            $('#game-body').append('<button id="button"' + i + '" class="answer-button">')
        }
    },

    // player clicks 
    checkGuess: function () {

    },
    // correct guess
    correctlyAnswered: function () {

    },
    // incorrect guess
    incorrectelyAnswered: function () {

    },

    // next question
    nextQuestion: function () {

    },

    // time out game 
    // show correct count, incorrect count, unanswer? option to restart by clicking
    timeOut: function () {

    },

    // reset game 
    resetGame: function () {

    },
}

// MAIN PROCESS
// ==========================================================================
