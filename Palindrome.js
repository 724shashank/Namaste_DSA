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
