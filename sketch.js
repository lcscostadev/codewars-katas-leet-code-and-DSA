// This file is to practice yesterday's exercises

// 1- Sum Linked List

// Iterative
const sum = (head) => {
    let current = head;
    let sum = 0;

    while (current !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
}

// Recursive
const sumRecursive = (head) => {
    if (head === null) return 0;
    return head.val + sumRecursive(head.next);
}

// 2- Linekd List Find

// Iterative
const findList = (head, target) => {
    let current = head;
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
}

// Recursive
const findListRecursive = (head, target) => {
    if (head === null) return false;
    if (head.val === target) return true;

    return findListRecursive(head.next, target);
}

// 3- Get Node value

// Iterative
const getNode = (head, index) => {
    let current = head;
    let count = 0;

    while (current !== null) {
        if (count === index) return current.val;
        count++;
        current = current.next;
    }
}

// Recursive
const getNodeRecursive = (head, index) => {

    if (head === null) return null;
    if (index === 0) return head.val;
    return getNodeRecursive(head.next, index - 1);
}

// 4- Linked List array

// Iterative
const arrayLinkedList = (head) => {
    let current = head;
    const values = [];

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    return values;
}

// Recursive
const arrayValues = (head) => {
    const values = [];
    pushArrayValues(head, values);
    return values;
}

const pushArrayValues = (head, values) => {
    if (head === null) return
    values.push(head.val);
    return pushArrayValues(head.next, values);
}

// 5- Reversed Linked List

// Iterative
const reversedLinkedList = (head) => {
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let next = curr.next;

        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Recursive
const reversedLinkedListRecursive = (head, prev) => {
    if (head === null) return prev;
    let next = head.next;
    head.next = prev
    return reversedLinkedList(next, head)
}