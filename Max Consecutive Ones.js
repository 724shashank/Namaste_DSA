//Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let x = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > 0) {
      x++;
      if (maxCount < x) {
        maxCount = x;
      }
    } else {
      x = 0;
    }
  }
  return maxCount;
};
