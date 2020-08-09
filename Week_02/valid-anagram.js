/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let result = true;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] ? (map[char] += 1) : (map[char] = 1);
  }

  for (let j = 0; j < t.length; j++) {
    const char = t[j];
    if (!map[char]) {
      result = false;
      break;
    } else {
      map[char] -= 1;
    }
  }

  Object.keys(map).forEach((char) => {
    if (map[char] > 0) {
      result = false;
    }
  });
  return result;
};
