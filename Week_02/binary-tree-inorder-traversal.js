/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  function inOrderNode(node) {
    if (node) {
      inOrderNode(node.left);
      res.push(node.val);
      inOrderNode(node.right);
    }
  }

  inOrderNode(root);
  return res;
};
