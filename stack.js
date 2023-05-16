class Stack {
    constructor() {
        this.arr = [];
    }

    push(value) {
        this.arr.push(value);
    }

    pop() {
            /*let val = this.arr[this.arr.length - 1];
            this.arr[this.arr.length - 1] = null;
            return val;*/
        return this.arr.pop();
    }
    top() {
        return this.arr[this.arr.length - 1];
    }
}

const stack = new Stack();
stack.push(11); // I add elements to the array with push()
stack.push(22);
stack.push(33);
stack.push(44);
console.log(stack.pop()); // returns  44  the last element. 
console.log(stack.arr); // then deletes it   [ 11, 22, 33]
console.log(stack.top()); // using top() I want it to return  33  the last element
console.log(stack.arr); //as we can see our array has not changed  [11, 22, 33]


