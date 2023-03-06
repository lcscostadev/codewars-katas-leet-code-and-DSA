const traverseCircularLL = (head, tail) => {
    let current = head;
    let tail = tail;

    do {
        console.log(current.val);
        current = current.next;
    } while (current !== tail.next);
}

// if we use while loop, we go ouside the loop because the head is indeed identical to tail.next, so that's why we use do while, because we do, then we check.