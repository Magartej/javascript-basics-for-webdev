function mirrorString(str) {
  const reversed = str.split("").reverse().join("");
  return str + reversed;
}

// Example:
console.log(mirrorString("hello"));
// Output: "helloolleh"
