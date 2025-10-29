function doubleUniqueConsecutives(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // If the current element is the same as the previous one, skip doubling
    if (i > 0 && arr[i] === arr[i - 1]) {
      result.push(arr[i]); // keep it as is
    } else {
      result.push(arr[i] * 2); // double it
    }
  }

  return result;
}

// Example:
console.log(doubleUniqueConsecutives([1, 2, 2, 3, 4, 4, 4, 5]));
// Output: [2, 4, 2, 6, 8, 4, 4, 10]
