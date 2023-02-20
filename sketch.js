// This file is to practice yesterday's exercises

// 1- Sum Linked List

// Iterative
const sum = (head) => {
    // we create a variable sum and we iterate with the current val of head, progress the list with current = current.next and return sum.
    let current = head;
    let sum = 0;

    while (head !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
}

// Recursive
const sumRecursive = (head) => {

    // if head is null we return 0, if not, we grab or current value and sum recursively to the next head
    if (head === null) return 0;
    return head.val + sumRecursive(head.next);
};

// 2- Linked List Find

// Iterative
// Since we want to find an node in the list, we see if the current value is identical to target, if it is, we found our target and return true,
// otherwise we return false and keep searching the list.
const findList = (head, target) => {
    let current = head;
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
}

// Recursive
// if head is null, we know our list ended and if we didn't find it, its false, otherwise if our head.val is identical to target, we return true
// and we return recursively our function with the head.next and target.
const findListRecursive = (head, target) => {
    if (head === null) return false;
    if (head.val === target) return true;

    return findLinkedList(head.next, target);
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
// if its null we return null, if index is 0, it means that we are in the node we're looking for so we return the current value
// we recursively return our function with head.next and also index - 1 because we're looping through the nodes in opposite direction.
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
    let values = []
    pushArrayValues(head, values)
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

}

// Recursive
const reversedLinkedListRecursive = (head, prev) => {

}


// Merge two lists

// Iterative

const mergeLists = (l1, l2) => {

}

// Recursive
const mergeListsRecursive = (l1, l2) => {

}

// Fibonacci

const fibonacci = (num) => {

}

// Factorial

const factorial = (num) => {

}