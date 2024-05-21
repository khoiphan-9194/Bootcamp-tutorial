// WRITE YOUR CODE HERE
let newArray = ["Sam", "Bob", "John", "Sally", "Jane"];

// checking the length of the arry (the amount of items in the array)
console.log(newArray.length);

// printing the first item in the array
console.log("Welcome to the class " + newArray[0]);
console.log("Welcome to the class " + newArray[1]);
console.log("Welcome to the class " + newArray[2]);
console.log("Welcome to the class " + newArray[3]);
console.log("Welcome to the class " + newArray[4]);

// printing using a for loop
for (var i = 0; i < newArray.length; i++) {
    console.log("Welcome to the class " + newArray[i]);
}

// replace the first name in the array
newArray[0] = "Fred";

// print the edited name
if(newArray[0] === "Fred") {
    console.log("Welcome to the class " + newArray[0]);
}





console.log(Math.floor(Math.random(4) * 5))


console.log("Welcome to the class " + newArray[Math.floor(Math.random() * 5)]);









