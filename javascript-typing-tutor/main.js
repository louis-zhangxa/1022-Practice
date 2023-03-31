var $textList = document.querySelectorAll('.text');
var typeCount = 0;
var place = 0;

function handleKeyDown(event) {
  if (place <= 21) {
    if (event.key === $textList[place].innerHTML) {
      $textList[place].className = 'text-right';
      if (place !== 21) {
        $textList[place + 1].className = 'text underline';
      }
      place++;
      typeCount++;
    } else {
      $textList[place].className = 'text-wrong';
      typeCount++;
    }
  }
  if (place === 22) {
    place++;
    var accuracy = $textList.length / typeCount;
    var $accuracy = document.createElement('p');
    $accuracy.setAttribute('class', 'accuracy');
    $accuracy.textContent = 'your accuracy is %' + Math.floor(100 * accuracy);
    var $column = document.querySelector('.column');
    $column.appendChild($accuracy);
    var $button = document.createElement('button');
    $button.setAttribute('class', 'button');
    $button.textContent = 'start again?';
    $column.appendChild($button);
    $button.addEventListener('click', function (e) {
      typeCount = 0;
      place = 0;
      for (var i = 0; i < $textList.length; i++) {
        $textList[i].className = 'text';
      }
      $textList[0].className = 'text underline';
      $column.removeChild($accuracy);
      $column.removeChild($button);
    });
  }
}

window.addEventListener('keydown', handleKeyDown);
