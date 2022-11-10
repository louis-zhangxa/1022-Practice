document.addEventListener('keydown', key);
var $image = document.querySelector('img');

function key(event) {
  if (event.key === 'ArrowUp') {
    $image.className = 'image-up';
  } else if (event.key === 'ArrowRight') {
    $image.className = 'image-right';
  } else if (event.key === 'ArrowDown') {
    $image.className = 'image-down';
  } else if (event.key === 'ArrowLeft') {
    $image.className = 'image-left';
  }
}
