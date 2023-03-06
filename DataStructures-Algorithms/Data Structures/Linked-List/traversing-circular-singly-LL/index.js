// This is an insertion at an empty linked list
const addToEmpty = (last, data) => {
    if (last !== null)
        return last;

    let temp = new Node();

    temp.data = data;
    last = temp;
    temp.next = last;

    return last;
}

// This is an insertion at the beginning of a circular singly linked list

function addBegin(last, data) {
    if (last == null)
        return addToEmpty(last, data);

    // Creating a node dynamically.
    var temp = new Node();

    // Assigning the data.
    temp.data = data;

    // Adjusting the links.
    temp.next = last.next;
    last.next = temp;
    return last;
}
