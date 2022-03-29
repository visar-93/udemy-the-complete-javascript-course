'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a','b','c','d','e'];

// // SLICE METHOD
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE METHOD ( changes original array - mutates) 

// console.log(arr.splice(2)); // takes part of array from index 2, and the original array loses these elements
// arr.splice(-1);
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);

// // REVERSE ARRAY
// arr = ['a','b','c','d','e'];
// const arr2 = ['j','i','h','g','f'];
// console.log(arr2.reverse()); // Reverse method mutates the original array
// console.log(arr2);

// // CONCAT METHOD
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr,...arr2]);

// // JOIN METHOD

// console.log(letters.join(' - '));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const [i, movement] of movements.entries()) {
//   if(movement > 0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// };

// console.log('------------FOREACH---------------') // continue and bread statements do not work here
//                           //c.element,c.index,c.arr
// movements.forEach(function(mov, i, arr) {
//   if(mov > 0) {
//     console.log(`Movement ${i+1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`);
//   }
// });


// MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`)
// });

// // SET

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, map) {
//   console.log(`${value}: ${value}`);
// });

/////////////////////////////////////////////////////////////////////////////////////////

// Creating DOM Elements

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  
  const displayMovements = function(movements, sort = false) {
    containerMovements.innerHTML = '';
    // .textContent = 0;
    
    const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

    movs.forEach(function(mov, i) {

      const type = mov > 0 ? 'deposit' : 'withdrawal';
      
      const html = ` 
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

      <div class="movements__value">${mov}€</div>
    </div> `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

    }); 
  };

  // displayMovements(account1.movements);

  const calcDisplaySummary = function(acc) {
    const incomes = acc.movements.filter(mov => mov>0).reduce((acc, mov) => acc+mov,0);
    labelSumIn.textContent = `${incomes}€`;

    const outcomes = acc.movements.filter(mov => mov < 0). reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outcomes)}€`;

    const interest = acc.movements.filter(mov => mov > 0).map(mov => (mov*acc.interestRate)/100).filter((int,i,arr)=>{
      // console.log(arr);
      return int >=1;
    }).reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = `${interest}€`;
  };

  // calcDisplaySummary(account1.movements);


  // Calculate Balance
  const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance} EUR`;
  };
  // calcDisplayBalance(account1.movements);
  
// Computing Usernames

const createUsernames = function(accs) {

  accs.forEach(function(acc) {

    acc.username = acc.owner.toLowerCase().split(' ').map(name =>name[0]).join('');
  })
};
createUsernames(accounts);

const updateUI = function(acc) {

      // Display movements
      displayMovements(acc.movements);

      // Display balance
      calcDisplayBalance(acc);
  
      // Display summary
      calcDisplaySummary(acc);
    
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  // console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcoma back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value ='';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// Transfer
btnTransfer.addEventListener('click', function(e) {

  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  // console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value='';
  
  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// Loan

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});


// Close Account

btnClose.addEventListener('click', function(e) {

  e.preventDefault();

  
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    
    // const index = accounts.indexOf(currentAccount);
    
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // console.log(index);
    
    // Delete account
    accounts.splice(index, 1);
    
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin = '';
});

// Button Sort

let sorted = false;

btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});



///////////////////////////////////////////////////////

  // Data transformations

  // MAP - creates a brand new array based on original arrays
  // map returns a new array containing the result of applying an operation
  // on all original array elements

  // FILTER - filter elements which satisfy a certain condition
  // filter returns a new array containing the array elements that
  // passed a spedified test condition

  // REDUCE - reduces all elements of an array into one element
  // reduce reduces all arrat elements down to one single value







//   // MAP METHOD
// const eurToUsd = 1.1;

// // const movementsUsd = movements.map(function(mov) {
// //   return mov * eurToUsd;
// // });


// const movementsUsd = movements.map(mov => mov * eurToUsd);



// console.log(movements);
// console.log(movementsUsd);

// const movementUSDfor = [];
// for(const mov of movements) {
//   movementUSDfor.push(mov * eurToUsd);
// }
// console.log(movementUSDfor);

