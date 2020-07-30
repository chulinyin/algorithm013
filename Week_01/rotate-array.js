/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  let realK = k % nums.length;
  while (realK > 0) {
    nums.unshift(nums.pop());
    realK--;
  }
};
