const zipperList = (l1, l2) => {
    if (l1 === null && l2 === null) return null;
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    const next1 = l1.next;
    const next2 = l2.next;
    l1.next = l2;

    l2.next = zipperList(next1, next2);

    return l1;
}