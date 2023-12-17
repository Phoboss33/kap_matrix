let matrix = [];
let matrixSize = 1;

let width = 0;
let height = 0;


function createMatrix() {
    width = parseInt(document.getElementById('matrixWidth').value);
    height = parseInt(document.getElementById('matrixHeight').value);
  
    matrix = Array.from({ length: height }, () => new Array(width).fill(0));
    drawMatrix();
}

function drawMatrix() {
  const container = document.getElementById('matrixContainer');
  container.innerHTML = ''; 
  const table = document.createElement('table');
  matrix.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  container.appendChild(table);
  
  document.getElementById('determinant').className = (width === height) || (height === width && height != 0) ? '' : 'inactive';
  document.getElementById('horizontal').className = width > 1 ? '' : 'inactive';
  document.getElementById('vertiacal').className = height > 1 ? '' : 'inactive';
  document.getElementById('clock').className = height > 1 &&  width > 1 ? '' : 'inactive';
  document.getElementById('clockCounter').className = height > 1 &&  width > 1 ? '' : 'inactive';

  document.getElementById('fill').className = height === width && height != 0 ? '' : 'inactive';
  document.getElementById('clear').className = height === width && height != 0 ? '' : 'inactive';
  document.getElementById('transpose').className = height === width && height != 0 ? '' : 'inactive';
}

function fillRandom() {
  matrix = matrix.map(row => row.map(() => Math.floor(Math.random() * 10)));
  drawMatrix();
}

function clearMatrix() {
  matrix = matrix.map(row => row.map(() => 0));
  drawMatrix();
}

function rotateClockwise() {
  matrix = matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
  drawMatrix();
}

function rotateCounterClockwise() {
  matrix = matrix[0].map((val, index) => matrix.map(row => row[row.length - 1 - index]));
  drawMatrix();
}

function mirrorHorizontally() {
  matrix = matrix.map(row => row.reverse());
  drawMatrix();
}

function mirrorVertically() {
  matrix.reverse();
  drawMatrix();
}

function transposeMatrix() {
  matrix = matrix[0].map((col, i) => matrix.map(row => row[i]));
  drawMatrix();
}

function calculateDeterminant() {
  if (matrix.length !== matrix[0].length) {
    alert('Определитель только на квадратных матрицах');
    return;
  }
  
  function determinant(m) {
    let det = 0;
    if (m.length === 1) return m[0][0];
    if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    for (let i = 0; i < m[0].length; i++) {
      let temp = m.slice(1).map(row => row.filter((val, index) => index !== i));
      det += m[0][i] * determinant(temp) * (i % 2 === 0 ? 1 : -1);
    }
    return det;
  }

  alert('Определитель: ' + determinant(matrix));
}

createMatrix();