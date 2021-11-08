function almostIncreasingSequence(sequence: number[]): boolean {
  let biggest = sequence[0];
  let removedIndex;
  // loop through the sequence
  for (let index = 1; index < sequence.length; index++) {
    const number = sequence[index];
    // if number is smaller than already encountered
    if (number < biggest) {
      // try to remove an index if not already removed an index earlier
      if (!removedIndex) {
        removedIndex = index;
      } else {
        return false;
      }
    } else {
      // otherwise, set this number as the biggest encountered so far
      biggest = number;
    }
  }

  return true;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 