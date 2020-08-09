/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];

  function levelOrderNode(node, level) {
    if (node) {
      if (res.length <= level) {
        res[level] = [];
      }
      res[level].push(node.val);
      node.children.forEach((n) => {
        levelOrderNode(n, level + 1);
      });
    }
  }
  levelOrderNode(root, 0);
  return res;
};
