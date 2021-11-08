function allLongestStrings(inputArray: string[]): string[] {
  // create an output array and place the first item from input in it
  const output = [inputArray[0]];
  // loop over the remaining items in input array
  for (let index = 1; index < inputArray.length; index++) {
    const item = inputArray[index];
    // if item's length is not big enough, continue to next iteration
    if (item.length < output[0].length) continue;
    // if item length is greater than what's in output array
    if (item.length > output[0].length) {
      // clear the output 
      output.length = 0;
    }
    output.push(item);
  }
  return output;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));