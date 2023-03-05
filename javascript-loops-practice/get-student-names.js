/* exported getStudentNames */
function getStudentNames(students) {
  var neAR = [];
  for (var i = 0; i < students.length; i++) {
    for (var j in students[i]) {
      neAR.push(students[i][j]);
    }
  }
  return neAR;
}
