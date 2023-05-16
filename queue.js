class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
        throw new Error("No elements in queue !!!..");
    }
            return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
        throw new Error("No elements in queue !!!..");
    }
            return this.items[0];
    }

    isEmpty() {                            
            return this.items.length === 0;
    }       
    // this function returned boolean value

    size() {
            return this.items.length;
    }

    print() {
        let queueString = "";
        for (let i = 0; i < this.items.length; i++) {
        queueString += this.items[i] + " ";
    }
        console.log("Queue: " + queueString.trim());
    }
}
    // example testing
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.print();                                         // Output: Queue: 10 20 30
    console.log(`Front element:  ${queue.front()}`);       // Output: Front element: 10
    console.log(`Dequeued element:   ${queue.dequeue()}`); // Output: Dequeued element: 10
    console.log(`Size: ${queue.size()}`);                  // Output: Size: 2
    console.log(`Is queue empty?  ${queue.isEmpty()}}`);    // Output: Is queue empty? false
