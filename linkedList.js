class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        }
    }

    class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        }

    isEmpty() {
        return this.head === null;
        }

    append(data) {
        const newNode = new Node(data);

    if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
        } else {
        this.tail.next = newNode;
        this.tail = newNode;
        }
    }

    prepend(data) {
        const newNode = new Node(data);
    if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
    }

    delete(data) {
    if (this.isEmpty()) {
        return;
        }

    if (this.head.data === data) {
    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        } else {
        this.head = this.head.next;
        }
            return;
        }

        let current = this.head;

        while (current.next !== null && current.next.data !== data) {
        current = current.next;
        }
        if (current.next !== null) {
        if (current.next === this.tail) {
            this.tail = current;
        }
        current.next = current.next.next;
        }
    }

    toArray() {
    const array = [];
    let current = this.head;

    while (current !== null) {
        array.push(current.data);
        current = current.next;
        }
            return array;
    }
    }

    const list = new LinkedList();

    list.append(10);
    list.append(20);
    list.append(30);
    //list.prepend(5);

  console.log(list.toArray()); // Output: [5, 10, 20, 30]

    list.delete(20);
    list.append(777);

  console.log(list.toArray()); // Output: [5, 10, 30]