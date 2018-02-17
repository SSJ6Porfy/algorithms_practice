class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node("head node");
        this.tail = new Node("tail node");
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
}

LinkedList.prototype.push = function(val) {
    let newNode = new Node(val);
    let secondLast = this.tail.prev;
    secondLast.next = newNode;
    newNode.prev = secondLast;
    newNode.next = this.tail;
    this.tail.prev = newNode;
};



LinkedList.prototype.pop = function() {
    let secondLast = this.tail.prev;
    let node = secondLast.prev;
    node.next = this.tail;
    this.tail.prev = node;
    secondLast.next = null;
    secondLast.prev = null;
};

LinkedList.prototype.deleteNode = function(node) {
    let prevNode = node.prev;
    let nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    node.prev = null;
    node.next = null;

    return node;
};

LinkedList.prototype.printLinkedList = function() {
    let node = this.head;
    let arr = [];
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    console.log(arr);
};

module.exports = LinkedList;

// let newList = new LinkedList();

// newList.push(1);
// newList.push(2);
// newList.push(3);
// newList.push(0);
// newList.push(9);
// newList.push(8);
// newList.push(7);
// newList.push(5);
// newList.push(2);

// newList.printLinkedList();

// // Problem 1
// function removeDups(linkedList) {
//     let values = {};

//     let node = linkedList.head;

//     while (node) {
//         if (values[node.val]) {
//             linkedList.deleteNode(node);
//         }
//         values[node.val] = true;
//         node = node.next;
//     }

//     return linkedList;
// }

// // removeDups(newList);

// // newList.printLinkedList();

// // Problem 2

// function returnKthToLast(linkedList, k) {
//     let pointer1 = linkedList.head;
//     let pointer2 = linkedList.head;
//     let count = 0;

//     while (count < k + 1) {
//         pointer2 = pointer2.next;
//         count++;
//     }

//     while (pointer2) {
//         pointer1 = pointer1.next;
//         pointer2 = pointer2.next;
//     }

//     return pointer1.val;
// }

// // newList.printLinkedList();
// // console.log(returnKthToLast(newList, 4));

// // Problem 3

// function deleteMiddleNode(node) {
//     let nextNode = node.next;
//     let value = nextNode.val;

//     node.val = value;
//     node.next = nextNode.next;
//     nextNode.prev = null;
//     nextNode.next = null;
// }

// let node1 = newList.head.next.next;

// deleteMiddleNode(node1);

// newList.printLinkedList();


