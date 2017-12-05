
function isPalindrome(str) {

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[(str.length - 1) - i]) {
            return false;
        }
    }

    return true;
}

let str = 'abbcba';

// console.log(isPalindrome(str));


Array.prototype.myMap = (cb) => {
    let newArr = [];
    this.forEach(el => {
        newArr.push(cb(el));
    });
    return newArr;
};

function random5To7() {
    const arr = [5,6,7];

    let idx = Math.floor(Math.random() * 3);

    return arr[idx];
}

// console.log(random5To7());

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.push = (val) => {
    if (!this.root) {
        this.root = new Node(val);
    }

    let currentNode = this.root;
    let newNode = new Node(val);

    while (currentNode) {
        if (currentNode.val >= newNode.val) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
};

BinarySearchTree.prototype.find = (val) => {

    let currentNode = this.root;

    while (currentNode) {
        if (currentNode.val === val) {
            return currentNode;
        } else if (currentNode.val > val) {
            currentNode = currentNode.left;
        } else if (currentNode.val < val) {
            currentNode = currentNode.right;
        }
    }
    return -1;
};

BinarySearchTree.prototype.maxNode = () => {
    let currentNode = this.root;
    while (currentNode.right) {
        currentNode = currentNode.right;
    }
    return currentNode;
};

BinarySearchTree.prototype.minNode = () => {
    let currentNode = this.root;
    while (currentNode.left) {
        currentNode = currentNode.left;
    }
    return currentNode;
};

BinarySearchTree.prototype.depth = (node, depth = 0) => {
    if (node === undefined) {
        return depth;
    }
    depth += 1;
    let left = this.depth(node.left, depth);
    let right = this.depth(node.right, depth);

    if (left > right) {
        return left; 
    } else {
        return right;
    }
};

BinarySearchTree.prototype.isBalanced = () => {

    let currentNode = this.root;

    let left = this.depth(currentNode.left, 0);
    let right = this.depth(currentNode.right, 0);

    if (Math.abs(left - right) <= 1) {
        return true;
    } else {
        return false;
    }
};

BinarySearchTree.prototype.isBST = (node) => {
    if (node === undefined) {
        return true;
    }

    if (node.left && (node.left.val > node.val)) {
        return false;
    } 
    
    if (node.right && (node.right.val <= node.val)) {
        return false;
    }

    let left = this.isBST(node.left);
    let right = this.isBST(node.right);

    if (left && right) {
        return true;
    } else {
        return false;
    }
};