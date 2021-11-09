// -- Basics -- //

// let title = 'TITLE'
// let author = 'LUKE'

// let html = `
//   <h2>${title}</h2>
//   <p>By author ${author}</p>
// `;

// console.log(html)

// -- Arrays -- //

// let people = ['luke', 'sam', 'jake'];
// let stuff = ['test', 20, true, [1,2,3]]

// console.log(stuff.pop());
// console.log(stuff);

// -- Undefined and Null -- //

// let age = null;
// console.log(age, age + 3, `the age is ${undefined}`)

// -- Equality -- //

// let age = 25;

// console.log(age == 25);
// console.log(age == '25');

// console.log(age === 25);
// console.log(age === '25');

// let score = '100';
// let scoreNum = 100;

// -- Type Conversion -- //

// console.log(Number(score) + 1);
// console.log(String(score) + ' test');

// const scores = [12, 34, 0, 66, 44, 100, 99, 89];

// -- Loops -- //

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }

//   console.log('your score is', scores[i]);

//   if (scores[i] === 100){
//     console.log('max score reached 100!');
//     break;
//   }
// }

// -- Functions -- //

// const calcArea =  function(radius) {
//   let area = 3.14 * radius**2;
//   return area;
// }
// console.log(calcArea(5));

// const calcArea = radius => 3.14 * radius**2;
// console.log(calcArea(5));

// -- Methods -- //

// const myName = 'Luke';
// console.log(myName.toUpperCase());

// -- Callbacks -- //

// const myFunc = (myCallbackFunc) => {
//   let value = 50;
//   myCallbackFunc(value);
// }

// myFunc(value => console.log(value));

// let people = ['a', 'b', 'c', 'd', 'e'];

// people.forEach(function(person){
//   console.log(person);
// });

// people.forEach((person, index) => console.log(index, person));

// -- Reference to UI -- //

const ul = document.querySelector('.people');

const people = ['luke', 'sam', 'jake', 'joe'];
let html = ``;

people.forEach((person) => {
  html += `<li style="color: orange">${person}</li>`;
});

console.log(html)
ul.innerHTML = html;