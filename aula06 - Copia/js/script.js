console.log('Olá, mundo');

var title = document.querySelector('h1');
title.textContent = 'Modificado por André';

// Comentario de linha
/*
Comentario de bloco
 
*/
var a = 5;
var b = 2;

if (a > b) {
  console.log(a + ' é  maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é  menor que ' + b);
  } else {
    console.log(a + ' é  igual que ' + b);
  }
}

var dia = 1;

if (dia === 1) {
  console.log('Domingo');
} else {
  if (dia === 2) {
    console.log('Segunda');
  } else {
    if (dia === 3) {
      console.log('Terça');
    }
  }
}

var r = '';
// prettier-ignore
switch (dia) {
  case 1:
    r = 'Domingo';
    break;
  case 2:
    r = 'Segunda';
    break;
  case 3:
    r = 'Terça';
    break;
  case 4:
    r = 'Quarta';
    break;
  case 5:
    r = 'Quinta';
    break;
  case 6:
    r = 'Sexta';
    break;
  case 7:
    r = 'Sabado';
    break;

  default:
    r = 'Dia inválido';
}
console.log(r);

a = 6;
b = 7;

var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);

// Somátorio com while

var numeroAtual = 1;
var somatorio = 0;

while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log('A soma atual é: ' + somatorio);

var numeroAtual1 = 1;
var somatorio1 = 0;

do {
  somatorio1 += numeroAtual1;
  numeroAtual1++;
} while (numeroAtual1 <= 10);
console.log('A soma atual é1: ' + somatorio1);

var numeroAtual1 = 1;
var somatorio1 = 0;
for (numeroAtual1 = 1; numeroAtual1 <= 10; numeroAtual1++) {
  somatorio1 += numeroAtual1;
}
console.log('A soma atual é1: ' + somatorio1);
