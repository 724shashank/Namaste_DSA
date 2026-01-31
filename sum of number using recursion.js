function sum(n) {
  if (n === 0) return 0;

  return n + sum(n - 1);
}

console.log(sum(10));

//Sum of number in an Array

let arr = [2, 3, 4, 8, 1];
function sum(i) {
  if (i < 0) return 0;

  return arr[i] + sum(i - 1);
}

console.log(sum(arr.length - 1));

//Factorial of n

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(6));
