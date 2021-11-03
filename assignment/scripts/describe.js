// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// In line 36, we are declaring 'Dane' as the string associated with the variable named name.
// Line 38 is a strict comparison, meaning the type and value must match for the condition to be true.  The type (string) matches, but the value (Mary and Dane) do not match.
// Since the condition in line 38 is not true, we will not console log 'Hi, Mary!' and instead move on to the else statement.
// Given the else, or alternative to the first condition, we will console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Line 56 declares a variable called secret without assigning a value, and line 58 declares a variable with the name code whose value is the number 123.
// Since the type and value of the code variable in line 60's condition matches what was defined on line 58, the value of the variable secret becomes 'super' and we multiply the code variable (value 123) by two.
// Following the multiplication, the numerical value of code is 246, which is less than 250 in the condition on line 65.
// The variable secret would become 'duper' if the value for code were greater than 250, but in this case it's not.
// The secret variable keeps the string 'super' and is console logged.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We are declaring the variable isStudent with a boolean of true (line 82), the variable age with the number 35 (line 83), and the variable zip with the number 55407 (line 84).
// We start the compound conditional by checking if the type/value of isStudent is true, which it is, and if the zip is greater than 80000, which it isn't. Both of those conditions would have had to be true (conjunction) for the console log on the subsequent line to run.
// Since both conditions were not met, we move on to the else if, which is a disjunction on line 88.  This statement is valid if either condition is true.  Both are false, so we move to the next else if.
// Since the type and value of isStudent matches the condition (true) in line 90, and none of the preceding conditions were true, the following console log of 'Welcome to Prime!' is what gets written.
// If none of the conditions were true, then the else (line 92) would have taken precedent and 'How about the weather?' would have been console logged.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

//FIX - The color strings 'red' and 'blue' are flipped with regard to variables colorOne and colorTwo per the description.
// The description calls for setting colorOne AND colorTwo to purple when the mix condition is true, but this code only changes colorOne.
// To also change colorTwo, line 143 should  read "colorOne = 'purple', colorTwo = 'purple';"
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

//FIX - The time variable is set to a constant, meaning it cannot be reassigned or re-declared. It doesn't come into play here but if we wanted time to be able to change, we would replace const with let.  In this case, keeping it const does not affect the outcome given the directions.
// The two checks are correct, but the contradictory word between the directions and the code is "and."  The || designates "or," so for both checks to be verified, we'd change the || to &&.
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

//FIX - This comparison is set up wrong, and there are two ways to correct it.  The first would be to make the if condition be (minAge > age). Then you would need an else if instead of just else that read (age >= minAge).
// The second way to correct it would be to change the if condition to (age >= minAge) and the subsequent console log to 'enter'.  The console log corresponding to the else would change to 'no entry'.
// If we take the directions most literally, then we can drop the else.  The if condition would be (age >= minAge) and the console log that follows would state 'enter'.
// This logs enter if age is greater than or equal than minAge and logs nothing if that condition is not met.
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
