function alphabeticShift(inputString: string): string {
  return inputString.split("").map(char => {
    if (char === "z") return "a";
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }).join("");
}

console.log(alphabeticShift('crazy'));