// const movementDescriptions = movements.map((mov,i) => 
  
//   `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
//   );
// console.log(movementDescriptions);

// FILTER METHOD


// const deposits = movements.filter(function(mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];

// for (const mov of movements) if(mov>0) depositsFor.push(mov);

// console.log(depositsFor);

// const withdrawals = movements.filter((mov) => mov < 0);

// console.log(withdrawals);


// REDUCE METHOD

// console.log(movements)

// // accumulator is like a snowball
// // const balance = movements.reduce(function(acc, cur, i, ar) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur
// // }, 0);
// const balance = movements.reduce((acc, cur) => acc + cur,0);
// console.log(balance);

// let balance2 = 0;
// for(const mov of movements) balance2+= mov;
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if(acc > mov)
//   return acc; 
//   else 
//   return mov;
// },movements[0]);
// console.log(max);


// CHAINING METHODS

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov*eurToUsd).reduce((acc,mov)=> acc + mov, 0);
// console.log(totalDepositsUSD);

// FIND METHOD

// FINDINDEX METHOD

// SOME AND EVERY

// console.log(movements);
// // Include checks for equality
// console.log(movements.includes(-130));

// // some checks for a condition
// console.log(movements.some(mov => mov ===-130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // Every only returns true if every element completes the condition

// console.log(movements.every((mov => mov >0)));
// console.log(account4.movements.every((mov => mov >0)));

// // Separate callback 

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// FLAT AND FLATMAP

// Only one level deep
// const arr = [[1,2,3], [4,5,6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1,2],3], [4,[5,6]], 7, 8];
// console.log(arrDeep.flat(2));  // argument presents the level of depth of array

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// // flat
// const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc,mov)=> acc + mov,0);
// console.log(overalBalance);
// // flatmap - only one level deep
// const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc,mov)=> acc + mov,0);
// console.log(overalBalance2);



// SORTING

// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort()); // it mutates the original array
// console.log(owners);

// Numbers
// console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a,b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// movements.sort((a,b) => a - b);
// console.log(movements);

// Descending
// movements.sort((a,b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// movements.sort((a,b) => b-a);
// console.log(movements);

//////////////////////////////////////////////////////////////////////////

// More ways of creating and filling arrays

// const arr = [1,2,3,4,5,6,7];
// console.log(new Array(1,2,3,4,5,6,7));

// // Empty Arrays and Fill Method

// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from

// const y = Array.from({length: 7}, ()=>1);
// console.log(y);

// const z = Array.from({length: 7}, (_, i) => i + 1);
// console.log(z);

// const k = Array.from({length: 100}, ()=> Math.trunc(Math.random() * 6)+1);
// console.log(k);


// labelBalance.addEventListener('click', function() {
//                             // First Argument - from where to create a new array, Second Argument  - with what to fill the new array
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('€', '')));
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// Which Array Method to Use

// What do I actually want from this Array Method


// Practice Array Methods
// 1.
// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// // 2.
// // const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
// // console.log(numDeposits1000);

// const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? ++count : count,0);
// console.log(numDeposits1000);

// // 3. Creating a new Object

// const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {

//   // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;

//   sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;

//   return sums;
// },{deposits: 0, withdrawals: 0});

// console.log(deposits, withdrawals);

