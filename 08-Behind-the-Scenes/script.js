'use strict';

// function calcAge(birthyear) { // defined in a global scope
//     const age = 2037 - birthyear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthyear}`;
//         console.log(output);

//         if(birthyear >= 1981 && birthyear <= 1996) {
//             var millenial = true;
//             // Creating NEW variable with same name as
//             // outer scope's variable
//             const firstName = 'Steven';

//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT';

//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a,b)
//             {
//                 return a + b;
//             }
//         }
//         console.log(millenial);

//         console.log(output);
//     }
//     printAge();

//     return age;
// }

// // const firstName = 'Jonas';
// // calcAge(1991);

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// console.log(addArrow);
// // console.log(addArrow(2,3));


// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;


// // Example
// console.log( numProducts);
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deletet!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x===window.x)
// console.log(y===window.y)
// console.log(z===window.z)


// console.log(this);

// const calcAge = function(birthyear) {
//     console.log(2037 - birthyear);
//     // console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthyear) => {
//     console.log(2037 - birthyear);
//     // console.log(this); // arrow function does not get in on this keyword
// };
// calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     },
// };

// jonas.calcAge();



// const matilda = {
//     year : 2017,
// };

// matilda.calcAge = jonas.calcAge; // method borrowing
// matilda.calcAge();

// const f = jonas.calcAge;


// var firstName = 'Matilda';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);

//         // // Solution 1
//         // const self = this; // self of that 
//         // const isMillenial = function() {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);            
//         // };
//         // Solution 2

//         const isMillenial = () => { // Arrow function inherits this keyword from parent scope
//             console.log(this);      // in this case from calcAge
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//         },
//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);

//     },
//  };
// jonas.greet();
// jonas.calcAge();

// // Arguments keyword
// const addExpr = function (a,b)
// {
//     console.log(arguments);
//     return a + b;
// }

// addExpr(2,3);
// addExpr(2,3,8,12);


// var addArrow = (a,b) => {
//     console.log(arguments);

//     return a+b
// };

// addArrow(2,5,8);



// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Jonas',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend: ',friend);
// console.log('Me ',me);

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName,oldLastName);

// Reference types
const jessica = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica={};

// Copying objects
const jessica2 = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
    family: ['Alcie', 'Bob'],
};

// a shallow copy will only copy the properties in the first level
// a deep clone will copy everything

// const jessicaCopy = Object.assign({},jessica2);
// jessicaCopy.lastName = 'Davis';
// console.log('Before marriage: ', jessica2);
// console.log('After marriage: ', jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// console.log('Before marriage: ', jessica2);
// console.log('After marriage: ', jessicaCopy);