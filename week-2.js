/*global vonfirm, console, prompt*/
/*// prompt()

var name = prompt("Please enter your name.");
console.log("Hello " + name);*/

/*//confirm()

var deleted = confirm("Do you really want to delete this file?");
console.log("deleted = " + deleted);*/

// CONDITIONALS

// example:
/*var today = prompt("Enter a day. ");
var temperature = -20;

if ((today === "Saturday") && (temperature > -15)) {
   console.log("I will go skiing!");
} else if((today === "Saturday") && (temperature < -15)) {
    console.log("I will go hiking!");
} else {
    console.log("I will watch a movie!");
}*/

// Typical example in programming:
/*var a;

console.log("!a = " + !a); // true

// assign variables with value:
if (!a) {
    a = prompt("Assign value to variable a!");
    
}

console.log("!a = " + !a); // false*/

// switch ()

// example:
/*var product = prompt("Please enter a fruit.");

switch (product) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + product + ".");
}*/

//  TASK 1 - head-start

/*Declare three variables, a and b and c.

If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):*/

var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n-------\n\n" + 
     " a + b = " + (a + b) + "\n" + 
     " a - b = " + (a - b) + "\n" +
     " a * b = " + (a * b) + "\n" +
     " a / b = " + (a / b) + "\n" +
     " a % b = " + (a % b) + "\n" +
     " a += b = " + (a += 1) + "\n" +
     " a -= b = " + (a -= b) + "\n" +  
     " a *= b = " + (a *= b) + "\n" +   
     " a /= b = " + (a /= b) + "\n" +
     " a %= b = " + (a %= b) + "\n" + 
     " a == b = " + (a == b) + "\n" +  
     " a != b = " + (a != b) + "\n" +
     " a > b = " + (a > b) + "\n" +  
     " a < b = " + (a < b) + "\n" +
     " !a && !c = " + (!a && !c) + "\n" +
     " !a || !c = " + (!a || !c) + "\n");

// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
b / a
b % a
a += 1
a -= 1
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

// TASK 2
var first_name = "Kwesi";
var last_name = "Otoo";
var email = "otoo0013@algonquinlive.com";
var output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + " . ";
alert(output);

 

// TASK 3   
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

/*console.log(numbers[0]); // first array element
console.log(numbers[4]); // last array element*/

console.log(numbers[0]  + " + " + numbers[4] + " = " + (numbers[0] + numbers[4]));


var sum = numbers[0] + numbers[4];
if(sum % 2 == 0) {
    alert("This is an even number.");
} else {
    alert("This is an odd number.");
}


/*// check if number is even or odd?
5 % 2 = 1 // means a number is odd
6 % 2 = 0 // means a number is even*/


// ARRAYS

/*
var test_array = [
    "first",
    "second",
    "third"
];

console.log(test_array)

// push() method of array:
test_array.push("fourth", "fifth");

console.log(test_array);

//splice() method of array:
test_array.splice(5, 0, "sixth", "seventh");
console.log(test_array);

// ASSOCIATIVE ARRAYS

var computer = {
    "processor": "i7",
    "HD": "1TB",
    "RAM": "16GB"
    
};

// Array syntax to access an array element
console.log(computer["processor"]);

// Dot notation for accessing array element:
console.log(computer.processor);
*/
