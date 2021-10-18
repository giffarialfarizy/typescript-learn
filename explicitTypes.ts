let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi'
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// == arrays ==

// array of string
let ninjas: string[] = []; // initialization empty array to be able to implement 'push'

// ninjas = [10, 23]
// ninjas = ['yoshi', 'mario'];

// jika belum diinisialisasi [] maka push akan "TypeError: Cannot read property 'push' of undefined"
ninjas.push('shaunia');

console.log(ninjas);

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 123;
// uid = false;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = 'hello';

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: 'mario',
  age: 20,
  beltColour: 'black',
  // skills:
};
