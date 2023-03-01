var student = {
  firstName: 'Louis',
  lastName: 'Zhang',
  age: 22
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName is ' + fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';

console.log('value of lives in irvine ' + student.livesInIrvine);
console.log('value of previous job ' + student.previousOccupation);

var vehicle = {
  make: 'bmw',
  model: 'm3',
  year: 2023
};

vehicle['color'] = 'green';
vehicle['isConvertible'] = false;
console.log('value of color ' + vehicle['color']);
console.log('value of isConvertible ' + vehicle['isConvertible']);
console.log('vehicle: ', vehicle);

var pet = {
  name: 'pudding',
  type: 'cat'
};

delete pet.name;
delete pet['type'];
console.log('value of pet ', pet);
