function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $click = document.querySelector('.click-button');
$click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

function handleDbClock(event) {
  console.log('button db clicked');
  console.log(event);
  console.log(event.target);
}

var $dbClick = document.querySelector('.double-click-button');
$dbClick.addEventListener('dblclick', handleDbClock);
