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
