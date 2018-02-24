$(document).ready(function() {

//each question is going to be a different container in the HTML file

//clean code
var begin = false
var q1false;
var q1true;
var conclusion;
var correct = 0
var incorrect = 0

var questions = [
    {
    questionName: 'Frozen',
    question: 'Who are the two main characters in the movie "Frozen"?',
    options: ['Simba & Scar', 'Aladdin & Princess Jasmine', 'Anna & Elsa', 'Ariel & Sebastian'],
    correct: 'Anna & Elsa',
    correctAns: 'The correct answer was "Anna & Elsa".',
    img: "assets/images/Frozen.jpg"
  },
  {
    questionName: 'Lion King',
    question: 'Who is the main villian in the "Lion King"?',
    options: ['Simba', 'Mufasa', 'Rafiki', 'Scar'],
    correct: 'Scar',
    correctAns: 'The correct answer was "Scar".',
    img: "assets/images/Scar.gif"
  },
  {
    questionName: 'JungleBook',
    question: 'In the "JungleBook", which character wanted to learn how to make fire?',
    options: ['Mowgli', 'King Louie', 'Bagheera', 'Shere Khan'],
    correct: 'King Louie',
    correctAns: 'The correct answer was "King Louie".',
    img: "assets/images/KingLouie.gif"
  },
  {
    questionName: 'Xmas',
    question: 'Who was the director of "The Nightmare Before Christmas"?',
    options: ['Time Burton', 'Henry Selick', 'Steven Spielberg', 'George Lucas'],
    correct: 'Henry Selick',
    correctAns: 'The correct answer was "Henry Selick".',
    img: "assets/images/Nightmare.gif"
  },
  {
    questionName: 'Cars',
    question: 'In "Cars", who was Lightning McQueens best friend?',
    options: ['Sally Carrera', 'Doc Hudson', 'Sarge', 'Tow Mater'],
    correct: 'Tow Mater',
    correctAns: 'The correct answer was "Tow Mater".',
    img: "assets/images/Cars.gif"
  },
]

var intervalId;
var time = 15

//-------------Timers-----------------------------------------------------------
function reset() {
 time = 15;
 $(".timer").text("Time Remaining: " + time + " seconds.");
}
function stop() {
 console.log("stopping");
 clearInterval(intervalId);
 $(".timer").text("Time Remaining: " + time + " seconds.");
}
function startp1() {
 intervalId = setInterval(countp1, 1000);
}
function countp1() {
 time--;
 $(".timer").text("Time Remaining: " + time + " seconds.");
 if (time === 0) {
   incorrect++
   $(".questionpage1").toggle(false);
   $(".questionpage1false").toggle(true);
   stop()
   setTimeout(sevenSeconds1, 7000);
 }
}
//-------------Timers-----------------------------------------------------------


//randomize object within questions array
var randomWord = questions[Math.floor(Math.random() * questions.length)]
console.log('test', randomWord)

function buttonStyle() {
  switch(randomWord.questionName) {
    case 'Frozen':
        $("#buttonsContainer").empty()
        document.getElementById("page1").style.backgroundColor = '#48D1CC'
        document.getElementById("page2").style.backgroundColor = '#48D1CC'
        document.getElementById("page3").style.backgroundColor = '#48D1CC'
        for (var i = 0; i < randomWord.options.length; i++) {
          var optionsButton = $("<button>")
          optionsButton.addClass("btn btn-info choice")
          if (randomWord.options[i] === randomWord.correct) {
            optionsButton.attr('data-correct', true)
          }
          optionsButton.text(randomWord.options[i])
          $("#buttonsContainer").append(optionsButton)
        }
      break;
    case 'Lion King':
        $("#buttonsContainer").empty()
        document.getElementById("page1").style.backgroundColor  = '#FFFF00'
        document.getElementById("page2").style.backgroundColor  = '#FFFF00'
        document.getElementById("page3").style.backgroundColor  = '#FFFF00'
        for (var i = 0; i < randomWord.options.length; i++) {
          var optionsButton  = $("<button>")
          optionsButton.addClass("btn btn-warning choice")
          if (randomWord.options[i] === randomWord.correct) {
            optionsButton.attr('data-correct', true)
          }
          optionsButton.text(randomWord.options[i])
          $("#buttonsContainer").append(optionsButton)
        }
      break;
    case 'JungleBook':
          $("#buttonsContainer").empty()
          document.getElementById("page1").style.backgroundColor  = '#8B4513'
          document.getElementById("page2").style.backgroundColor  = '#8B4513'
          document.getElementById("page3").style.backgroundColor  = '#8B4513'
          for (var i = 0; i < randomWord.options.length; i++) {
            var optionsButton = $("<button>")
            optionsButton.addClass("btn btn-success choice")
            if (randomWord.options[i] === randomWord.correct) {
              optionsButton.attr('data-correct', true)
            }
            optionsButton.text(randomWord.options[i])
            $("#buttonsContainer").append(optionsButton)
          }
      break;
    case 'Xmas':
            $("#buttonsContainer").empty()
            document.getElementById("page1").style.backgroundColor  = '#D3D3D3'
            document.getElementById("page2").style.backgroundColor  = '#D3D3D3'
            document.getElementById("page3").style.backgroundColor  = '#D3D3D3'
            for (var i = 0; i < randomWord.options.length; i++) {
              var optionsButton = $("<button>")
              optionsButton.addClass("btn btn-dark choice")
              if (randomWord.options[i] === randomWord.correct) {
                optionsButton.attr('data-correct', true)
              }
              optionsButton.text(randomWord.options[i])
              $("#buttonsContainer").append(optionsButton)
            }
      break;
    case 'Cars':
              $("#buttonsContainer").empty()
              document.getElementById("page1").style.backgroundColor = '#FFDEAD'
              document.getElementById("page2").style.backgroundColor = '#FFDEAD'
              document.getElementById("page3").style.backgroundColor = '#FFDEAD'
              for (var i = 0; i < randomWord.options.length; i++) {
                var optionsButton = $("<button>")
                optionsButton.addClass("btn btn-danger choice")
                if (randomWord.options[i] === randomWord.correct) {
                  optionsButton.attr('data-correct', true)
                }
                optionsButton.text(randomWord.options[i])
                $("#buttonsContainer").append(optionsButton)
              }
      break;
    default:
                $("#buttonsContainer").empty()
                document.getElementById("page1").style.backgroundColor  = '#A991D4'
                document.getElementById("page2").style.backgroundColor  = '#A991D4'
                document.getElementById("page3").style.backgroundColor  = '#A991D4'
                for (var i = 0; i < randomWord.options.length; i++) {
                  var optionsButton = $("<button>")
                  optionsButton.addClass("btn btn-primary choice")
                  if (randomWord.options[i] === randomWord.correct) {
                    optionsButton.attr('data-correct', true)
                  }
                  optionsButton.text(randomWord.options[i])
                  $("#buttonsContainer").append(optionsButton)
                }
      break;
    }

}

function randomGenerator() {
    $('#question').text(randomWord.question)
    console.log(randomWord.question)
    buttonStyle()
  }
  //Make a check to see which of the questions this code is for to make styling for the buttons and the background



function superbeginning() {
  if (begin === false) {
    $(".start").toggle(true);
    $(".questionpage1").toggle(false);
    $(".questionpage1true").toggle(false);
    $(".questionpage1false").toggle(false);
    $(".conclusionpage6").toggle(false);
    q1false;
    q1true;
    correct = 0
    incorrect = 0
    console.log("SuperBeginning: Cor/Inc " + correct,incorrect)
    clickstart();
   }
}
function clickstart() {
  console.log('clickStart')
  $("#begin").off().on("click", function() {
    begin = true
    if (begin === true) {
      $(".start").toggle(false);
      $(".questionpage1").toggle(true);
      questionpage1()
    }
  })
}
function questionpage1() {
    randomGenerator()
    reset();
    startp1();
    $(".choice").off().on("click", function() {
        if ($(this).attr("data-correct") === 'true') {
              $(".timer").toggle(true);
              var questionsImg = $("<img class='img-fluid'>")
              questionsImg.attr("src", randomWord.img)
              console.log(questionsImg)
              $("#imgDisplay1").append(questionsImg)
            correct++
            $(".questionpage1").toggle(false);
            $(".questionpage1true").toggle(true);
            stop()
            setTimeout(sevenSeconds1, 7000);
      } else {
          document.getElementById("answer").innerHTML = randomWord.correctAns
          var questionsImg = $("<img class='img-fluid'>")
          questionsImg.attr("src", randomWord.img)
          console.log(questionsImg)
          $("#imgDisplay2").append(questionsImg)
        incorrect++
        $(".questionpage1").toggle(false);
        $(".questionpage1false").toggle(true);
        stop()
        setTimeout(sevenSeconds1, 7000);
      }
    })
  }


function sevenSeconds1() {
  $(".questionpage1false").toggle(false);
  $(".questionpage1true").toggle(false);
}
//**************


function resetGame() {
  superbeginning();
  }

function newPage() {
  questions.splice(randomWord, 1)
  if (questions.length > 0) {
    randomWord = questions[Math.floor(Math.random() * questions.length)]
  } else {
    conclusionpage()
  }
}

function conclusionpage() {
              $("#correct").text(correct)
              $("#incorrect").text(incorrect)
              //need to start timer, get timeout setup
              $("#end").off().on("click", function() {
                  conclusion = true
                  console.log('conclusion',conclusion)
                  if (conclusion === true) {
                    //new window display time Remaining
                    //text that says 'Incorrect'
                    //tell the correct answer was: 'X'
                    $(".conclusionpage6").toggle(false);
                    $(".start").toggle(true);
                    begin = false
                    resetGame();
                  }
              })
            }

superbeginning();

})
