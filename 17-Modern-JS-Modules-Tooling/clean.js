'use strict'

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// Changet name from "Limits" 
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;


// create a function that checks if the user limit is defined, else is 0
const getLimit = (limits, user) => limits?.[user] ?? 0;
// const limit = (spendingLimits[user] ? spendingLimits[user] : 0);

// Pure function
// Changed name from "add" to "addExpense" , user value set to default
const addExpense = function (
  state, limits, value, description, user = 'jonas') {

  const cleanUser = user.toLowerCase();

  //if value of expense is lower then user's limit, add this expense

  return value <= getLimit(limits, cleanUser) ? [...state, { value: -value, description, user: cleanUser}] : state;

};
const newBudget1 = addExpense(budget, spendingLimits,10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits,100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits,200, 'Stuff', 'Jay');


// Changed name from "check" to checkExpenses
// If the value of expense is greater than users limit, add the property flag = 'limit
const checkExpenses2 = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} 
    : entry;
  });

  // for (const entry of newBudget3) 
  // if (entry.value < -getLimit(limits, entry.user)) 
  // entry.flag = 'limit';
};

const checkExpenses = (state, limits) => 
 state.map(entry => 
    entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} 
    : entry
);

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// Changed name from "bigExpenses" to logBigExpenses
// If the value of expense is lower than users limit, log to the console the symbol of expense

// Inpure
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state.filter(entry => entry.value <= -bigLimit)
  .map(entry => entry.description.slice(-2))
  .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);
    
  // let output = '';
  // for (const entry of budget) 
  //   if (entry.value <= -bigLimit) 
  //     output += 
  //       entry.value <= -bigLimit ?`${entry.description.slice(-2)} / ` : '';
    
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
logBigExpenses(finalBudget,500);

