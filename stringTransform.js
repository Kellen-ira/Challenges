function transformString(s) {
  // Convert each character to its ASCII code and join them into a string
  const asciiStr = Array.from(s)
    .map((c) => String.fromCharCode(c.charCodeAt(0)))
    .join(" ");

  // Reverse the string
  const reversedStr = s.split("").reverse().join("");

  // Determine the transformation based on the length of the string
  if (s.length % 15 === 0) {
    // Remove spaces introduced during reversal
    return reversedStr.replace(/\s/g, "");
  } else if (s.length % 5 === 0) {
    // Remove leading/trailing whitespace
    return asciiStr.trim();
  } else if (s.length % 3 === 0) {
    return reversedStr;
  } else {
    return s;
  }
}

console.log(transformString("Hamburger"));
console.log(transformString("Pizza"));
console.log(transformString("Chocolate Chip Cookie"));
