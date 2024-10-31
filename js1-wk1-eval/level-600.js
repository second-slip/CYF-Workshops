
// Go to https://www.datecalculator.org/day-of-the-year

// Declare a variable dayNumberOfTheYear with the value from this website
const dayNumberOfTheYear = 300;

const year = 2024;
const numberOfDays = new Date(year, 1, 29).getDate() === 29 ? 366 : 365;
// console.log(numberOfDays);

// Declare a new variable daysLeftInTheYear by forming an expression with dayNumberOfTheYear
const daysLeftInTheYear = numberOfDays - dayNumberOfTheYear;

// Use console.log to check your answer
console.log(daysLeftInTheYear);