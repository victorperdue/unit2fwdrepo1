// Declare variables
let firstName = "John";
let lastName = "Doe";
let age = 25;
let city = "ExampleCity";

// String interpolation to print greeting message
console.log(`Hello! My name is ${firstName} ${lastName}! I'm ${age} years old, and I'm from ${city}. It's nice to meet you!`);

// Declare variable for initials
let initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
console.log(`Initials: ${initials}`);

// Declare variable for name length
let nameLength = firstName.length;
console.log(`Name length: ${nameLength}`);

// Bonus: Convert name to all caps and all lowercase
console.log(`Name in all caps: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);
console.log(`Name in all lowercase: ${firstName.toLowerCase()} ${lastName.toLowerCase()}`);

// Reusable function for greeting
function sayGreeting(firstName, lastName, age, city) {
  // Check if city is provided
  if (city) {
    return `Hello! My name is ${firstName} ${lastName}. I'm ${age} years old, and I'm from ${city}. It's nice to meet you!`;
  } else {
    return `Hello! My name is ${firstName} ${lastName}. I'm ${age} years old. It's nice to meet you!`;
  }
}

// Call the function without passing in the city argument
console.log(sayGreeting(firstName, lastName, age));