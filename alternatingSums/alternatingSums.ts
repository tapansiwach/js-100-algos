function alternatingSums(a: number[]): number[] {
  return a.reduce((acc, x, index) => {
    return index % 2 === 0 ? [acc[0] + x, acc[1]] : [acc[0], acc[1] + x];
  }, [0, 0]);
}

console.log(alternatingSums([50, 60, 60, 45, 70]))