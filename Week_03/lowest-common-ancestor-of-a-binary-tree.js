/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const parentMap = {};
  const visted = [];

  function defs(node) {
    if (node.left) {
      parentMap[node.left.val] = node;
      defs(node.left);
    }
    if (node.right) {
      parentMap[node.right.val] = node;
      defs(node.right);
    }
  }

  defs(root);

  while (p) {
    visted.push(p.val);
    p = parentMap[p.val];
  }

  while (q) {
    if (visted.includes(q.val)) {
      return q;
    }
    q = parentMap[q.val];
  }

  return null;
};
