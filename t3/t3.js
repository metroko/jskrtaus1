'use strict';

const sideA = +prompt('Input length of side A');
const sideB = +prompt('Input length of side B');
const sideC = +prompt('Input length of side C');
let result = '';

if (sideA === sideB && sideA === sideC) {
  result = 'Equilateral';
} else if (sideA === sideB || sideB === sideC || sideA === sideC) {
  result = 'Isoscele';
} else {
  result = 'Scalene';
}

document.getElementById('target').insertAdjacentHTML('beforeend', result);
