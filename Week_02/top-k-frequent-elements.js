/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  nums.forEach(num => {
    if (!map[num]) map[num] = 0;
    map[num] += 1;
  });

  const arr = Object.keys(map).map(key => ({ key, value: map[key] }));
  return arr.sort((a, b) => b.value - a.value).slice(0, k).map(item => item.key)
};