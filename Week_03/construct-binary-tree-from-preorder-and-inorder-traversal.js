/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder === null || preorder.length === 0) {
    return null;
  }

  root = new TreeNode(preorder[0]);
  const stack = [];
  stack.push(root);

  let inorderIndex = 0;
  for (let i = 1; i < preorder.length; i++) {
    const preorderVal = preorder[i];
    node = stack[stack.length - 1];
    if (node.val != inorder[inorderIndex]) {
      node.left = new TreeNode(preorderVal);
      stack.push(node.left);
    } else {
      while (
        stack.length > 0 &&
        stack[stack.length - 1].val == inorder[inorderIndex]
      ) {
        node = stack.pop();
        inorderIndex++;
      }
      node.right = new TreeNode(preorderVal);
      stack.push(node.right);
    }
  }
  return root;
};
