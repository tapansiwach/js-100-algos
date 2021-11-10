function arrayConversion(inputArray: number[]): number {
  let copy = [...inputArray];
  let runCount = 0;
  let output = [];

  while (copy.length > 1) {
    output.length = 0;
    runCount += 1;
    if (runCount % 2 === 1) {
      for (let index = 0; index < copy.length - 1; index += 2) {
        output.push(copy[index] + copy[index + 1]);
      }
    } else {
      for (let index = 0; index < copy.length - 1; index += 2) {
        output.push(copy[index] * copy[index + 1]);
      }
    }
    copy = [...output];
  }

  return output[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
