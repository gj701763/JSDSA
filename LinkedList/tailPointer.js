class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkTail {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(data) {
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node
            this.tail = node;
        }
        this.size++;
    }


    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        const data = this.tail.data;
        let curr = this.head;
        while (curr && curr.next !== this.tail) {
            curr = curr.next;
        }
        curr.next = null;
        this.tail = curr;
        this.size--;
        return data;
    }



    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let str = '';
            while (curr) {
                str += `${curr.data} -> `;
                curr = curr.next;
            }
            console.log(str + "null");
        }
    }
}

const list = new linkTail();
console.log(list.isEmpty());
console.log(list.getSize())

list.append(10);
list.append(20);
list.append(30);

list.prepend(5);

list.print()
console.log(list.removeFromEnd())
list.print();