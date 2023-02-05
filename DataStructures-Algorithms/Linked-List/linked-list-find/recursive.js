const findLinkedList = (head, target) => {
    if (head === null) return false
    if (head.val === target) return true;

    return findLinkedList(head.next, target);
}