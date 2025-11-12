// Write a Program to Count the digits

function countDigit(num) {
  if (num === 0) return 1;
  else if (num < 0) {
    num = num * -1;
  }
  let i = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    i++;
  }
  return i;
}

console.log(countDigit(12345));
