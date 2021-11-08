function absoluteValuesSumMinimization(a: number[]): number {
  // effectively, we're finding the middle value in the array it seems
  // step-1: find the length of the array
  const length = a.length;
  // find the middle value
  const middle = (length % 2 === 0) ? length / 2 - 1 : Math.floor(length / 2);
  return a[middle];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));