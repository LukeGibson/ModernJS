// -- Selectors -- //s

// const myElement = document.querySelector('div.error');
// console.log(myElement);

// const allParas = document.querySelectorAll('p'); // NodeList =! an array!
// console.log(allParas);

// allParas.forEach(para => {
//   console.log(para);
// });

// const errors = document.querySelectorAll('.error');
// console.log(errors);


// -- Get element by X -- //

// const title = document.getElementById('page-title');
// console.log(title);

// const errors = document.getElementsByClassName('error'); // HTMLCollection != NodeList
// console.log(errors);
// console.log(errors[1]);

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// -- Setting innerText and Html -- //

// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'Squash is awesome!';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ': new text';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new h2</h2>'
// console.log(content.innerHTML);

// const people = ['luke', 'sam', 'jake'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person} is here</p>`
// });

// -- Changing attributes -- //

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.bing.com');
// link.innerText = 'Link to Bing';

// const msg = document.querySelector('p.error');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green');

// const title = document.querySelector('h1');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.fontSize = '60px';
// title.style.margin = '';

// -- Changing classes -- //

// const content = document.querySelector('p');

// console.log(content.classList); // classes an element has

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   if (para.innerHTML.includes('error')) {
//     para.classList.add('error')
//   } else if (para.innerHTML.includes('success')) {
//     para.classList.add('success')
//   }
// });

// const title = document.querySelector('.title');
// console.log(title.classList);
// title.classList.toggle('test');
// console.log(title.classList);
// title.classList.toggle('test');
// console.log(title.classList);

