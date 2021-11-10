function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let max = Number.NEGATIVE_INFINITY;
  for (let index = 0; index < inputArray.length - k + 1; index++) {
    const copy = inputArray.slice(index, index + k);
    const sum = copy.reduce((acc, x) => acc + x, 0);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));