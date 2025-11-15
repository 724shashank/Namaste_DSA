function checkPanlindrome(num) {
  let numCopy = num;
  let rev = 0;
  num = Math.abs(num);
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  // let limit = Math.pow(2,31) or console.log(2**31) gives same output
  if (rev < -2147483648 || rev > 2147483647) {
    return 0;
  } else {
    return numCopy < 0 ? -1 * rev : rev;
  }
}

let num = -120;
console.log(checkPanlindrome(num));
