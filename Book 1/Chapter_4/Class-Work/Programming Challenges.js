// Initialize the Scores object with four players starting at zero
const Scores = {
    Sam: 0,
    Michael: 0,
    Jay: 0,
    Donald: 0,
};

// A boolean flag to track if a scoring event occurred
var pointEarned = true;

// A conditional check: if pointEarned is true, execute the code inside the braces
if (pointEarned) {
    // Add 3 to Sam's current score using the addition assignment operator
    Scores.Sam += 3;
}

// Display Sam's updated score in the console
console.log(Scores.Sam);