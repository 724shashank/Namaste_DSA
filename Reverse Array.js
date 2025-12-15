//Write a Program to reverse the array "in place"

let str = ["h", "e", "l", "l", "o"];
let old;
let i = 0;

for (let j = str.length - 1; j >= 0; j--) {
  if (j > i) {
    old = str[j];
    str[j] = str[i];
    str[i] = old;
    i++;
  }
}
console.log(str);
