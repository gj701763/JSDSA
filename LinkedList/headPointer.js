class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkdeList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
    prepand(data) { //           Add node on beginning of a Linked List 
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertAt(data, idx) {
        if (idx < 0 || idx > this.size) {
            return;
        }
        if (idx === 0) {
            this.prepand(data);
        } else {
            const node = new Node(data);
            let curr = this.head;
            for (let i = 0; i < idx - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
            this.size++;
        }
    }

    append(data) { //           Add node on end of a Linked List
        const node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    search(data) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.data === data) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    deleteAt(idx) { // Delete the node from  its index in linked list
        if (idx < 0 || idx >= this.size) {
            return null
        }
        let removeNode;
        if (idx === 0) {
            removeNode = this.head;
            this.head = this.head.next
        } else {
            let curr = this.head;
            for (let i = 0; i < idx - 1; i++) {
                curr = curr.next;
            }
            removeNode = curr.next;
            curr.next = removeNode.next
        }
        this.size--;
        return removeNode.data;
    }


    deleteValue(data) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        } else {
            let curr = this.head;
            while (curr.next && curr.next.data !== data) {
                curr = curr.next;
            }
            if (curr.next) {
                const removeNode = curr.next;
                curr.next = removeNode.next
                this.size--;
                return data
            }
        }
        return null
    }

    printList() { //  Print a Linked List 
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let node = this.head;
            let listvalue = '';
            while (node) {
                listvalue += `${node.data} -> `;
                node = node.next;
            }
            console.log(listvalue + "null");
        }
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let Next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = Next;
        }
        this.head = prev
    }
}

const list = new LinkdeList();
console.log("list is empty : ", list.isEmpty());
console.log("list size : ", list.getSize());
list.insertAt(10, 0);
list.append(20);
list.append(30);
list.append(40);
list.insertAt(50, 2);
console.log("list size : ", list.getSize());
list.printList();
console.log(list.deleteValue(50));
list.printList();
//console.log(list.search(40));
list.reverse();
list.printList();