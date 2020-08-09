/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const length = nums.length;
  const map = new Map();
  for (let i = 0; i < length; i++) {
    const targetKey = target - nums[i];
    if (map.has(targetKey)) {
      return [map.get(targetKey), i];
    }
    map.set(nums[i], i);
  }
};
