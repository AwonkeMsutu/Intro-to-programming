var myCrazyObject = {
  "name": "A ridiculous object",
  "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Banana Shark"
}

myCrazyObject["some array"][2].number

// 1. Access the property with a space using bracket notation
myCrazyObject["some array"] 

// 2. Target the third item in the array (index 2)
// Index 0 is 7, Index 1 is 9, Index 2 is the object
[2] 

// 3. Use dot notation to grab the value of the 'number' key
.number 

// The result: 123
