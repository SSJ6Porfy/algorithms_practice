 const LinkedList = require('./linked_lists.js');

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val);
  }
}

let deepestLeftNode = function(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
};

let deepestRightNode = function(node) {
  while (node.right) {
    node = node.right;
  }
  return node;
};

BinarySearchTree.prototype.insert = function(val) {
  let currentNode = this.root;
  let newNode = new Node(val);

  while (currentNode) {
    if (currentNode.val > val) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      }
    } else {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      }
    }
  }

  return newNode;
};

BinarySearchTree.prototype.find = function(val) {
  let currentNode = this.root;

  while (currentNode) {
    if (currentNode.val === val) {
      return currentNode;
    } else if (currentNode.val > val) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return -1;
};

BinarySearchTree.prototype.delete = function(val) {
  let currentNode = this.find(val);
  let replacementNode = null;
  
  if (!currentNode) {
    return -1;
  }

  let parent = currentNode.parent;

  if (currentNode.left) {
    replacementNode = deepestRightNode(currentNode.left);
  } else if (currentNode.right) {
    replacementNode = deepestLeftNode(currentNode.right);
  }

  if (replacementNode) {
    if (parent.val < replacementNode.val) {
      parent.right = replacementNode;
      replacementNode.right = currentNode.right;
    } else {
      parent.left = replacementNode;
      replacementNode.left = currentNode.left;
    }
    replacementNode.parent = currentNode.parent;
  } else {
    if (parent.val > currentNode.val) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  }

  currentNode.left = null;
  currentNode.right = null;
  currentNode.parent = null;
  
  return currentNode;
};

let bfs = function(root) {
  let result = [];

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }

    result.push(node.val);
  }

  return result;
};

let productExceptSelf = function(nums) {

    const result = [];
  
    for (let i = 0; i < nums.length; i ++) {
      result.push(nums.reduce((product, number, idx) => {
        if (idx !== i) {
          console.log('Product/number/index: ', product, number, idx);
          return product * number;
        } else {
          return product;
        }
      }, 1))
    }
  
    return result;
};


let printTree = function(arr) {
  let rowSize = 1;
  let idx = 0;
  while (rowSize < arr.length) {
    let row = arr.slice(idx, idx+rowSize);
    console.log(row);
    let edges = [];
    row.forEach((parent) => {
      edges.push("/", '\\');
    });
    console.log(edges);
    idx = idx + rowSize;
    rowSize = rowSize * 2;
  }
};


let minimalTree = function(arr) {
  if (arr.length === 1) {
    return new Node(arr[0]);
  } else if (arr.length === 0) {
    return new Node(null);
  }

  let mid = Math.floor(arr.length / 2);
  
  let parentNode = new Node(arr[mid]);

  parentNode.left = minimalTree(arr.slice(0,mid));
  
  parentNode.right = minimalTree(arr.slice(mid+1, arr.length));
  
  return parentNode;
};



let listOfDepths = function(root) {
  if (!root) {
    return null;
  }
  let result = [];

  let currentLevel = [root];

  while (currentLevel.length > 0) {
    let nextLevel = [];
    let list = new LinkedList();
    
    currentLevel.forEach((node) => {
      list.push(node.val);
    });

    result.push(list);

    while (currentLevel.length > 0) {
      let node = currentLevel.shift();
      if (node.left) {
        nextLevel.push(node.left);
      }
  
      if (node.right) {
        nextLevel.push(node.right);
      }
    }

    currentLevel = nextLevel;
  }
  
  return result;
};

// listOfDepths(root1);

const dfs = function(root, depth = -1) {
  if (!root) {
    return depth;
  }
  
  depth += 1;
  let left = dfs(root.left, depth);
  let right = dfs(root.right, depth) ;

  return Math.max(left,right);
};

const isTreeBalanced = function(root) {
  if (!root) {
    return true;
  }

  let leftSub = dfs(root.left);
  let rightSub = dfs(root.right);

  return Math.abs(leftSub - rightSub) < 2;
};

// console.log(isTreeBalanced(root1));

const validBST = function(root, min = null, max = null) {
  if (!root.left && !root.right) {
    return true;
  }

  if ((max && root.left) && root.left.val > max) {
    return false;
  } else if ((min && root.right) && root.right.val < min) {
      return false;
  } else if ((root.left && root.right) && (root.left.val > root.val || root.right.val < root.val)) {
    return false;
  }
  
  let result = (validBST(root.left, min = null, max = root.val) &&
                validBST(root.right, min = root.val, max = null));

  return result;
};

let tree1 = new BinarySearchTree(6);
tree1.insert(4);
tree1.insert(13);
tree1.insert(20);
tree1.insert(8);
tree1.insert(52);
tree1.insert(17);

// console.log(tree1.delete(52));
// console.log(tree1.root.right);

// console.log(validBST(root1));

let successor = function(root) {
  if (root.right) {
    return deepestLeftNode(root.right).val;
  }

  let currentNode = root.parent;

  while (currentNode) {
    if (currentNode.left.val === root.val) {
      break;
    } else if (currentNode.val > root.val) {
      break;
    } else {
      currentNode = currentNode.parent;
    }
  }
  
  if (currentNode) {
    return currentNode.val;
  } else {
    return -1;
  }
  
};

let pathsWithSum = function(root, sum = 0, target, count) {
  if (!root) {
    return 0;
  }

  sum += root.val;

  if (sum === target) {
    return 1;
  }

  if (sum > target) {
    sum = root.val;
  }

  count += pathsWithSum(root.left, sum, target, count);
  console.log(count);
  count += pathsWithSum(root.right, sum, target, count);
  console.log(count);
  return count; 
};

console.log(pathsWithSum(tree1.root, 0, 10, 0));

