// Write a program to remove the Duplicates or keep the unique in one in an order in remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

var removeDuplicates = function (nums) {
  let unique = 0;
  let place = 0;
  let count = 1;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[unique] < nums[i]) {
      unique = i;
      place++;
      count++;
      nums[place] = nums[i];
    }
  }
  return count;
};

//By Creating new Array using object to track the occurance of numbers

let arr = [3, 1, 2, 2, 4, 5, 5, 0, 0];
let obj = {};
let sec = [];
let count = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
    sec[count] = arr[i];
    count++;
  }
}

console.log(sec);
