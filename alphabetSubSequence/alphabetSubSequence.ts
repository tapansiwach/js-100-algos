function alphabetSubsequence(s: string): boolean {
  // find the ascii code for the first letter in sequence
  let maxAscii = s.charCodeAt(0);
  // loop over the remaining sequence
  for (let index = 1; index < s.length; index++) {
    // find the ascii char code for the letter in sequence
    const ascii = s.charCodeAt(index);
    // if ascii code is lower than already encountered, return false...
    if (ascii <= maxAscii) {
      return false;
    } else {
      // ... otherwise, update the maximum ascii code encountered
      maxAscii = ascii;
    }
  }
  return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
