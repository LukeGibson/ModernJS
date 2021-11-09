const select = document.querySelector('select.cars');

select.onclick = event => {
  console.log('clicked in js', event);
}

function clickCallback(event) {
  console.log('clicked by my own event listener')
}

select.addEventListener('click', clickCallback);

select.removeEventListener('click', clickCallback)