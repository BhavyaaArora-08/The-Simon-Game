var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["green", "red", "blue", "yellow"];
var round = 1;
var i = 0;

$(document).keypress(function() {
  $("h1").text("Level " + round);
  randomNumber();
});

function randomNumber() {
  var rad = Math.floor(Math.random() * (4));
  var randomChosenColour = buttonColours[rad];
  gamePattern.push(randomChosenColour);
  var text = "#" + randomChosenColour;
  $(text).fadeIn(100).fadeOut(100).fadeIn(100);
  $("audio")[rad].play();
}

$("button").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  if (userClickedPattern[i].localeCompare(gamePattern[i]) == 0) {
    var text = userClickedPattern[i];
    var k = 0;
    if (text == "green")
      k = 0;
    if (text == "red")
      k = 1;
    if (text == "blue")
      k = 2;
    if (text == "yellow")
      k = 3;

    $("audio")[k].play();
    i++;
  } else {
    gameOver();
  }

  if (userClickedPattern.length == gamePattern.length) {
    userClickedPattern = [];
    round++;
    $("h1").text("Level " + round);
    sleep(600);
    randomNumber();
    i = 0;
  }
});

function gameOver() {
  $("audio")[4].play();
  userClickedPattern = [];
  gamePattern = [];
  i=0;
  round = 1;
  $("h1").text("Level " + round);
  sleep(600);
  randomNumber();
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
