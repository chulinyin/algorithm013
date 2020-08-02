/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const length = nums.length;
  let count = 0;
  let j = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    } else {
      count++;
    }
  }

  while (count > 0) {
    nums[length - count] = 0;
    count--;
  }
};
