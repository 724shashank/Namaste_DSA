//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.Note that you must do this in-place without making a copy of the array.

var moveZeroes = function (nums) {
  let p1 = 0;
  let p2 = 1;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[p1] === nums[p2]) {
      p2++;
    } else if (nums[p1] === 0 && nums[p2] > nums[p1]) {
      let temp = nums[p1];
      nums[p1] = nums[p2];
      nums[p2] = temp;
      p1++;
    } else {
      p1++;
    }
  }

  console.log(nums);
};
