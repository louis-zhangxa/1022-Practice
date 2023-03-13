var $switch = document.querySelector('.switch');
var $holder = document.querySelector('.holder');
var $shadow = document.querySelector('.shadow');
$switch.addEventListener('click', function (event) {
  if (event.target.className === 'switch') {
    $switch.className = 'switch switch-on';
    $holder.className = 'container holder holder-bright';
    $shadow.className = 'row shadow shadow-bright';
  } else {
    $switch.classList = 'switch';
    $holder.className = 'container holder';
    $shadow.className = 'row shadow';
  }
});
