const zipperList = (l1, l2) => {
    let tail = l1;
    let curr1 = l1.next;
    let curr2 = l2;
    let count = 0;

    while (curr1 !== null && curr2 !== null) {
        if (count % 2 === 0) {
            tail.next = curr2;
            curr2 = curr2.next;
        } else {
            tail.next = curr1;
            curr1 = curr1.next;
        }
        tail = tail.next;
        count += 1;
    }
    if (curr1 !== null) tail.next = curr1;
    if (curr2 !== null) tail.next = curr2;

    return l1;
}

// We want to go through 2 linked lists and vary between them, we can do that using odd or even, also if one of the lists hit's null, which mean's that the list count is over, we just print at the end the rest of the other list until hits null.