'use strict';

const x1 = +prompt('Input x1');
const x2 = +prompt('Input x2');
const y1 = +prompt('Input y1');
const y2 = +prompt('Input y2');
const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const result = `The distance between the two points is ${Math.round(dist)}.`;

document.getElementById('target').innerHTML = result;
