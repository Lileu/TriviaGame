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
       question: "In which movie was the catchphrase 'Hasta la vista, baby!' first used by the Terminator?",
       answerList: ["The Terminator", "Terminator 2: Judgment Day", "Terminator 3: Rise of the Machines", "Terminator Salvation (2009)"],
       correctAnswer: 1,
       correctGif: "assets/images/arnie1.gif",
       incorrectGif: "assets/images/arnie2.gif",

       question: "Who played John McClane's reluctant sidekick in Die Hard with a Vengeance?",
       answerList: ["Danny De Vito", "Danny Glover", "Chuck Norris", "Samuel L. Jackson"],
       correctAnswer: 3,
       correctGif: "assets/images/bruce1.gif",
       incorrectGif: "assets/images/bruce2.gif"
   }];

   // game variables and methods
   var game = {
           questions: triviaQuestions,
           correctCount: 0,
           inCorrectCount: 0,
           unansweredCount: 0,
           timer: 15,
           currentQuestion: 0,

           // count down
           countdown: function () {
               this.timer--;
               $('#time-remaining').html(this.timer);
               if (this.timer <= 0) {
                   clearInterval(timer);

               }
           },

           // start game 
           startGame: function () {

               timer = setInterval(this.countDown, 1000);
               $('#game-body').html('<h2>' + questions[this.currentQuestion].question + '</h2>');

               for (var i = 0; i < [this.currentQuestion].answerList.length; i++) {
                   // var choices = $('<button>');
                   // choices.text(triviaQuestions[currentQuestion].answerList[i]);
                   $('answer-list').append('<button"class="answer-button" id="button-" ' + i + ' "data-name-" ' + questions[this.currentQuestion].answers[i] + '</button>');

               }
           },

           // player clicks 
           checkGuess: function (guess) {
               clearInterval(timer);
               if ($(guess.target).data("name") == questions[this.currentQuestion].correctAnswer) {
                   this.correctlyAnswered();
               } else {
                   this.incorrectelyAnswered();
               }
           },

           // correct guess
           correctlyAnswered: function () {
               clearInterval(timer);
               $('#current-question').empty();
               $('.answer-list').empty();

               this.correctCount++;
               $('#game-body').html('<h2>Right on! You are correct!</h2>');
               if (this.currentQuestion == this.questions.length - 1) {
                   setTimeout(this.results, 2 * 1000);
               }
           },

           // incorrect guess
           incorrectelyAnswered: function () {
               clearInterval(timer);
               $('#current-question').empty();
               $('.answer-list').empty();

               this.inCorrectCount++;
               $('#game-body').html('<h2>Awesome! Awesome guess, but you were incorrect.</h2>');
               if (this.currentQuestion == this.questions.length - 1) {
                   setTimeout(this.results, 2 * 1000);
               }
           },

           // next question
           nextQuestion: function () {
               this.timer = 15;
               $('#time-remaining').html(this.timer);
               this.currentQuestion++;
               this.startGame();
           },

           // time out game 
           // show correct count, incorrect count, unanswer? option to restart by clicking
           timeOut: function () {
               clearInterval(timer);
               $('#game-body').html('<h2>Too slow on the trigger there, you ran out on time!</h2>');
               $('#game-body').append('<h3>The correct answer was: ' + questions[this.currentQuestion].correctAnswer + '</h3>');
               if (this.currentQuestion == this.questions.length - 1) {
                   setTimeout(this.results, 2 * 1000);
               }
           },
           // display results
           results: function () {
               clearInterval(timer);
               $('#game-body').html('<h2>GOOD JOB! You smashed it!</h2>');
               $('#game-body').append('<h3>WINS: ' + this.correctCount + '</h3>');
               $('#game-body').append('<h3>LOSSES: ' + this.inCorrectCount + '</h3>');
               $('#game-body').append('<h3>MISSES ' + this.unansweredCount + '</h3>');
               $('#game-body').append('<button id="reset">Reset game' + this.unansweredCount + '</h3>');

           }
       },
       // reset game 
       reset: function () {
           this.inCorrectCount = 0;
           this.CorrectCount = 0;
           this.unansweredCount = 0;
           this.timer = 15;
           this.currentQuestion = 0;
       }
    }

   // MAIN PROCESS
   // ==========================================================================
   // $(document).ready(function() {
   //     var gamebody = $("#game-body");
   //     gamebody.html('<button type="button" class="btn btn-light btn-block" id="startBtn">Lets get started!</button>');
   // });


   $("#startButton").on('click', function () {
       $("#startButton").hide();
       game.startGame();
   })

   $(document).on('click', '.answer-button', function (guess) {
       game.checkGuess(guess);
   })

   $(document).on('click', '#reset', function () {
       game.reset();
   })