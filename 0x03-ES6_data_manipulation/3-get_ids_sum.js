// The reduce() method applies callback(accumulator, currentValue, currentIndex, array)
function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((prev, current) => prev.id || prev + current.id, 0);
  }
  return 0;
}

module.exports = getStudentIdsSum;
