function Stack() {
    this.store = [];

    this.push = (val) => {
        this.store.push(val);
    };

    this.pop = () => {
        let val = this.store.pop();
        return val;
    };

    this.peek = () => {
        console.log(this.store[this.store.length - 1]);
        return this.store[this.store.length - 1];
    };
}




let testStack = new Stack();

testStack.push(1);
testStack.peek();
testStack.push(2);
testStack.peek();
testStack.push(1);
let val = testStack.pop();
testStack.peek();
