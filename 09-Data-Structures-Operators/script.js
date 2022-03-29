'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  // ES6 enhancet literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },


  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`
    Order received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delivered to ${address}
     at ${time}`);
    },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },

  orderPizza(mainIndegrient, ...otherIndegrients) {
    console.log(mainIndegrient);
    console.log(otherIndegrients);
  },
};

// Coding Challenge #4

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));


// document.querySelector('button').addEventListener('click', function() {
    
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');
//     console.log(rows);

//     // for(const [i, row] of rows)
//     for(const row of rows) {
//         const [first, second] = row.toLowerCase().trim().split('_');
//         const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//             // console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//             console.log(`${output.padEnd(20)}${'✅'.repeat(rows.indexOf(row)+1)}`);
//     }
// });

//////////////////////////////////////////////////

// // String Methods Practice
// const flights =
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const getCode = str => str.slice(0, 3).toUpperCase();
 
//  for (const flight of flights.split('+')) {
//     const[type, from, to, time] = flight.split(';');
//     const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(45);
//     console.log(output);
//  }



// ////////////////////////////////////////////
// // Strings



// const airline = 'TAP Air Portugal';

////////////////////////////////////////////////////////
// // Working With Strings - Part 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'. length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if(s === 'B' || s === 'E')
//     console.log('You got the middle seat');
//     else console.log('You got lucky');
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));
///////////////////////////////////////////////////////////////////

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// /////////////////////////////////////////
// // Comparing e-mails

// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// /////////////////////////////////////////
// // Replace parts of strings
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passengers come to barding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));
// // the replace method is also case sensitive

///////////////////////////////////////////////////
// Booleans

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){

//     console.log('Part of the NEW Airbus family');
// };

// Practice exercise

// const checkBaggage = function(items) {
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are not allowed on board');
//     } else {
//         console.log('Welcome aboard!');
//     }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////////////////////
// Working with strings part 3

// // Split and Join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizetName= function(name){
//     const names = name.split(' ');
//     const namesUpper = [];

//     for(const n of names) {
//         // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // 
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(namesUpper.join(' ')); // join creates an string with some seperator in end of each array element
// }

// capitalizetName('jessica ann smith davis');
// capitalizetName('jonas schmedtmann');

// ////////////////////////////////////////////////////////////////
// // Paddin a string is adding a number of characters to a string until a string
// // has a desired length

// /// Padding

// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function(number) {
//     const str = number +'';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(32666165161));
// console.log(maskCreditCard(2132156156581219));
// console.log(maskCreditCard('82516321321321981231'));


// /// Repeat Method

// const message2 = 'Bad weather... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//     console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);





////////////////////////////////////////////////////////////////
//// MAPS

// Map is data structure that we can use to map values to keys
// data is stored in key value pairs in maps
// difference between objects and maps is that keys can have any type
// in objects have usually string type

// const rest = new Map();
//        // key       value
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'We are open :D')
// .set(false, 'We are closed :(');
//                      // key
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(arr));

//////// Map Iteration

// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'Correct 🎉'],
//     [false, 'Try again!'],
// ]);

// console.log(question);

// // Convert Object to MAP

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Iterations in MAP

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if(typeof key === 'number')
//     console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// // if(answer === question.get('correct'))
// //     console.log(question.get(true));
// // else console.log(question.get(false));
// console.log(question.get(question.get('correct') === answer));

// // Convert MAP to Array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);





///////////////////////////////////////////////////////////////

// Sets are collection of unice values , can never have any duplicate and
// that property makes them use in certain situations
// they are iterable

// const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza']);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');;
// // ordersSet.clear();
// console.log(ordersSet);

// for(const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
// console.log(new Set('jonasschmedtmann').size);

////////////////////////////////////////////////////////////
// Looping Objects: Object Keys, Values and Entries

// Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//  openStr += `${day}, `;
// }
// console.log(openStr);

// // Property Values

// const values = Object.values(openingHours);
// console.log(values);

// // Entire objects
// const entries = Object.entries(openingHours);
// console.log(entries);

