function deleteBinaryTree(root) {
    if (root == null) {
      return;
    }
  
    const queue = [];
    queue.push(root);
  
    while (queue.length > 0) {
      const currNode = queue.shift();
  
      if (currNode.left != null) {
        queue.push(currNode.left);
      }
  
      if (currNode.right != null) {
        queue.push(currNode.right);
      }
  
      delete currNode;
    }
  }

