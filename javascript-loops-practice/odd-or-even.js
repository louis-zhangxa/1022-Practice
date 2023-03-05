/* exported oddOrEven */
function oddOrEven(numbers) {
  var neAR = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      neAR.push('even');
    } else {
      neAR.push('odd');
    }
  }
  return neAR;
}
