let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
// console.log(a[0][1]);
// console.log(a.length);
let maxValue = 0;
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    const a = arr[i][j];
    const b = arr[i][j + 1];
    const c = arr[i][j + 2];
    const d = arr[i + 1][j + 1];
    const e = arr[i + 2][j];
    const f = arr[i + 2][j + 1];
    const g = arr[i + 2][j + 2];
    const sum = a + b + c + d + e + f + g;
    if (sum > maxValue) {
      maxValue = sum;
    }
  }
}
console.log(maxValue)