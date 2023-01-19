
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == null || matrix == undefined) {
    return result;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if ((i % 2) === 0) {
          result.push(matrix[i]);
      } else if ((i % 2) === 1) {
          result.push(matrix[i].reverse());
      } else {
        return [];
      }
  }
    return result.flat();
  }
};
