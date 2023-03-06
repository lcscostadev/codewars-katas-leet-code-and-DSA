// Linked list values
// given a head node of a linked list, we want to return an array containing all of the values within the nodes of that linked list in order.
// Singly linked list, every node has a pointer to the next node
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

const linkedListValues = (head) => {
    let current = head;
    const values = [];
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    return values;
}

// NOTES:
// values = []
// since we need "in order" we use push() array method a -> b -> c -> d
// when the node is null we end the linked list

