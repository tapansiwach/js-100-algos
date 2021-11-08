function addBorder(picture: string[]): string[] {
  // add * on each side of the items in the picture array
  const output = picture.map(item => "*" + item + "*");

  // find the width of the picture
  const width = output[0].length;

  // add a row of * above and below
  let row = "";
  for (let j = 0; j < width; j++) {
    row += "*";
  } // create a row of *, for example "*****"
  output.push(row);
  output.unshift(row);
  return output;
}

// console.log(addBorder(["abc", "ded"]));