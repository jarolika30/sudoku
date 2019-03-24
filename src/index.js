
module.exports = function solveSudoku(matrix) {
  // your solution
  const sumInRow = 45;
  var sum = 0;
  var count = 0;
  for (var vert = 0; vert < matrix.length; vert++) {
    for (var horz = 0; horz < matrix.length; horz++) {
      if (matrix[vert][horz] !== 0) {
        sum += matrix[vert][horz];
        count++;
      } else {
        if (vert === 0) {
          let countVert = 0;
          let sumVert = 0;
          let i = vert + 1;
          let j = horz;
          while (i <= 8) {
            if (matrix[i][j] !== 0) {
              sumVert += matrix[i][j];
              countVert++;
              i++;
            } else {
              i++;
            }
          }
          if (countVert === 8) {
            matrix[vert][horz] = sum - sumVert;
          }
        } 
      }
    }
  }

  return matrix;
} 
