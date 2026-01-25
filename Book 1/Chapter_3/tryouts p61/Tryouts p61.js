// 1. Define the arrays of words
var randombodyparts = ["Arms","Feet","Head","Bodyshape","Legs"];
var randomadjectives = ["Smelly","Hideous","Weird","Horrible","Fat"];
var randomword = ["Gorilla","Hyena","vulture","Homeless Dog","Stray Cat"];

// 2. Select a random item from each array
// Multiplying by 5 gives a range from 0 to 4.99, which Math.floor rounds to 0-4.
// This matches your array indices perfectly.
var randombodyparts = randombodyparts[Math.floor(Math.random()*5)];
var randomadjectives = randomadjectives[Math.floor(Math.random()*5)];
var randomword = randomword[Math.floor(Math.random()*5)];

// 3. Combine the strings
// Note: I added a space after "is like a " so it doesn't print "is like aSmelly"
var randomInsult = "Your " + randombodyparts + " is like a " + randomadjectives + " " + randomword;

// 4. Output the masterpiece
console.log(randomInsult);
