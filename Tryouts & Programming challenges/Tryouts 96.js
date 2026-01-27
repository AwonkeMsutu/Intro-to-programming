// 1. We define our main name variable (the "owner" of the computer)
var Name = "Tom";

// 2. We define the name we want to check or "test"
var nameCheck = "Awonke";

// 3. We use === to see if the two variables match exactly
if (Name === nameCheck) {
    // This runs only if Name and nameCheck are identical
    console.log("Hello me!");
} 
else {
    // This runs if the names are different (like they are now)
    console.log("Hello stranger!");
}

// 1. Define the variables for the family members
var Dad = "Jack";
var Mom = "Tracy";

// 2. Define the variable we are currently testing
var nameChecker = "Tracy";

// 3. First, check if the name matches Dad
if (Dad === nameChecker) {
    // This runs if nameChecker is "Jack"
    console.log("Hello dad!");
} 
// 4. If not Dad, check if the name matches Mom
else if (Mom === nameChecker) {
    // This runs if nameChecker is "Tracy" (which it is right now)
    console.log("Hello mom!");
} 
// 5. If it matches neither, say hello to a stranger
else {
    // This runs if nameChecker is anything else
    console.log("Hello stranger!");
}