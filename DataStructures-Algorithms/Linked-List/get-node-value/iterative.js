const getNodeValue = (head, index) => {
    let current = head;
    let count = 0;

    while (current !== null) {
        if (count === index) return current.val;
        count += 1;
        current = current.next;
    }

    return null;
}