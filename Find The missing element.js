//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function (nums) {
  let len = nums.length;
  nums.sort();
  for (let i = 0; i <= len; i++) {
    if (nums[i] !== i) {
      console.log(nums[i]);
      return i;
    }
  }
};

let nums = [9, 6, 4, 2, 8, 5, 7, 0, 1];
console.log(missingNumber(nums));
