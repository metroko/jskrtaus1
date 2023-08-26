'use strict';

const number = +prompt('Input your score (0-100)');
const array = [39, 51, 63, 75, 87, 100];
let grade = 0

for (let i = 0, l = array.length; i < l; i++) {
    if (number > array[i]) {
        grade++;
    }
}

if (number > 100) {
    document.getElementById('target').innerHTML = "Score must be less than 100!"
} else {
    document.getElementById('target').innerHTML = `Your grade is ${grade}.`
}