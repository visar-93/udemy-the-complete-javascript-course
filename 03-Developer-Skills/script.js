// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = '23';
// if( x===23)console.log(23);

// const calcAge = birthyear => 2037 - birthyear;

// PROBLEM

// We work for a company building a smart home thermometer. Our most recent task
// is this: "Given an array of temperatures of the day, calculate the temperature
// amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [-12, -8, ,3, 'erro', 0, 2, 1, 'error', 5, 5, 8, 11];

// 1) Understanding the problem
// - What is temperature amplitude ? Answer: difference between
// highest and lowest temperatures
// - How to compute max and min temperatures?
// -What's a sensor error? And what to do?

// 2) Breaking up to into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array 
// - Subtract min from max (amplitude) and return it


// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality
//   twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [-12, -8, ,3, 'erro', 0, 2, 1, 'error', 5, 5, 8, 11];

// const calcTempAmplitudeNew = function(t1, t2) {

//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];
//     for(let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if(typeof curTemp !== 'number') continue;

//         if (curTemp > max)
//             max = curTemp;
//         if(temps[i] < min)
//             min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures1,temperatures2);
// console.log(amplitudeNew);

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         value: Number(prompt('Degrees celcius:')),
//     };

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// console.log(measureKelvin());

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [-12, -8, ,3, 'erro', 0, 2, 1, 'error', 5, 5, 8, 11];

// const calcTempAmplitudeBug = function(t1, t2) {

//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = 0;
//     let min = 0;
//     for(let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];

//         if(typeof curTemp !== 'number') continue;

//         if (curTemp > max)
//             max = curTemp;
//         if(temps[i] < min)
//             min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3,5,1],[9,4,5]);
// console.log(amplitudeBug);

// Coding Challenge #1

// const temperatures = [-3, 2, 4, 8, 13, 22];
// const printForecast = function(arr) {

//     let tempString ='';
//     for(let i=0; i < arr.length; i++)
//     {
//         tempString += `${arr[i]}°C in ${(i+1)} days...`;
//     }

//     console.log('...' + tempString);
// }

// const forecastDay = printForecast(temperatures);