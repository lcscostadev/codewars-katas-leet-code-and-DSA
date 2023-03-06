class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> NULL

const printLinkedList = (head) => {
    let current = head;
    // what this loop does is checking if isn't null, if it's not we print the current.next
    // so the current.next of A is B, but we want B to be the new current, to make the next node be the current.next, so that's why we say current = current.next
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

printLinkedList(a);
