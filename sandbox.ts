let age: any = 25;
age = true;
console.log(age);

age = 'hello';
console.log(age);

age = {
  name: 'luigi',
};
console.log(age);

// mixed
let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

// salah, bukan pakai sama dengan (=)
// let ninja= {
//   name: any,
//   age: any
// };

let ninja: {
  name: any;
  age: any;
};

ninja = { name: 25, age: 25 };
console.log(ninja);
