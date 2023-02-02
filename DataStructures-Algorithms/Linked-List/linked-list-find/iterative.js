// We want to find an especific node in this linked list

const findLinkedList = (head, target) => {
    let current = head;

    while (current !== null) {
        if (current.val === target) return true
        current = current.next;
    }
    return false;
};

// So if we find, its true, if we didn't find it's false, which mean, it is null and the current item is not on that linked list.