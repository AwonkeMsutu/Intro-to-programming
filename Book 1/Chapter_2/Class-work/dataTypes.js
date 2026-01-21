// --- LOGIC & BOOLEANS ---

// Using the (!) Not operator:
var isWeekend = true;
// The '!' flips true to false, or false to true.
// Since isWeekend is true, needToShowerToday becomes false.
var needToShowerToday = !isWeekend; 
needToShowerToday;

// Boolean AND Operator (&&):
var isRaining = true;
var isNotRaining = false;
// Both sides MUST be true for the result to be true. 
// Since one is false, the result is false.
isRaining && isNotRaining;  

// OR Operator (||):
var hasApple = true;
var hasBanana = false;
// Only ONE side needs to be true for the result to be true.
// Since hasApple is true, the result is true.
hasApple || hasBanana;

// --- STRINGS ---

// Joining strings together (Concatenation):
var greeting = "Hello";
var myName = "Nick";
// This combines them into "HelloNick" (Note: no space is added automatically!)
greeting + myName;

// Finding the length of the string:
// Returns the total number of characters, including spaces (Result: 10)
"Helloworld".length;

// Getting a single character (Bracket Notation):
var myName = "Nick";
// JavaScript starts counting at 0. [1] gets the SECOND letter ("i").
myName[1];

// Converting to Upper/Lower Case:
// Changes every letter to CAPITAL LETTERS
"Hello there, how are you doing?".toUpperCase();          
// Changes every letter to small letters
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();

// --- STRING SLICING ---

// Example 1: .slice(start, end)
// Takes characters from index 0 up to (but NOT including) index 4.
// Result: "This"
"This is a long string".slice(0, 4);

// Example 2:
// Starts at index 7 ("W") and stops before index 12 ("!").
// Result: "World"
"Hello, World!".slice(7, 12);

// --- NUMBERS & MATH ---

// Numbers and operators: 
// Follows PEMDAS (Math order of operations: Multiply/Divide before Add/Subtract)
1234 + 57 * 3 - 31 / 4;

// Numbers with Boolean:
var height = 65;
var heightRestriction = 60;
// Checks if 65 is less than 60. Result: false.
height < heightRestriction;  

// --- INCREMENTING & DECREMENTING ---

// Pre-Incrementing: 
var highFives = 0;
// Adds 1 immediately. highFives is now 1.
++highFives;

// Pre-Decrementing:
var highFives = 5;
// Subtracts 1 immediately. highFives is now 4.
--highFives; 

// --- COMPARISONS ---

// Strict Equal to (===):
var mySecretNumber = 5; 
var chicoGuess = 3; 
// Checks if value AND type are the same. Result: false.
mySecretNumber === chicoGuess;      

// Loose Equal to (==):
var stringNumber = "5"; 
var actualNumber = 5;
// This is "loose" equality. It ignores that one is a string and one is a number.
// Result: true (because the values look the same).
stringNumber == actualNumber;