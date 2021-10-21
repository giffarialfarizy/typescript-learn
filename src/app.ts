import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter';

const form = document.querySelector(
  '.new-item-form'
) as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector(
  '#details'
) as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(
      tofrom.value,
      details.value,
      amount.valueAsNumber
    );
  } else {
    doc = new Payment(
      tofrom.value,
      details.value,
      amount.valueAsNumber
    );
  }

  list.render(doc, type.value, 'end');

  // console.log(doc);
});

// GENERICS
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello');

console.log(docOne.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<string[]> = {
  uid: 1,
  resourceName: 'shoppingList',
  data: ['test'],
};

const docFour: Resource<object> = {
  uid: 2,
  resourceName: 'person',
  data: { name: 'shaun' },
};

console.log(docThree, docFour);
