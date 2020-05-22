console.log('Aula 08_2');

window.addEventListener('load', start);

function start() {
  console.log('Aula 08_2');
  console.log('Pagina totalmente caregada');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}
function countName(event) {
  console.log(event);
  var count = event.target.value;
  var span = document.querySelector('#nameLength');
  span.textContent = count.length;
}

function preventSubmit(event) {
  event.preventDefault();

  var nameInput = document.querySelector('#nameInput');
  alert(nameInput.value + ' cadastrado com sucesso!');
}
