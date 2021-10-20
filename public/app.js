"use strict";
// classes
class Invoice {
    // readonly, private, amount
    //   client: string;
    //   private details: string;
    //   public amount: number;
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on website', 250);
const invTwo = new Invoice('luigi', 'work on hardware', 300);
let invoices = [];
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
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
