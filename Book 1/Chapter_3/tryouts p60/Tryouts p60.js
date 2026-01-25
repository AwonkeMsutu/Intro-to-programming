// 1. Create an array of 4 strings (indices 0, 1, 2, and 3)
var randomWords = ["Optics", "Shelflife", "Papercut", "Tropical"];

// 2. Break down the random logic:
// - randomWords.length is 4
// - Math.random() * 4 gives a number between 0 and 3.99
// - Math.floor() rounds it down to 0, 1, 2, or 3
// - randomWords[...] grabs the word at that index
// 3. This line replaces the entire array with the single chosen word
randomWords = randomWords[Math.floor(Math.random() * randomWords.length)];

// Now, if you log it, you get one word instead of the list
console.log(randomWords);