class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

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


let root = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);

root.left = child1;
root.right = child2;

child1.left = new Node(4);
child1.right = new Node(5);
child2.left = new Node(6);
child2.right = new Node(7);


// let tree = bfs(root);

// printTree(tree);

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

let arr1 = [1,2,3,4,5,6];

let newTree = minimalTree(arr1);

console.log(newTree);

