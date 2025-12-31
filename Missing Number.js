//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
let len = nums.length;
let st = new Set(nums);
for(let i=0;i<=len;i++){
    if(!st.has(i)){
        return i
    }
}
};