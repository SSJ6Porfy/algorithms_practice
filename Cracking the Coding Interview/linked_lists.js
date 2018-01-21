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

LinkedList.prototype.deleteNode = function(val) {
    let node = this.head;

    while (node) {
        node = node.next;
        if (node.val === val) {
            break;
        }
    }

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

let newList = new LinkedList;

newList.push(1);
newList.push(2);
newList.push(3);

newList.printLinkedList();

newList.deleteNode(2);

newList.printLinkedList();

