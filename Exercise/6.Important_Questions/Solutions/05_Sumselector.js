function sumUntilNegative(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num < 0) break; // stop summing when a negative number is found
    sum += num;
  }

  return sum;
}

// Example:
console.log(sumUntilNegative([2, 4, 6, -1, 5])); // Output: 12
console.log(sumUntilNegative([10, 20, 30])); // Output: 60
console.log(sumUntilNegative([-5, 10, 20])); // Output: 0
