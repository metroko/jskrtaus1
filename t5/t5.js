'use strict';

const number = +prompt('Enter a positive integer');
let sum = 0;

for (let i = 0; i <= number; i++ ) {
  sum += i;
}

document.getElementById('target').innerHTML = `The sum off all numbers up to
                                                and including ${number} is ${sum}.`