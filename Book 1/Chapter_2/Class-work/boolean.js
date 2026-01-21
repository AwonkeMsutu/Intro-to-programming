let age = 20;
let hasID = true;

// Check if both conditions are true
if (age >= 18 && hasID) {
    console.log("Allowed to enter."); // Output: Allowed to enter.
} else {
    console.log("Not allowed.");
}
VM347:6 Allowed to enter.

let isVerified = true;
let isAdmin = false;
let isModerator = true;

// Check if the user is (verified AND admin) OR is a moderator
let hasSpecialAccess = (isVerified && isAdmin) || isModerator;

console.log(hasSpecialAccess);
VM351:8 true