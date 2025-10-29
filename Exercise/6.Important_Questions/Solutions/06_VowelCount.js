function countVowels(str) {
  const vowels = /[aeiouAEIOU]/g; // matches both uppercase and lowercase vowels
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
}

// Example:
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("AEIOU")); // Output: 5
console.log(countVowels("sky")); // Output: 0
