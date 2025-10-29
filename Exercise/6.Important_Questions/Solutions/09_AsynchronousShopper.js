async function placeOrder(orderId) {
  return new Promise((resolve) => {
    // Simulate a random delay between 1–3 seconds
    const delay = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
      resolve(`Order ${orderId} has been placed successfully!`);
    }, delay);
  });
}

// Example usage:
(async () => {
  console.log("Placing order...");
  const confirmation = await placeOrder(12345);
  console.log(confirmation);
})();
