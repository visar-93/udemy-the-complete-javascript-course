'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     //ES5
//     // numPassengers = numPassengers || 1;\
//     // price = price || 1999;

//     const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH132', 2);
// createBooking('LH132', 5);

// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 2313254364556,
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr.' + passenger.name;

//     if(passenger.passport === 2313254364556) {
//         alert('Checked In');
//     } else {
//         alert('Wrong passport!');
//     }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// const newPassport = function(person)
// {
//     person.passport = Math.trunc(Math.random()* 10000000000000);
// };

// newPassport(jonas);
// checkIn(flight,jonas);

// // takes a string and replaces all the spaces
// const oneWord = function(str) {
//     return str.replaceAll(' ', '').toLowerCase();
//     // return str.replaceA(/ /g, '').toLowerCase();
// };

// // takes a string, and makes the first word with upperCase letters
// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function() {
//     console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// };
// // Arrow Functions
// const greets = (greeting) => {
//     return (name)=> {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// const gretman = greets('Bye');
// gretman('Selim');

// greetArr('Goodevening')('Daut');

// const greeter = greet('Hey');
// greeter('Jonas');
// greeter('Steve');

// const calculation = function(operation) {
//     return function(a,b) {
//         if(operation === '+')
//         return a+b;
//         else if (operation === '-')
//         return a-b;
//         else if (operation === '*')
//         return a*b;
//         else if (operation === '/')
//         return a/b;
//     };
// };

// const add = calculation('+');
// const sub = calculation('-');
// const mul = calculation('*');
// const div = calculation('/');
// console.log(add(6,2));
// console.log(sub(6,2));
// console.log(mul(6,2));
// console.log(div(6,2));

// console.log(calculation('+')(5,2));

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // function
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;

// Does NOT work
// book[23, 'Sarah Williams'];

// Call Method

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: []
// };

// book.call(swiss, 583, 'Marry Cooper');
// console.log(swiss);

// Appy Method - doesn't receive a list of arguments, instead receives an array of arguments

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind method
// // it returns a new function where this function is bounded

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23,'Steven Williams');

// // create function for a specific flight 
// // Partial application - a part of argument of the original function is already applied

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);
    
//     this.planes++;
//     console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Aplication - Pre-set parameters

// const addTax = (rate, value)=> value+value*rate;
// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null,0.23);
// console.log(addVAT(200));

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value*rate;
//     };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// Coding Challenge #1

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
    
//     registerNewAnswer() {
//         const ans = Number(prompt(`${this.question}\n${this.options.join('\n')}`));
        
//         // typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++
//         if(ans != ' ' && typeof ans === 'number' && ans>= 0 && ans <= this.options.length )
//         {
//             this.answers[ans]++;
//         }
//         else if(ans == ' ' || ans > this.options.length || ans == 'string'){
//             alert('Invalid answer');
//         };  
//         this.displayResults();
//         this.displayResults('string');
//     },

//     // displayResults(type) {
//     //     if (typeof type === "string") {
//     //         console.log(`Poll results are: ${type.replace(' ', ', ').split(',')}` );
//     //     } else if(Array.isArray(type)) {
//     //       console.log(...type);
//     //   } 
//     // },   (code of mine)
//     displayResults(type = 'array') {
//         if(type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             // Poll results are 13, 2, 4, 1
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     }
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5,2,3]}, 'string');
// poll.displayResults.call({answers: [1, 5, 3 ,9 ,6, 1]}, 'string');

// Immediately invoked Function Expressions (IIFE)
// const runOnce = function() {
//     console.log('This will never run again');
// };
// runOnce();

// // Immediately Invoce Function Expression
// (function() {
//     console.log('This will never work again');
// })();

// (()=>console.log('This will never work again'))();




/////////////////////////////////////////////////////////////////////////////////////
// Closures

// A closure is the closed-over variable environment of the execiton context in which
// a function was created, even after that execution context is gone;

// A closure gives a function access to all variables of its parent function, even after
// that parent function has returned. The function keeps a reference to its outer scope, 
// which preserves the scope chain throughout time.

// A closure makes sure that a function doesn't loose connection to variables that existed
// at the function's birth place.

// A closure is like a backpack that a function carries around wherever it goes. This backpack
// has all variables that were present in the environment where the function was created.

// const secureBooking = function() {
//     let passengerCount = 0;

//     return function() {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// Example 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    };
};

const h = function() {
    const b =777;
    f = function() {
        console.log(b * 2);
    };
};

g();
f();

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;
    
    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue';
    });
})();