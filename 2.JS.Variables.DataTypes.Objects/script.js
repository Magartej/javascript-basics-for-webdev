console.log("Hey");

// var and let are used to declare variables
// var has global scope
// let has block scope

var a = 5;
// a = a + 1
let b = 6;
let c = "Ram";
let _a = "Hari";
// var 55a = "Rohan";
// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);

// Here 55a is invalid variable name as variable name cannot start with a number,
// cannot have spaces, cannot have special characters except _ and $

{
  // let a = 66;
  console.log(a);
}
console.log(a);
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant

// -------------------------------------

// Data Types in JS
// 1. Primitive Data Types are String, Number, Boolean, Undefined, Null, Symbol, BigInt
// 2. Non-Primitive Data Types are Objects, Arrays, Functions

let x = "Raj";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// -------------------------------------

// Objects in JS
// Objects are used to store multiple key-value pairs

let o = {
  name: "Krish",
  "job code": 5600, // here job code have double cote because there cannot be space in key
  is_handsome: true,
};

console.log(o);
o.salary = "100";
console.log(o);
o.salary = "500";
console.log(o);
