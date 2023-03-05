/* exported filterOutStrings */
function filterOutStrings(values) {
  var neAR = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      neAR.push(values[i]);
    }
  }
  return neAR;
}
