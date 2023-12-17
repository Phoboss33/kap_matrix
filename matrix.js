let matrix = [];
let matrixSize = 1;

function createMatrix() {
  matrixSize = parseInt(document.getElementById('matrixSize').value);
  matrix = Array.from({ length: matrixSize }, () => new Array(matrixSize).fill(0));
  drawMatrix();
}

function drawMatrix() {
  const container = document.getElementById('matrixContainer');
  container.innerHTML = ''; // Clear the container
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
  
  // Deactivate the determinant button if the matrix is not square
  document.getElementById('determinant').className = matrix.length === matrix[0].length ? '' : 'inactive';
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
    alert('Determinant can be calculated only for square matrices.');
    return;
  }
  
  // This is a recursive function to calculate determinant
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

  alert('Determinant: ' + determinant(matrix));
}

createMatrix(); // Initialize with 1x1 matrix