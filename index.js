/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console*/

// solution

// console.log(country, continent, population);

// 2
/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console*/

// // solution

// let isIsland = [country, true];
// let language;

// console.log(isIsland, population, country, language);

/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

// const language = "English";

// console.log(isIsland, population, country, language);
/*
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese
*/
// let cnSlpit = population / 2;

// console.log(cnSlpit);

// if (cnSlpit) {
//   console.log(`in Ech halve we have ${cnSlpit} livng in it`);
//   cnSlpit++;
// }
// console.log(cnSlpit);
// const finland = 6000000;

// if (finland < population) {
//   console.log(`${country} has more population   than finland`);
// }

// if (33 <= population) {
//   console.log(`${country} has more than Avrage`);
// }

// const description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";

/*
  LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax
*/
// const description = ` Portugal is in Europe, and its 11 million people speak portuguese`;

/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to origina
*/

// if (population > 33000000) {
//   console.log(`Portugal's population is above average.`);
// } else {
//   console.log(
//     `Portugal's population is 22 million below average ${33000000 - population}`
//   );
// }

/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right
*/
// console.log(4);
// console.log("19" - "13" + "17");
// console.log("617");
// console.log(23);
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(false);
// console.log(117);
// console.log(5 + 6 + "4" + 9 - 4 - 2);
// console.log(1143);
// console.log("9" - "5");

/*
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation
*/

//Solution

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );
// console.log(numNeighbours);

// if (+numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D)
*/

// solution
// const country = "Nigeria";
// let isIsland = [country, false];
// const name = "Sarah";

// const language = "English";
// let population = 200000000;
// if (language === "English" && population > 50000000 && isIsland[1] === false) {
//   console.log(`${name} You should live in  ${country}`);
// } else {
//   console.log(`${country} does not meet your criteria`);
// }

/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

// const language = "aEnglish";
// switch (language) {
//   case "chinese":
//     console.log("MOST number of native speakers!");
//     break;
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

/*
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to origina
*/

// let countryPopulation = 200000000000;

// countryPopulation > 33000000
//   ? console.log("Portugal's population is above average. ")
//   : console.log("Portugal's population is below average");

// /////////////////JavaScript Fundamentals – Part

/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console
*/

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// };

// const nigeria = describeCountry("Nigeria", 200000000, "Abuja");
// const ghana = describeCountry("Ghana", 13000000, "Accra");
// const sa = describeCountry("Sa", 13000000, "kep");

// console.log(`${nigeria}\n${ghana}\n${sa}`);

/*LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations
*/

function percentageOfWorld1(population) {
  return population;
}
// const worldP = 7900000000;
// const china = percentageOfWorld1((1441000000 / worldP) * 100);
// const ghana = percentageOfWorld1((32830000 / worldP) * 100);
// const Nigeria = percentageOfWorld1((213400000 / worldP) * 100);

// const percentageOfWorld2 = function (population) {
//   return population;
// };

// const worldP = 7900000000;
// const china = percentageOfWorld2((1441000000 / worldP) * 100);
// const ghana = percentageOfWorld2((32830000 / worldP) * 100);
// const Nigeria = percentageOfWorld2((213400000 / worldP) * 100);

// console.log(Nigeria, ghana, china);

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3

// const percentageOfWorld3 = (population) => {
//   return population;
// };

// const worldP = 7900000000;
// const china = percentageOfWorld3((1441000000 / worldP) * 100);
// const ghana = percentageOfWorld3((32830000 / worldP) * 100);
// const Nigeria = percentageOfWorld3((213400000 / worldP) * 100);

// console.log(Nigeria, ghana, china);

/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choic
*/
const worldP = 7900000000;
const describePopulation = (country, population) => {
  return `${country} has ${population} million people, 
which is about ${(population / worldP) * 100}% of the world.`;
};

const china = describePopulation("China", 1441000000);
const ghana = describePopulation("Ghana", 32000000);
const Nigeria = describePopulation("Nigeria", 2300000);

console.log(Nigeria);
console.log(ghana);
console.log(china);

/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values
*/
