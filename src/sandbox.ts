// let greet = () => {
//   console.log('hello world');
// }

// greet = 'hello';

let greet: Function;

greet = () => {
  console.log('hello again');
};

// function 1
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

// '?' adalah optional. jika ada default value, tidak bisa pakai '?'
// '|' adalah union type

add(5, 10, '20');

// function 2
const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);
