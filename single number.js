//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.You must implement a solution with a linear runtime complexity and use only constant extra space.

//Using Sort 2 pointers and sorting

var singleNumber = function (nums) {
  nums.sort();
  let p1 = 0;
  let p2 = 1;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[p1] !== nums[p2]) {
      return nums[p1];
    } else {
      p1 = 1 + p2;
      p2 = 1 + p1;
    }
  }
};

//Using HashMaps means simple objects using keys , value pairs

const arr = [1, 1, 2, 2, 3, 4, 4, 3, 6];
let obj = {};

for (let i = 0; i <= arr.length - 1; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]]++;
  }
}

for (let j = 0; j <= arr.length - 1; j++) {
  if (obj[arr[j]] !== 2) {
    console.log(arr[j]);
  }
}

//Using Bitwise XOR => (^)

const arr1 = [1, 1, 2, 2, 3, 4, 4, 6, 6];
let result = 0;

for (let i = 0; i <= arr1.length - 1; i++) {
  result ^= arr1[i];
}
console.log(result);
