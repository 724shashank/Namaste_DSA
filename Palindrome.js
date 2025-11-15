//Write a Program to find the Given string is palindrome or not

function findPalindrome(str) {
  let arr = str.split("");
  let j = arr.length - 1;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === arr[j]) {
      j--;
    } else {
      return 0;
    }
  }
  return 1;
}

let str = "madam";
if (findPalindrome(str) === 1) {
  console.log(`The Given String ${str} is Palindrome`);
} else {
  console.log(`The Given String ${str} is not a Palindrome`);
}

//Write a Program to find the Given Number is palindrome or not

function checkPanlindrome(num) {
  if (num < 0) return false;
  let numCopy = num;
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev === numCopy;
}

let num = -121;
console.log(
  checkPanlindrome(num)
    ? `Given number ${num} is a Palindrome`
    : `Given number ${num} is not a Palindrome`
);
