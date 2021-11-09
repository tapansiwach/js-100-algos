function areSimilar(a: number[], b: number[]): boolean {
  // if arrays are of different lengths, they can't be similar
  if (a.length !== b.length) return false;

  // define variables for two possible indices where the mismatch may occur
  let first, second;

  // loop over the two arrays...
  for (let index = 0; index < a.length; index++) {
    // if entries at an index do not match, 
    // remember the index where the mismatch occurred
    if (a[index] !== b[index]) {
      if (!first) {
        first = index;
      } else if (!second) {
        second = index;
        // after second mismatch, 
        // check if the values to be swapped are equal
        if (a[first] !== b[second]
          || a[second] !== b[first]
        ) return false;
      } else { // no more than two mismatches are allowed
        return false;
      }
    }
  }

  return true;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
