/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var neAR = [];
  for (var i = 0; i < words.length; i++) {
    neAR.push(words[i] + suffix);
  }
  return neAR;
}
