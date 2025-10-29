async function brewCoffee(type) {
  return new Promise((resolve) => {
    // Simulate brewing time between 1–4 seconds
    const delay = Math.floor(Math.random() * 3000) + 1000;

    console.log(`Brewing your ${type}...`);

    setTimeout(() => {
      resolve(`Your ${type} is ready! Enjoy!`);
    }, delay);
  });
}

// Example usage:
(async () => {
  const coffeeType = "Cappuccino";
  const message = await brewCoffee(coffeeType);
  console.log(message);
})();
