// Contoh 1
const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

// bisa diganti menjadi

type StringOrNum = string | number;

const logDetails2 = (uid: StringOrNum, item: string) => {
  console.log(`${item} has also uid of ${uid}`);
};

// Contoh 2
const greet = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} says hello`);
};

// bisa diganti menjadi
type objWithName = { name: string; uid: StringOrNum };

const greet2 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// panggil fungsi
logDetails2(12, 'balok');
greet2({ name: 'Giffari', uid: 1 });
