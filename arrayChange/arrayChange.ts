function arrayChange(inputArray: number[]): number {
  let upMoves = 0;
  for (let index = 1; index < inputArray.length; index++) {
    const diff = inputArray[index] - inputArray[index - 1];
    if (diff > 0) continue;

    upMoves += 1 - diff;
    inputArray[index] = inputArray[index - 1] + 1;
  }

  return upMoves;
}

console.log(arrayChange([1, 1, 1]));