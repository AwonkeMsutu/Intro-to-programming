var good_Grades = true;
var average_Grades = false;
var bad_Grades = false;
var Name = "Jackson";

// This works perfectly because good_Grades is true.
if (good_Grades) {
    // Note: In some consoles, ", + Name" might show "NaN" (Not a Number) 
    // because the "+" is trying to do math on the name.
    console.log("You have passed your test with good grades " + Name);
} 
// These blocks are skipped because the first condition was met.
else if (average_Grades) {
    console.log("You have passed your test with average grades", + Name);
} 
else if (bad_Grades) {
    console.log("You have failed your test", + Name);
}
