var $modal = document.querySelector('.modal');
var $modalSwitch = document.querySelector('.modal-switch');
var $modalOff = document.querySelector('.modal-off');

$modalSwitch.addEventListener('click', function (event) {
  $modal.className = 'row modal';
});

$modalOff.addEventListener('click', function (event) {
  $modal.className = 'row hidden modal';
});
