'use strict';

const number = +prompt('Enter a positive integer');
const table = document.createElement('table');

for (let i = 1; i <= number; i++) {
  const row = document.createElement('tr');

  for (let j = 1; j <= number; j++) {
    const cell = document.createElement('td');
    cell.innerHTML = (i * j);
    row.appendChild(cell);
  }
  table.appendChild(row);
}

document.body.appendChild(table);