// // // [key, value]
// for(const [day, {open, close}] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }


////////////////////////////////////////////////////////////
// // Optional Chaining

// if(restaurant.openingHours && restaurant.openingHours.mon) 
// console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Opcional Chaining - Methods

// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisoto?.(0,1) ?? 'Method does not exist');

// // Optional Chaining  - Arrays

// const users = [{name: 'Jonas', email: 'hello@jonas.io'}];
// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[0]?.phone ?? 'User array empty');
// if(users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

//////////////////////////////////
// Enhanced Object Literals

// console.log(restaurant)




///////////////////////////////////////
// Looping Arrays: The for-f Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for(const [i, el] of menu.entries()) {
//   console.log(` ${el}`);
// }${i + 1}:

// console.log([...menu.entries()]);

///////////////////////////////////////

// Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// // NULLish values are null and undefined , (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);


// console.log('-------OR--------');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);


// console.log('-------AND--------');

// console.log(0 && 'Jonnas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if(restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/// 1) Destructuring

//Rest Element in Arrays

// SPREAD, because on Right side of =
// const arr =[1,2,...[3,4]];

//REST, because on LEFT side of =
// const [a, b, ...others] = [1,2,3,4,5];
// console.log(a,b, others);
// the rest assignment collects elements that are not used in destructuring

// const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza,risotto, otherFood);

// Rest element in Objects

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

/// 2) Functions

// const add = function(...numbers) { 
//   console.log(numbers);
//   let sum = 0;
//   for(let i=0; i < numbers.length; i++)
//   sum += numbers[i];

//   console.log(sum);
// };

// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);

// const x = [23, 5, 7];
// add(...x);

// // Order Pizza

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');




// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables : arrays, strings, maps, sets. NOT objects

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// Real world example
// const ingredients = [prompt('Let\'s make pasta! Indegrient 1'), prompt('Indegrient 2'),
// prompt('Indegrient 3'),];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////////////////////////////////////////////
// // Destructiong Objects
// restaurant.orderDelivery ({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery ({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });


// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a =111;
// let b =999;

// const obj = {a : 23, b : 7, c : 14};

// ({a,b} = obj);
// console.log(a,b);

// // Nested object destructing

// const {fri: {open:o, close:c}} = openingHours;
// console.log(o, c);


////////////////////////////////////////////
// Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // its not an array, its destructuring the array
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i,j);
// const [i, , [j, k]] = nested;
// console.log(i,j,k);

// // Default values
// const[p =1, q=1, r=1] = [8];
// console.log(p,q,r);


// Coding Challenge #1
// Football betting application


// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Burrossia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandovski', 'Gnarby', 'Lewandovski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// // one variable with goal keeper and an array with remaining players
// const [gk,...fieldPlayer] = players1;
// console.log(gk, fieldPlayer);

// // 3. All players
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const player1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // 5.   (nested destructuring)
// const{odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function(...players) {
// console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandovski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.

// team1 < team2 && console.log('Team1 is more likely to win');
// team1 > team2 && console.log('Team2 is more likely to win');

// Coding Challenge #2
// Football betting application

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Burrossia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//       [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandovski', 'Gnarby', 'Lewandovski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };

// // 1. 
// for(const [i, player] of game.scored.entries()) {
  
//   console.log(`Goal ${i+1}: ${player}`);
// }

// // 2.
// const odds = Object.values(game.odds); // an array
// let average = 0;
// for(const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// // 3. 
// // Method 1
// const [team1,team2] = Object.values(game);
// const [odd1, odd2, odd3] = Object.values(game.odds);
// console.log(`Odd of victory ${team1}: ${odd1}`);
// console.log(`Odd of draw: ${odd2}`);
// console.log(`Odd of victory ${team2}: ${odd3}`);

// // Method 2
// for (const[team, odd] of Object.entries(game.odds)) {
//   const teamStr = team==='x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }


// // 4.
// const scorers = {};
// for( const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player]=1);
// }
// console.log(scorers);