'use strict';

const tempC = +prompt('Input celsius');

const tempF = (tempC * 9) / 5 + 32;
const tempK = tempC + 273.15;

const result = `${tempC} degrees celsius is ${tempF}
                degrees Fahrenheit and ${tempK} Kelvin.`;

document.getElementById('target').innerHTML = result;
