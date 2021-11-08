// let title = 'TITLE'
// let author = 'LUKE'

// let html = `
//   <h2>${title}</h2>
//   <p>By author ${author}</p>
// `;

// console.log(html)

// let people = ['luke', 'sam', 'jake'];
// let stuff = ['test', 20, true, [1,2,3]]

// console.log(stuff.pop());
// console.log(stuff);

// let age = null;

// console.log(age, age + 3, `the age is ${undefined}`)

// let age = 25;

// console.log(age == 25);
// console.log(age == '25');

// console.log(age === 25);
// console.log(age === '25');

// let score = '100';
// let scoreNum = 100;

// console.log(Number(score) + 1);
// console.log(String(score) + ' test');

const scores = [12, 34, 0, 66, 44, 100, 99, 89];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log('your score is', scores[i]);

  if (scores[i] === 100){
    console.log('max score reached 100!');
    break;
  }
}