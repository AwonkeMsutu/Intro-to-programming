// 1. We create an array (a list) of animal strings
var Animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// 2. We start a 'for' loop:
//    - 'i = 0': start at the first item (index 0)
//    - 'i < 4': keep going as long as i is less than the number of items
//    - 'i++': add 1 to i after every loop
for(var i = 0; i < 4; i++)
{
    // 3. This prints the word "Awesome " followed by the animal at the current position [i]
    //    It doesn't change the list, it just "shouts" the result into the console.
    Animals[i] = "Awesome " + Animals[i]
    
}
console.log(Animals);
//How to ensure that values are reassigned to original array in order to modify and not just print "Awesome"??


