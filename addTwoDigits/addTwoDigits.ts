function addTwoDigits(n: any): number {
  // README mentions that this is expected to be a two digit number
  // split the digits of the two digit number
  const ones = n % 10;
  const tens = (n - ones) / 10;
  return ones + tens;
}

// console.log(addTwoDigits(29));