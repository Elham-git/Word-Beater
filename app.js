window.addEventListener("load", init);

// Globals

let time = 5;
let score = 0;
let isPlaying;

// Available Levels
const Levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

// to change level
const currenLevel = Levels.easy;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "spAce",
  "mOOn",
  "starwalk",
  "defInItIon",
  "flabberGasted",
  "staTue",
  "geNeRate",
  "cocktail",
  "runaway",
  "developer",
  "establishment",
  "goflemingo",
  "nincompoop",
  "JavaScript",
  "hondurous",
  "haT",
  "lucKy",
  "river",
  "stubborn",
  "SiBlings",
  "hero",
  "Nutrition",
  "RevolVer",
];

function init() {
  // show number of seconds in UI
  document.querySelector("#seconds").innerHTML = currenLevel;

  // showIntervals
  showWord(words);

  //Start matching on word input
  document.querySelector("#word-input").addEventListener("input", startMatch);

  //set a countdown function for
  setInterval(countDown, 1000);

  // function to check word
  setInterval(checkStatus, 50);
}

function showWord(words) {
  let randIndex = Math.floor(Math.random() * words.length);
  document.querySelector("#current-word").innerHTML = words[randIndex];
}

function countDown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  document.querySelector("#time").innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    document.querySelector(".message").innerHTML = "GameOver!!";
    score = -1;
  }
}

// start Match function

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currenLevel + 1;

    showWord(words);
    document.querySelector("#word-input").value = "";
    score++;
  }

  // if score is -1 display 0
  if (score === -1) {
    document.querySelector("#score").innerHTML = 0;
  } else {
    document.querySelector("#score").innerHTML = score;
  }
}

function matchWords() {
  if (
    document.querySelector("#word-input").value ===
    document.querySelector("#current-word").innerHTML
  ) {
    document.querySelector(".message").innerHTML = "Correct!!";
    return true;
  } else {
    document.querySelector(".message").innerHTML = "";
    return false;
  }
}
