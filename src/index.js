
// You should implement your task here.

module.exports = function towelSort (matrix) {
        let newMatrix = [].concat(...matrix);
        newMatrix.sort( (a,b) => {
            return a-b;
        })
  return newMatrix;
}
