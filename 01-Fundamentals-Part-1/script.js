/*
let js = 'amazing';

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob); 


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);
console.log(typeof null);


let age = 30;
age = 31; // we mutated the variable

const birthYear = 1991;
// birthYear = 1990; 

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas *2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = 'Schmedtmann';
console.log(firstName + " " +lastName);

// Assignment operators
let x = 10 + 5; // 15
x+=10;  // add to x 10  and save it to x, x = x + 10
x*=4; // x = x * 4;
x++; // x = x + 1
x--; // x = x -1 
x--; 
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2019);

let  x, y;
x = y = 25-10-5; // x = y = 10, x = 10 
console.log(x,y);

const averageAge = (ageJonas + ageSarah)/2;

console.log(ageJonas, ageSarah, averageAge);


//Coding Challenge #1

//Test Data 1: 
// const marksMass = 78;
// const marksHeight = 1.69;
// const johnsMass = 92;
// const johnsHeight = 1.95;

//Test Data 2:
const marksMass = 95;
const marksHeight = 1.88;
const johnsMass = 85;
const johnsHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / (johnsHeight *johnsHeight);

const markHigherBMI = marksBMI > johnsBMI;

console.log(marksBMI, johnsBMI, markHigherBMI );


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if(age >= 18){
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

const  birthYear = 2012;

let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);


//Coding Challenge 2

//Test Data 1: 
const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

//Test Data 2:
// const marksMass = 95;
// const marksHeight = 1.88;
// const johnsMass = 85;
// const johnsHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / (johnsHeight *johnsHeight);

if(marksBMI > johnsBMI){
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!");
}


if(marksBMI > johnsBMI){
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN
// all these values will become false when we try to convert these to bolean values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;

if(money){
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height=0;

if(height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


const age = '18'; // asignment
if(age === 18) console.log('You just become an adult:D(scrict)');  // comparision (strict equality operation)

// == loose equality operator

if(age == 18) console.log('You just become an adult:D(loose)'); 

const favourite = Number(prompt("What's your favourite number"));

console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log('Cool! 23 is an amazing number');
} else if(favourite === 7) {
    console.log(`7 is also a cool number`);
} 
else if(favourite === 9) {
    console.log(`9 is also a cool number`);
}else {
    console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense );

// if(shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Somenone else should drive');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // 

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Somenone else should drive');
}


// Coding Challenge 3

// Test Data: 

// // Dolphins Scores: 
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// // Koalas Scores:
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// Test Data 1:

// Dolphins Scores: 
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

// // Koalas Scores:
// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

// Test Data 2:

// Dolphins Scores: 
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

// Koalas Scores:
const koalasScore1 = 97;
const koalasScore2 = 112;
const koalasScore3 = 101;


// Averages and Testing
const averageDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3;
const averageKoalas = (koalasScore1 + koalasScore2 + koalasScore3)/3;
const minimumScore = 100;

console.log(`Dolphins: ${averageDolphins},
Koalas: ${averageKoalas}`);

if ((averageDolphins > averageKoalas) && (averageDolphins >= minimumScore)) {
    console.log('Dolphins are the winners!');
} else if ((averageKoalas > averageDolphins) && (averageKoalas >= minimumScore)) {
    console.log('Koalas are the winners!');
} else if ((averageDolphins === averageKoalas) && (averageDolphins >= minimumScore) 
&& (averageKoalas >= minimumScore)) {
    console.log('The game is a draw!');
} else if (averageKoalas < minimumScore && averageDolphins < minimumScore) {
    console.log('None is winner');
}

const day = 'monday';

switch(day)
{
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos')
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!'); 
}

if(day === "monday") {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}
else if (day === 'tuesday')
{
    console.log('Prepare theory videos');

}
else if (day === 'wednesday' || day === "thursday")
{
    console.log('Write code examples');

}
else if (day === 'friday')
{
    console.log('Record videos')

}
else if (day === 'sunday' || day === 'saturday')
{
    console.log('Enjoy the weekend :D');
}
else 
  console.log('Not a valid day!'); 


  const age = 23;

//   age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

  const drink = age >=18 ? 'wine 🍷' : 'water 💧';
  console.log(drink);

  let drink2;
  if(age >= 18) {
      drink2 = 'wine 🍷';
  } else {
    drink2 = 'water 💧';
  }

  console.log(drink2);

  console.log(`I like to drink ${age>=18 ? 'wine 🍷' : 'water 💧'}`)
  


const bill = 430;
const tip = (bill >=50 && bill <= 300) ? 0.15 * bill : .20 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/



  
