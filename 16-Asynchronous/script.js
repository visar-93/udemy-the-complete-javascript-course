'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// takes a string as a input
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${
//               +data.population / 1000000
//             } people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data) {
  const html = `
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              +data.population / 1000000
            } people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call contry 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     // console.log(data.borders)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call contry 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);

//       // render country 2
//       renderCountry(data2);
//     });

// for (let country in neighbour) {
//   const request2 = new XMLHttpRequest();
//   request2.open(
//     'GET',
//     `https://restcountries.eu/rest/v2/alpha/${neighbour[country]}`
//   );
//   request2.send();

//   request2.addEventListener('load', function () {
//     const data2 = JSON.parse(this.responseText);

//     // render country 2
//     renderCountry(data2);
//   });
// };
//   });
// };

// getCountryAndNeighbour('germany');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

// Promise is an object that is used as a placeholder for the future
// result of an asynchronous (a container for an asynchronously delivered value)

// const getCountryData = function(country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response) {
//         console.log(response)
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };


// const getCountryData = function(country) {
//     // Country 1
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//         console.log(response);

//         if(!response.ok)
//             throw new Error(`Country not found (${response.status})`);
//         return response.json();
//     })
//     .then((data) => {
//         renderCountry(data[0]);

//         const neighbour = 'sdsdsds';

//         if(!neighbour) return;

//         // Country 2
//         return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//         if(!response.ok)
//             throw new Error(`Country not found (${response.status})`);

//         return response.json()
//     })
//     .then(data => renderCountry(data))
//     .catch(err => {
//         console.error(`${err} 💣💣💣`);
//         renderError(`Something went wrong 💣💣 ${err.message}.Try again!`);
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data))
//     .catch(err => {
//       console.error(`${err} 💣💣💣`);
//       renderError(`Something went wrong 💣💣 ${err.message}.Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('kosovo');
// });

// getCountryData('kosovo');

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res=> {
//     for(let i =0; i< 100; i++) {

//     }
//     console.log(res);

// });
// console.log('Test end');

// Building a Simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
// // Promysifying means to convert callback based asyncronous behaviour to promise based

// // Promisifying setTimeout
// const wait = function(seconds) {
//     return new Promise (function(resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// wait(1).then(()=> {
//     console.log('1 second passed');
//     return wait(1);
// }).then(()=> {
//     console.log('2 second passed');
//     return wait(1);
// }).then(() => {
//     console.log('3 second passed');
//     return wait(1);
// }).then(() => {
//     console.log('4 second passed');
// });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x =>console.error(x));

////////////////////////////////////////////////////////////////////////

// Promisifying the Geolocation API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok)
//         throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok)
//         throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => console.error(`${err.message} 💣`));
// };

// btn.addEventListener('click', whereAmI);

////////////////////////////////////////////////////////////////////////////////////////////////

// Consuming Promises with Async/Await

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // function that will keep running in background while performing the code inside of it
// // then when function is done, it automatically returns a promise
// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse Geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if(!resGeo.ok) throw new Error('Problem getting location data');

//     const dataGeo = await resGeo.json();

//     // Country Data
//     // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     // .then(res => console.log(res));

//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if(!res.ok) throw new Error('Problem getting country');
    
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} 💣`);
//     renderError(`💣${err.message}`);

// We wanted to catch error in the whereAMI() above, then we had to rethrow the error
// then we will manually reject the promise that is returned from async function

//     // Reject promise returned from async function
      // We throw error inside the catch block
//     throw err;
//   }
// };

// console.log('1: will get location');
// // const city = whereAmI();
// // console.log(city)

// // whereAmI().then(city => console.log(`2: ${city}`))
// // .catch(err => console.error(`2:${err.message}`))
// // .finally(() => console.log('3: finished getting location'));

// (async function() {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`)
//   } catch(err) {
//     console.error(`2: ${err.message}`)
//   }
//   console.log('3: finished getting location')
// })();
// brackets in the end are used for calling the function

//////////////////////////////////////////////////////////////////////

// // Running promises in parallel

// const get3Countries = async function(c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);

//     const data = await Promise.all([getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//     getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//     getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)]);

//     console.log(data.map(d => d[0].capital));

//   } catch(err) {
//     console.error(err);
//   }
// };

// get3Countries('portugal', 'canada', 'tanzania');

////////////////////////////////////////////////////////////////////////////////////

// Other promise Combinators: race, allSettled and any

// Promise.race

// (async function() {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);

//   console.log(res[0])
// })();

// const timeout = function(sec) {
//   return new Promise(function(_, reject){
//     setTimeout(function() {
//       reject(new Error('request took to long!'))
//     }, sec);    
//   });
// };

// Promise.race([  
//   getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
//   timeout(0.2),
// ])
// .then(res => console.log(res[0]))
// .catch(err => console.error(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ])
// .then(res => console.log(res))
// .catch(err => console.error(err));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ])
// .then(res => console.log(res))
// .catch(err => console.error(err));

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ])
// .then(res => console.log(res))
// .catch(err => console.error(err));



// Coding Challenge #1

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country.toLowerCase()}`);
//     })
//     .then(response => {
//         if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//         return response.json();
//     })
//     .then(data => {
//         renderCountry(data[0]);
//     })
//     .catch(err => console.log(`${err.message} 💣`))
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// Coding Challenge #2

const wait = function(seconds) {
  return new Promise (function(resolve) {
      setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
      const img = document.createElement('img');
      img.src = imgPath;

      img.addEventListener('load', function() {
          imgContainer.append(img);
          resolve(img);
      });

      img.addEventListener('error', function() {
          reject(new Error('Image not found'));
      });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
// .then(img => {
//   currentImg = img;
//   console.log('Image 1 loaded');
//   return wait(2)
// })
// .then(()=> {
//   currentImg.style.display = 'none';
//   return createImage('img/img-2.jpg')
// })
// .then(img => {
//   currentImg = img;
//   console.log('Image 2 loaded');
//   return wait(2)
// })
// .then(()=> {
//   currentImg.style.display = 'none';
// })
// .catch(err => console.error(err));


// Coding Challenge #3

// Part 1
const loadNPause = async function() {

  try{
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

  } catch (err){
    console.error(err);
  }
};

// loadNPause();

// Part 2
const loadAll = async function(imgArr) {
  try{
    const imgs = imgArr.map(img => createImage(img))
    // const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    // const imgs = imgArr.map(img => {
    //   return new Promise((resolve, reject) => {
    //     createImage(img)
    //       .then(res => resolve(res))
    //       .catch(err => reject(err))
    //    })
    // })

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch(err) {
    console.error(err);
  }
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);