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

// 2- Linked List Find

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
        count += 1;
        current = current.next;
    }
    return null;
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
    let values = []

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    return values;
}

// Recursive
const arrayValues = (head) => {
    let values = [];
    pushArrayValues(head, values);
    return values;
}

const pushArrayValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    return pushArrayValues(head.next, values);
}

// 5- Reversed Linked List

// Iterative
const reversedLinkedList = (head) => {
    let current = head;
    let previous = null;

    while (current !== null) {
        const next = current.next;

        current.next = previous;
        previous = current
        current = next;
    }
    return previous;
}

// Recursive
const reversedLinkedListRecursive = (head, prev) => {
    if (head === null) return;
    const next = head.next;
    head.next = prev;
    return reversedLinkedListRecursive(next, head);
}


// Merge two lists

// Iterative

const mergeLists = (l1, l2) => {
    let dummy = new Node();
    let tail = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if (l1 !== null) {
        tail.next = l1;
    } else if (l2 !== null) {
        tail.next = l2;
    }

    return dummy.next;
}

// Recursive
const mergeListsRecursive = (l1, l2) => {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeListsRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeListsRecursive(l1, l2.next);
        return l2;
    }
}