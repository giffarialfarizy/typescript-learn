// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'giffari',
  age: 28,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
};

// let someone: IsPerson;
const greetPerson = (person: IsPerson) => {
  console.log('hello ', person.name);
};

greetPerson(me);

console.log(me);

import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mario', 'work on website', 250);
const invTwo = new Invoice('luigi', 'work on hardware', 300);

let invoices: Invoice[] = [];
// invoices.push({name: 'giffari'})
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = 'yoshi';
// invTwo.amount = 'hello';
invTwo.amount = 1000;

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

// console.log(invOne, invTwo);

// batas
const form = document.querySelector(
  '.new-item-form'
) as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector(
  '#details'
) as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
});
