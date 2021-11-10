// -- Timeout Example -- //

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);

// -- HTTP Requests -- //

// const getTodos = (resource, callback) => {
//   const req = new XMLHttpRequest();

//   req.addEventListener('readystatechange', () => {
//     if (req.readyState === 4 && req.status === 200) { // req completed & no error returned
//       const data = JSON.parse(req.responseText); // parse response text to a json object
//       callback(undefined, data);
//     } else if (req.readyState === 4){
//       callback('could not fetch data', undefined);
//     }
//   });
  
//   req.open('GET', resource);
//   req.send();
// };

// callback hell! que ** promises ** :)
// getTodos('todos/todosLuke.json', (err, data) => {
//   console.log('Lukes todos', data);
//   getTodos('todos/todosJason.json', (err, data) => {
//     console.log('Jasons todos', data);
//     getTodos('todos/todosHarry.json', (err, data) => {
//       console.log('Harrys todos', data);
//     });
//   });
// });

// -- Promises -- //

// const getSomthing = (isGood) => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     if(isGood) {
//       resolve('some data');
//     } else {
//       reject('some error');
//     }
//   });
// };

// getSomthing(true).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

// const getTodos = (resource) => {

//   return new Promise((resolve, reject) => {
//     const req = new XMLHttpRequest();

//     req.addEventListener('readystatechange', () => {
//       if (req.readyState === 4 && req.status === 200) { // req completed & no error returned
//         const data = JSON.parse(req.responseText); // parse response text to a json object
//         resolve(data);
//       } else if (req.readyState === 4){
//         reject('couldnt getting resource');
//       }
//     });
    
//     req.open('GET', resource);
//     req.send();
//   });
// };

// // promise chaining - get around the callback hell!
// getTodos('todos/todosLuke.json').then(data => {
//   console.log('Promise 1 resolved', data);
//   return getTodos('todos/todosJason.json');
// }).then(data => {
//   console.log('Promise 2 resolved', data);
//   return getTodos('todos/todosHarry.json');
// }).then(data => {
//   console.log('Promise 3 resolved', data);
// }).catch(err => {
//   console.log('Promise rejected', err);
// });

// -- Fetch API -- //

// fetch('todos/todosLuke.json').then(res => {
//   console.log('resolved', res);
//   return res.json();
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log('rejected', err);
// });


// -- Async & Await -- //

const getTodos = async (resource) => { // async functions always return a Promise

  const response = await fetch(resource);

  if (response.status !== 200) {
    throw new Error('cannot fetch the data'); // promise returned by async function is rejected - triggers catch below
  }

  const data = await response.json();

  return data;
};

getTodos('todos/todosLukee.json')
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));

