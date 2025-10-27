console.log("This is strings tutorial");
let a = "Ram";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length);

let real_name = "Ram";
let friend = "Rohan";
console.log("His name is " + real_name + " and his friends name is " + friend);
console.log(`His name is ${real_name} and his friends name is ${friend}`);

let b = "ShivamSh";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1, 5));
console.log(b.slice(1));

console.log(b.replace("Sh", "77"));
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"));
// concat does not change the original string but returns a new string added with the concatenated values

console.log(b);
