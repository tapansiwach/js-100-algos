function arrayPreviousLess(items: number[]): number[] {
  const copy = [...items];
  const output = Array(items.length).fill(-1);
  for (let index = 0; index < copy.length; index++) {
    for (let idx = 0; idx < index; idx++) {
      if (copy[idx] < copy[index]) {
        output[index] = copy[idx];
      }
    }
  }
  return output;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));