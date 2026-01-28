var Alphabet = "abcdefghijklmnopqrstuvwxyz"
Math.floor(Math.random() * Alphabet.length);
var randomstring = ("") 
while(randomstring.length < 6)
{
    var randomIndex = Math.floor(Math.random() * Alphabet.length)

    // Get the random letter at that index
    var randomLetter = Alphabet[randomIndex];

    // Add the letter to the end of the string
    randomstring += randomLetter;
}
console.log(randomstring);
