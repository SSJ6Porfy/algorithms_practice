class Stack {
    constructor() {
        this.store = [];
        this.length = 0;
        // this.min = null;
    }
}

Stack.prototype.push = function(val) {
    let store = this.store;
    let min = this.min;

    // if (!min) {
    //     this.min = val;
    //     store.push(val);
    // } else if (min > val) {
    //     let value = ((val*2) - min);
    //     this.min = val;
    //     store.push(value);
    // } else if (min < val) {
    //     store.push(val);
    // }

    this.store.push(val);
    this.length++;
    return this.store;
};

Stack.prototype.pop = function() {
    let store = this.store;
    let val = store.pop();
    // let min = this.min;
    this.length--;
    // if (min > val) {
    //     this.min = ((2*min) - (val));
    //     return min;
    // } else {
    //     return val;
    // }
    return val;
};

Stack.prototype.peek = function() {
    let store = this.store;
    return store[this.length - 1];  
};

Stack.prototype.isEmpty = function() {
    return this.length === 0;  
};

Stack.prototype.getMin = function() {
    return this.min;
};

Stack.prototype.sortStack = function() {
    let unsorted = true;
    let tempStack = new Stack();

    while (unsorted) {
        if (this.isEmpty()) {
            unsorted = false;
            break;
        }
        let temp = this.pop();

        if (tempStack.isEmpty()) {
            tempStack.push(temp);
        } else {
            let tempTop = tempStack.pop();
            if (temp < tempTop) {
                while (tempTop !== null && temp < tempTop) {
                    this.push(tempTop);
                    tempTop = tempStack.pop();
                }
                if (tempTop) {
                    tempStack.push(tempTop);
                }
                tempStack.push(temp);
            } else {
                tempStack.push(tempTop);
                tempStack.push(temp);
            }
        }   
    }
    
    while (tempStack.store.length > 0) {
        this.push(tempStack.pop());
    }
    console.log(this.store, tempStack.store);
    return null;
};

class Queue {
    constructor() {
        this.store = [];
        this.length = 0;
    }
}

Queue.prototype.enqueue = function(val) {
    let store = this.store;
    store.push(val);
    this.length++;
    return this.store;
};

Queue.prototype.dequeue = function() {
    let store = this.store;
    let val = store.shift();
    this.length--;
    return val;
};

Queue.prototype.peek = function() {
    let store = this.store;
    return store[0];  
};

Queue.prototype.isEmpty = function() {
    return this.length === 0;  
};

let testStack = new Stack();
let testQueue = new Queue();

testStack.push(9);
testStack.push(5);
testStack.push(4);
testStack.push(3);
testStack.push(1);


console.log(testStack.store);

testStack.sortStack();