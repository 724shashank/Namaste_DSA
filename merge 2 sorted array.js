//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.Merge nums1 and nums2 into a single array sorted in non-decreasing order.The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

var merge = function (nums1, m, nums2, n) {
  let nums1 = [1, 2, 3, 5, 0, 0, 0, 0];
  let nums2 = [3, 4, 5, 6];
  let n = 4;
  let m = 4;
  let p1 = 0;
  let p2 = 0;
  let numCopy = nums1.slice(0, m);
  for (let i = 0; i <= m + n - 1; i++) {
    if (p1 < m && (p2 >= n || numCopy[p1] <= nums2[p2])) {
      nums1[i] = numCopy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }

  console.log(nums1);
};
