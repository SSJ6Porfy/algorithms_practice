// class Node {
//     constructor(val) {
//         this.val = val;
//         this.children = {};
//         this.completeWord = false;
//     }
// }

function makeTrie(root, part) {
    if (part === "") {
        root.completeWord = true;
        return root;
    }
    let newNode = new Node(part[0]);
    if (!root.children[part[0]]) {
        root.children[part[0]] = newNode;
    } else {
        newNode = root.children[part[0]];
    }
    makeTrie(newNode, part.slice(1));
    return root;
}

function findSubstrings(words, parts) {
    let result = [];
    let root = new Node(null);
    
    for (let i = 0; i <parts.length; i++) {
        makeTrie(root, parts[i]);  
    };
    
    for (let i = 0; i < words.length; i++) {
        let long = 0;
        let idx = 0;
        let currWord = words[i];
        
        let j = 0
        let currLong = 0
        let currIdx = 0
        while (j < currWord.length) {
            let currNode = checkWord(root, currWord[j])
            let last = j + 1;
            while (currNode) {
                if (!currNode.completeWord && currLong === 0) {
                    currIdx = j;
                    currLong += 1;
                } else if (!currNode.completeWord) {
                    currLong += 1
                } else if (currNode.completeWord && currLong === 0) {
                    currLong += 1;
                    currIdx = j
                    if (currLong > long) {
                        long = currLong;
                        idx = currIdx;
                    }
                } else if (currNode.completeWord) {
                    currLong += 1;
                    if (currLong > long) {
                        long = currLong;
                        idx = currIdx;
                    }
                } else {
                    currLong = 0;
                    currIdx = 0;
                }
                j += 1;
                currNode = checkWord(currNode, currWord[j]);
            }
            if (!currNode) {
                currIdx = j;
                currLong = 0;
                j = last;
                
            }
        }
        
        if (long) {
            let begin = currWord.substr(0, idx);
            let mid = currWord.substr(idx, long);
            let end = currWord.substr(idx + long, currWord.length - 1);
            result.push(begin + '[' + mid + ']' + end);
        } else {
            result.push(currWord);
        }
    }
    return result;
}

function checkWord(tree, chr) {
    if (!tree) { return false; }
    return tree.children[chr];
}


class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val);
  }
}

BinarySearchTree.prototype.insert = function(val) {
    let currentNode = this.root;
    let newNode = new Node(val);
  
    while (currentNode) {
      if (currentNode.value > val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          break;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          break;
        }
      }
    }
  
    return newNode;
  };


let tree1 = new BinarySearchTree(10);
tree1.insert(2);
tree1.insert(1);
tree1.insert(6);
tree1.insert(3);
tree1.insert(9);
tree1.insert(5);
tree1.insert(7);
tree1.insert(4);
tree1.insert(8);
tree1.insert(-1);
tree1.insert(1.5);


let rt = tree1.root;
let q = [2];

// console.log("mine", rt);
let newRt = deleteFromBST(rt, q);

// console.log("Mine", newRt);
// console.log("CD", JSON.parse('{"value":7,"left":{"value":2,"left":{"value":1,"left":null,"right":null},"right":{"value":6,"left":{"value":4,"left":{"value":3,"left":null,"right":null},"right":{"value":5,"left":null,"right":null}},"right":null}},"right":null}'));
// console.log("CF Sample:",JSON.parse('{"value":7,"left":{"value":2,"left":{"value":1,"left":null,"right":null},"right":{"value":4,"left":{"value":3,"left":null,"right":null},"right":{"value":5,"left":null,"right":null}}},"right":null}'));
console.log(newRt);
// console.log(rt.right);


function deleteFromBST(t, queries) {
    if (!t) { return null; }
    let root = t;
    for (let i = 0; i < queries.length; i ++) {
        let query = queries[i];
        root = removeNode(root, query);
        if (!root) { return null;}
    }
    return root;
}
  
function removeNode(root, value) {
    let currentNode = root;

    while (currentNode) {
        if (currentNode.left && currentNode.left.value === value) {
            let nodeToDelete = currentNode.left;
            let newSubtree;
            if (nodeToDelete.left) {
                if (!nodeToDelete.left.right) {
                    newSubtree = nodeToDelete.left;
                    newSubtree.right = nodeToDelete.right;
                } else {
                    newSubtree = deepestRightNode(nodeToDelete.left);
                    newSubtree.left = nodeToDelete.left;
                    newSubtree.right = nodeToDelete.right;
                }
            } else {
                newSubtree = nodeToDelete.right;
            }
            currentNode.left = newSubtree;
            return root;
        } else if (currentNode.right && currentNode.right.value === value) {
            let nodeToDelete = currentNode.right;
            let newSubtree;
            if (nodeToDelete.left) {
                if (!nodeToDelete.left.right) {
                    newSubtree = nodeToDelete.left;
                    newSubtree.right = nodeToDelete.right;
                } else {
                    newSubtree = deepestRightNode(nodeToDelete.left);
                    newSubtree.left = nodeToDelete.left;
                    newSubtree.right = nodeToDelete.right;
                }
            } else {
                newSubtree = nodeToDelete.right;
            }
            currentNode.right = newSubtree;
            return root;
        } else if (currentNode.value === value) {
            if (currentNode.left) {
                let newRoot = deepestRightNode(currentNode.left);
                if (newRoot === currentNode.left) {
                    newRoot.right = currentNode.right;
                } else {
                    newRoot.left = currentNode.left;
                    newRoot.right = currentNode.right;
                }
                currentNode.left = null;
                currentNode.right = null;
                return newRoot;
            } else if (currentNode.right) {
                let child = currentNode.right;
                currentNode.left = null;
                currentNode.right = null;
                return child;
            } else {
                return null;
            }
        } else if (currentNode.value > value) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }
    return root;
}

function deepestRightNode(node) {
    while (node.right) {
        if (!node.right.right) {
            let child = node.right;
            if (child.left) {
                node.right = child.left;
            } else {
                node.right = null;
            }
            return child;
        }
        node = node.right;
    }
    return node;
}