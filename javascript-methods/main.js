var maximumValue = Math.max(1, 3, 2, 4, 3, 2);
console.log('the value of maximumValue is ' + maximumValue);

var heroes = ['spider', 'super', 'caption', 'iron'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('the value of randem Index is ' + randomIndex);

var randomHero = heroes[randomIndex];
console.log('random hero is ' + randomHero);

var library = [
  {
    title: 'vscode',
    author: 'microsoft'
  },
  {
    title: 'pycharm',
    author: 'jetbrain'
  },
  {
    title: 'wechat',
    author: 'tencent'
  }
];

var lastBook = library.pop();
console.log('the last book is ', lastBook);

var firstBook = library.shift();
console.log('first book is ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('the book in library ', library);

var fullName = 'Louis Zhang';
var firstAndLastname = fullName.split(' ');

console.log('the value of name is ', firstAndLastname);

var firstName = firstAndLastname[0];
var sayMyName = firstName.toUpperCase();
console.log('say my name! ' + sayMyName);
