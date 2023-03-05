/* exported filterOutNulls */
function filterOutNulls(values) {
  var nwAR = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      nwAR.push(values[i]);
    }
  }
  return nwAR;
}
