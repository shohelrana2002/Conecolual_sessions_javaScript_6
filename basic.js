// primitive data type
let a = 1;
const b = "hgh";
const c = true;

let f = a;
f = 10;
console.log("a=:", a);
console.log("a=:", f);
// non primitive data type
const d = [10, 20, 30, 4, 5, 20];
const e = {
  id: 1,
  name: "shohel",
  salrey: 500,
};
console.log(e);
const g = e;
g.salrey = 5000;
console.log(g);

let x = [10, 20, 30, 40, 40];
console.log(x);
let y = x;

y.push(4000);
console.log(y);
// !! 2 ta diye false ki na checak kora hoy
