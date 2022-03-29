'use strict';

/*let hasDriversLiscense = false;
const passTest = true;

if(passTest) hasDriversLiscense = true;
if(hasDriversLiscense) console.log('I can drive :D');

// const interface = 'Audio';
//const private = 543;
const if = 23; 


function logger() {
    console.log('My name is Jonah');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

// the main difference is that we can call a function before it is defined (function declaration) this is because of hoisting process
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1); // this is function declaration

const calcAge2 = function (birthYear) { // this is a function expression
    return 2037 - birthYear;            // expression produces value                                    
}                                       // calcAge2 will hold this functions value
const age2 = calcAge2(1991);
console.log(age2);


// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037-birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples); // it returns 4 * apples
    const orangePieces = cutFruitPieces(oranges); // it returns 4 * orange

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));


const calcAge = function(birthYear) {
    return 2037 - birthYear;
}    


const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return  retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonah'));
console.log(yearsUntilRetirement(1950, 'Mike'));


// Coding Challenge #1

const calcAverage = (score1,score2,score3) => (score1 + score2 +score3)/3;

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas=calcAverage(23, 34, 27);

function checkWinners(avg1,name1, avg2, name2) {

    if(avg1 >= (2 * avg2))
        console.log(`${name1} win (${avg1} vs. ${avg2})`);
    else if (avg2>= (2 * avg1))
        console.log(`${name2} win (${avg2} vs. ${avg1})`);
    else console.log('No team wins!');    
}

const scoreData = checkWinners(avgDolphins,'Dolphins', avgKoalas, 'Koalas');


// Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';

console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

function calcAge(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [ calcAge(years[0]),calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);


// Basic Array Me

// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements

friends.pop(); // Last
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')) {
    console.log('You have a friend called Peter');
}



// Coding Challenge #2



const bill = 100;
const calcTip = function(num) {
    if(num >= 50 && num <= 300)
    return num * 0.15;
    else return num * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);




// Objects

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steve']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steve']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']); // we can put any expression we like

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName,
lastName, age, job, and friends`);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName,lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedttman';
console.log(jonas);

// Challenge
//" Jonas has 3 friends, and his best friend is
// called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steve'],
    hasDriversLiscense: true,
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear; }
    
    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLiscense ? 'a' : 'no'} driver's liscense.`;
    }

   
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46 old year teacher, and he has a driver's licese."

console.log(jonas.getSummary());
jonas.friends.push("Latika");
console.log(jonas.friends);



// Coding challenge #3

const marks = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 79,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
}
const johns = {
    firstName: 'John ',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
}
// first method
// console.log(`${marks.bmi > johns.bmi ? marks.firstName + "'s BMI ("+ marks.calcBMI() + ') is higher than ' + johns.firstName 
// + "'s (" + johns.calcBMI()+ ').' :  johns.firstName + "'s BMI ("+ johns.calcBMI() + ') is higher than ' + marks.firstName 
// + "'s (" + marks.calcBMI()+ ').'}`);


// second method
marks.calcBMI();
johns.calcBMI();
console.log(marks.bmi, johns.bmi);


console.log(`${marks.bmi > johns.bmi ? marks.firstName + "'s BMI ("+ marks.bmi + ') is higher than ' + johns.firstName 
+ "'s (" + johns.bmi+ ').' :  johns.firstName + "'s BMI ("+ johns.bmi + ') is higher than ' + marks.firstName 
+ "'s (" + marks.bmi+ ').'}`);



const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steve'],
    true
];

const types = [];

for(let i = 0; i < jonas.length ; i++)
{
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i=0; i < years.length; i++)
{
    // ages[i] = 2037 - years[i];
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break

console.log('----ONLY STRINGS----');
for(let i = 0; i < jonas.length ; i++)
{
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('----BREAK WITH NUMBER----');
for(let i = 0; i < jonas.length ; i++)
{
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steve'],
    true
];

for(let i = jonas.length - 1; i >= 0; i--)
{
    console.log(i, jonas[i]);
}

for(let exercise = 1; exercise <= 3; exercise++)
{
   console.log(`----------Starting exercise ${exercise}`); 
   for(let rep=1; rep <= 5; rep++)
   {
       console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
   }
}


// While Loop

// for(let rep = 1; rep <=10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repeptition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loop is about to end...`);
}


// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(num) {
    if(num >= 50 && num <= 300)
    return num * 0.15;
    else return num * 0.20;
}

for(let i=0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    console.log('tips: ' + tips[i] + '  bills: ' + bills[i]);

    totals.push(tips[i]+bills[i])
    console.log(totals[i]);
}

const calcAverage = function(arr) {

    let i = 0;
    let sum =0;

    for(i ; i < arr.length; i++)
    {
        sum += arr[i];
    }

    return (sum / arr.length);

}

const totalsAverage = calcAverage(totals);
console.log(`Average of array totals: ${totalsAverage}`);


*/