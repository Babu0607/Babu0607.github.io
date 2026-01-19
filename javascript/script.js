console.log("Hello from external JavaScript file.");

// Declaring variables and then assigning values to them
let userName; // Declare a variable
userName = "Sheila Murphy"; // Assign value to the variable
console.log(userName); // Outputs: Sheila Murphy

let userCountry; // Declare a variable
userCountry = "Ireland"; // Assign value to the variable
console.log(userCountry); // Outputs: Ireland

// Setting a null value
let testScore = null; // Assign null without quotes. Not "null" (a string).


// Mixing literals and variables
const customerFirstName = "Marie";
const accBalance = 10;
		
// Using template literals
console.log(`Hello ${customerFirstName}. Your current balance £${accBalance}`); 
// Outputs: Hi Marie. Your balance is €10.


// Checking the data type of a variable
let someVar = ""; // declare empty variable 

someVar = "12"; // assign string to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: string 

someVar = 12;  // assign number to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: number 

someVar = "12"; // assign string to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: string - again!

someVar = true; // assign boolean to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: boolean

someVar = null; // assign null to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: object (an error in JavaScript)

someVar = 24; // assign number to variable
console.log(`Data type of someVar: ${typeof someVar}`); // Outputs: number - again!