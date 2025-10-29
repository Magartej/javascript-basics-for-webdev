async function doubleNumbersAsync(numbers) {
  // Map each number to a Promise that resolves after 500ms
  const promises = numbers.map(
    (num) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(num * 2);
        }, 500);
      })
  );

  // Wait for all Promises to resolve and return the results
  return Promise.all(promises);
}

// Example usage:
(async () => {
  const result = await doubleNumbersAsync([1, 2, 3, 4]);
  console.log(result); // Output: [2, 4, 6, 8]
})();
