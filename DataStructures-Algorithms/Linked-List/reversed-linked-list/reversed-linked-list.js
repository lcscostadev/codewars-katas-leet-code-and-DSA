// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Steps
/*
    Example linked list -> [1] -> [2] -> [3] -> [4] -> [5]
    1- using two pointers, prev and curr (previous and current(head)).
    2- instead of the current(head), [1] go to the next [2] he goes to the prev, so current.next becames prev
    3- and then the prev shifts to curr, and the current to the next node and so on.

    4- the while loop says "while we arent in the last item of the linked list, keep going."
*/

const reverseList = (head) => {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}