// // 4.
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function(title) {

//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'and','the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
 
//   return capitalize(titleCase);

// }
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('this is a LONG title but n ot too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));



//////////////////////////////////////////////////////////////////////////


// Code Challenge #1
  // const checkDogs = function(arr1, arr2) {

  //   // 1.
  //   let newArr1 = arr1.slice(1,-2);
  //   console.log(newArr1);

  //   // 2.
  //   newArr1 = newArr1.concat(arr2);
  //   console.log(newArr1);
  //   // 3.

  //   newArr1.forEach(function(age, i){

  //     const checkAge = age >= 3 ? `an adult, and is ${age} years old` : `still a puppy`;
  //     console.log(`Dog number ${i + 1} is ${checkAge}`);
  //   });
  // };

  // // Test Data
  // const dogsJulia1 = [3, 5, 2, 12, 7];
  // const dogsKage1 = [4, 1, 15, 8, 3];

  // const dogsJulia2 = [9, 16, 6, 8, 3];
  // const dogsKate2 = [10, 5, 6, 1, 4];

  // checkDogs(dogsJulia1,dogsKage1);
  // checkDogs(dogsJulia2, dogsKate2); 

// Coding Challenge #2

// const calcAverageHumanAge = function(dogAges) {

//   const humanAges = dogAges.map(function(age) {
//     return age <=2 ? 2 * age : 16 + 4 * age;  
//   });
//   console.log('dogs ages in human ages: ',humanAges);

//   const adults = humanAges.filter(function(age) {
//     return age >= 18;
//   });
//   console.log('dogs at least 18', adults);

//   const average = adults.reduce(function(acc, age, i, arr) {
//     return acc+age/arr.length;
//   },0)
//   console.log(average);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


// // Coding Challenge #3

// console.log(`Coding Challenge 3 - arrow functions`);

// const calcAverageHumanAge2 = (dogAges) => {

//   const humanAges = dogAges.map(age => age <=2 ? 2 * age : 16 + 4 * age);
//   console.log('dogs ages in human ages: ',humanAges);

//   const adults = dogAges.map(age => age <=2 ? 2 * age : 16 + 4 * age).filter(age=> age >=18);
//   console.log('dogs at least 18', adults);

//   const average = dogAges.map(age => age <=2 ? 2 * age : 16 + 4 * age).filter(age=> age >=18).reduce((acc, age, i, arr)=> acc+age/arr.length,0);
//   console.log(average);
// };

// calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// const calcAverageHumanAge3 = dogAges => 
//   dogAges.map(age => age <=2 ? 2 * age : 16 + 4 * age).map(age => age <=2 ? 2 * age : 16 + 4 * age).filter(age=> age >=18).reduce((acc, age, i, arr)=> acc+age/arr.length,0);
//   calcAverageHumanAge3([5, 2, 4, 1, 15, 8, 3]);
//   calcAverageHumanAge3([16, 6, 10, 5, 6, 1, 4]);




// Coding Challenge #4

// 1.
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];

  dogs.forEach(function(curr, i) {
    curr.recomendedFood = Math.trunc(curr.weight ** 0.75 * 28);
  });

  console.log(dogs);

  // 2.

  const sarahsDog = dogs.find( own => own.owners.includes('Sarah'));
  console.log(`${sarahsDog.curFood > sarahsDog.recomendedFood ? 'Sarah\'s dog is eating too much ': 'Sarah\'s dog is eating too little'}`);
  console.log(sarahsDog.curFood, sarahsDog.recomendedFood);

  // 3.

  const ownersEatTooMuch = dogs.filter(own => own.curFood > own.recomendedFood).flatMap(own => own.owners);
  const ownersEatTooLittle = dogs.filter(own => own.curFood < own.recomendedFood).flatMap(own => own.owners);
  console.log(ownersEatTooMuch);
  console.log(ownersEatTooLittle);

 // 4.

 const strETM = ownersEatTooMuch.join(' and ');
console.log(strETM + ' dogs eat too much!')
const strETL = ownersEatTooLittle.join(' and ');
console.log(strETL + ' dogs eat too little!')

// 5.

console.log(dogs.some(own => own.curFood === own.recomendedFood));

// 6.
console.log(dogs.some(own => own.curFood > own.recomendedFood * 0.9 && own.curFood < own.recomendedFood *1.1));

// 7.
const okayAmount = dogs.filter(own => own.curFood > own.recomendedFood * 0.9 && own.curFood < own.recomendedFood *1.1);
console.log(okayAmount);

// 8. 

const sortedDogs = dogs.slice().sort((a,b) => {
  if(a.recomendedFood > b. recomendedFood) return 1;
  if(a.recomendedFood < b. recomendedFood) return -1;
});

console.log(sortedDogs);