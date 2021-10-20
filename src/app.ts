// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on website', 250);
const invTwo = new Invoice('luigi', 'work on hardware', 300);

let invoices: Invoice[] = [];
// invoices.push({name: 'giffari'})
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = 'yoshi';
// invTwo.amount = 'hello';
invTwo.amount = 1000;

console.log(invOne, invTwo);

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
