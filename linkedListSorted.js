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
        //Checks if the list is empty
        return this.head === null;
        }

    append(data) {
        const newNode = new Node(data);
        // If the list is empty the new element becomes the head
        if (!this.head) {
            this.head = newNode;
                return;
        }

        //If new element less then head of list, it becomes the new head 
        if (data < this.head.data) {
            newNode.next = this.head;
            this.head = newNode;
                return;
        }
        let current = this.head;

        // Find the position to insert the new element
        while (current.next && data > current.next.data) {
        current = current.next;
        }
        //Insert a new element after the current element
        newNode.next = current.next;
        current.next = newNode;
    }

    // Method to get the largest element of a list
    getMax() {
        if (!this.head) {
            // return null when list is empty
                return null;
    }
        let current = this.head;
        let max = this.head.data;
        while (current) {
        if (current.data > max) {
            max = current.data;
        }
            current = current.next;
    }
                return max;
    }

        // Method to get the smallest element of a list
    getMin() {
        if(!this.head) {
            // return null when list is empty
                return null;
        }
        let current = this.head;
        let min = this.head.data;
        while(current) {
            if(current.data < min) {
                min = current.data;
            }
            current = current.next;
        }
                return min;
    }

        //function that deletes an element from a list 
    delete(data) { 
        if (!this.head) {
                return;
        }
        // if deleted element is the head of the list
        if (this.head.data === data) {
            this.head = this.head.next;
                return;
        }
        let current = this.head;
        // Look for the element to be removed and save the previous element
        while (current.next && current.next.data !== data) {
                current = current.next;
        }
        // If the removed element is found, reconnect the links
        if (current.next && current.next.data === data) {
            current.next = current.next.next;
        }
    }
        
    //Presents the list as an array
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

    list.append(777);
    list.append(22);
    list.append(11);
    list.append(44);
    list.append(11);
    list.append(33);

  console.log(list.toArray()); // Output:   [ 11, 11, 22, 33, 44, 777 ]

    list.delete(22); // deletes 22 from the list
    list.append(111); // I add an element again

  console.log(list.toArray()); // Output:  [ 11 11, 33, 44, 111, 777 ]
  console.log(`${list.getMax()}  is the largest element of your list`); // Output:  777
  console.log(`${list.getMin()}  is the smallest element of your list`); // Output:  11