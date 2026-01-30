// 1. Return a random word from an array
var pickWord = function () {
  var words = ["javascript", "monkey", "amazing", "pancake", "dumbbell", "shoulder"];
  return words[Math.floor(Math.random() * words.length)];
};

// 2. Return the answer array with underscores
var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};

// 3. Use alert to show the player their progress
var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(" "));
};

// 4. Use prompt to get a guess from the player
var getGuess = function () {
  return prompt("Guess a letter, or click Cancel to stop playing.");
};

// 5. Update answerArray and return how many times the guess appears in the word
var updateGameState = function (guess, word, answerArray) {
  var appearances = 0;
  for (var j = 0; j < word.length; j++) {
    // Convert both to lowercase to make it easier to play
    if (word[j] === guess.toLowerCase()) {
      if (answerArray[j] === "_") {
        answerArray[j] = guess.toLowerCase();
        appearances++;
      }
    }
  }
  return appearances;
};

// 6. Use alert to show the answer and congratulate the player
var showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert("Good job! The answer was " + answerArray.join(""));
};