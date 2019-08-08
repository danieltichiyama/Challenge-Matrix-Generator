function matrixGenerator(rows, columns) {
  let array = [];
  for (let i = 0; i < rows; i++) {
    let rowArray = [];
    for (let j = 0; j < columns; j++) {
      rowArray.push(Math.floor(Math.random() * 100));
    }
    sortedRowArray = rowArray.sort(function(a, b) {
      return a - b;
    });
    array.push(sortedRowArray);
  }

  let newArray = array.sort(function(a, b) {
    return a[0] - b[0];
  });

  return newArray;
}

module.exports = matrixGenerator;
