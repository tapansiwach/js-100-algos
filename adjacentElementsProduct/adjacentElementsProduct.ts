function adjacentElementsProduct(inputArray: number[]): number {
  let maxProduct = Number.NEGATIVE_INFINITY; // we'll update this as we traverse the array
  // loop through the array starting from the 2nd element
  for (let index = 1; index < inputArray.length; index++) {
    const product = inputArray[index] * inputArray[index - 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}

//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));