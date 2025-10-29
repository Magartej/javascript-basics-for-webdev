function isValidPassword(password) {
  const minLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);

  return minLength && hasUppercase && hasLowercase && hasDigit;
}

// Example:
console.log(isValidPassword("Password123")); // true
console.log(isValidPassword("password")); // false
console.log(isValidPassword("PASS1234")); // false
console.log(isValidPassword("Pass12")); // false
