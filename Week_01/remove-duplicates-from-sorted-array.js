/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};
