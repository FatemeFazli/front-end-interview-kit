class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
};

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(data){
        let node = new Node(data);
        let current;

        if (this.head === null){
            this.head = {};
            this.head.next = node;
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }
    insertAt(data, index){
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            let node = new Node(data);
            let current, prev;
            current = this.head;

            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                current = this.head;
                let iterator = 0;

                while(iterator < index){
                    iterator++;
                    prev = current;
                    current = current.next;
                }
                node.next = current;
                prev.next = node;
            }

            this.size++;
        }
    }
    removeFrom(index){
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            let current, prev;
            current = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {
                current = this.head;
                let iterator = 0;

                while(iterator < index){
                    iterator++;
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }

            this.size--;

            return current.data;
        }
    }
    removeElement(data){
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.data === data) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    isEmpty() {
        return !this.size;
    }
    getSize(){
        return this.size;
    }
    printList(){
        let current = this.head;
        let string = "";
        while (current) {
            string += current.data + " ";
            current = current.next;
        }
        return string;
    }
    printReverse() {
        let current = head,
            prev,
            string= "",
            tmp;

        while (current) {
            tmp = current.next;
            current.next = prev;
            prev = current;
            current = tmp;
            string += prev.data + " ";
        }

        return string;
    }
}


let list = new LinkedList();
list.add('salam');
console.log('List:', list);
