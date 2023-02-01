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
    const values = [];
    fillValues(head, values);
    return values;
}

// Recursion is when a function call's it self

const fillValues = (head, values) => {
    if (head === null) return
    values.push(head.val);
    fillValues(head.next, values);
}

// NOTES:
// we need a function to store our array and call it the fillValues function
// need a function that calls head and values array
// if head is null do nothing, return it
// if its not, we push head.val to values
// and we call itself head.next, values