/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let result = [];
  function preorderNode(node) {
    if (node) {
      result.push(node.val);
      node.children.forEach((n) => {
        preorderNode(n);
      });
    }
  }
  preorderNode(root);
  return result;
};
