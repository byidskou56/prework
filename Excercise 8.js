//This is Excercise 8 of 16 PreWork BYI 16Aug23 01:03 EST
const patientName = "Evelyn Park";
let apptTime = "2:30pm";
let apptDay = "Thursday";

let reminderMessage = `Hi ${patientName}! This is a reminder that you have an appointment at ${apptTime} on ${apptDay}. See you then!`;

console.log(reminderMessage);

let firstName = "Brandon"
let lastName = "Idskou"
let fullNameConcat = firstName + lastName
let fullNameInterp = firstName + " " + lastName
//don't change the following line, checks to see that concatenation and interpolation gave results
console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = "33"
let faveFood = "Pasta"
let faveColor = "Jade"
let miniBio = `Hello! I'm ${fullNameInterp}, I am currently ${myAge} and I Love to eat ${faveFood}. One final fun fact is my favorite color is ${faveColor}`
console.log("Your mini bio is:");
console.log(miniBio)