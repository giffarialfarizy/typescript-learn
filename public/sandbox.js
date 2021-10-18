"use strict";
// Contoh 1
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const logDetails2 = (uid, item) => {
    console.log(`${item} has also uid of ${uid}`);
};
// Contoh 2
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const greet2 = (user) => {
    console.log(`${user.name} says hello`);
};
// panggil fungsi
logDetails2(12, 'balok');
greet2({ name: 'Giffari', uid: 1 });
