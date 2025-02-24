const n = 125;
let number = n;

const conversion = (n) => {
  if (n === 0) return 0;
  let binary = "";
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary;
};
const base2 = conversion(number);
let maxCount = 0,
  currentCount = 0;

for (let char of base2) {
  if (char === "1") {
    currentCount++;
    maxCount = Math.max(maxCount, currentCount);
  } else {
    currentCount = 0;
  }
}
console.log(maxCount);
