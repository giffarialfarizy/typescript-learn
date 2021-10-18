var character;
var age;
var isLoggedIn;
// age = 'luigi'
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// == arrays ==
// array of string
var ninjas = []; // initialization empty array to be able to implement 'push'
// ninjas = [10, 23]
// ninjas = ['yoshi', 'mario'];
// jika belum diinisialisasi [] maka push akan "TypeError: Cannot read property 'push' of undefined"
ninjas.push('shaunia');
console.log(ninjas);
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// uid = false;
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = 'hello';
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black'
};
