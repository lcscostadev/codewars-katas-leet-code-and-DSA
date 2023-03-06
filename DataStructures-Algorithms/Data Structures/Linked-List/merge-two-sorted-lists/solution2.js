const mergeTwoLists = (l1, l2) => {
    const dummy = new ListNode();
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

/* Steps --
    1- create a dummy node that will store our new list with our merged l1 and l2 in ascending order.
    2- create a variable tail that will be our last node of the list, storing our dummy variable inside it
    3- now we validate if our both lists arent null, which means they are not empty.
    4- now we validade which list has the current lowest value to be stored since we are making our new list in ascending order.
    5- if l1 is the lowest than the next tail will be l1, and we need also to update l1 to run the next l1 node.
    6- if is l2 our tail.next will be l2 and again, we need to update l2 to the next node.
    7- outside of the validations we also update our tail to go to the next node.
    8- outside our while loop we validade if the l1 isnt null, if is not tail.next will be l1, else if and do the same for l2 
    9- we return our dummy.next;
*/