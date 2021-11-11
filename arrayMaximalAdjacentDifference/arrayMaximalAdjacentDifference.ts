function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  const diffs = [];
  for (let index = 0; index < inputArray.length - 1; index++) {
    diffs.push(inputArray[index] - inputArray[index + 1]);
  }
  diffs.map(x => Math.abs(x))
  return Math.max(...diffs);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));