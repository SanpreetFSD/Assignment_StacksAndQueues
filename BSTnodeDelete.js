class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(val) {
      const newNode = new TreeNode(val);
      if (this.root === null) {
        this.root = newNode;
        return this;
      } else {
        let current = this.root;
        while (true) {
          if (val === current.val) return undefined;
          if (val < current.val) {
            if (current.left === null) {
              current.left = newNode;
              return this;
            }
            current = current.left;
          } else {
            if (current.right === null) {
              current.right = newNode;
              return this;
            }
            current = current.right;
          }
        }
      }
    }
  
    find(val) {
      if (this.root === null) return false;
      let current = this.root;
      while (current) {
        if (val === current.val) return true;
        if (val < current.val) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
    }
  
    remove(val) {
      if (this.root === null) return undefined;
  
      let current = this.root;
      let parent = null;
      let found = false;
      while (!found && current) {
        if (val < current.val) {
          parent = current;
          current = current.left;
        } else if (val > current.val) {
          parent = current;
          current = current.right;
        } else {
          found = true;
        }
      }
  
      if (!found) return undefined;
  
      if (current.left === null && current.right === null) {
        // Case 1: current is a leaf node
        if (parent === null) {
          // current is the root node
          this.root = null;
        } else if (current === parent.left) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if (current.left === null || current.right === null) {
        // Case 2: current has 1 child node
        const child = current.left || current.right;
        if (parent === null) {
          // current is the root node
          this.root = child;
        } else if (current === parent.left) {
          parent.left = child;
        } else {
          parent.right = child;
        }
      } else {
        // Case 3: current has 2 child nodes
        let successor = current.right;
        let successorParent = current;
        while (successor.left !== null) {
          successorParent = successor;
          successor = successor.left;
        }
        if (successorParent !== current) {
          successorParent.left = successor.right;
          successor.right = current.right;
        }
        successor.left = current.left;
        if (parent === null) {
          // current is the root node
          this.root = successor;
        } else if (current === parent.left) {
          parent.left = successor;
        } else {
          parent.right = successor;
        }
      }
  
      return current;
    }
  }
  
  // Example usage:
  const bst = new BST();
  bst.insert(5);
  bst.insert(3);
  bst.insert(7);
  bst.insert(2);
  bst.insert(4);
  bst.insert(6);
  bst.insert(8);
  console.log(bst.remove(5)); // Output: TreeNode { val: 5
  