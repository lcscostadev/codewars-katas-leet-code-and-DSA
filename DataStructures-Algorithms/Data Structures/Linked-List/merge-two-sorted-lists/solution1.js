const mergeTwoLists = (l1, l2) => {
    // return l2 if is not l1
    if (!l1) return l2;
    // return l1 if is not l2
    else if (!l2) return l1;
    // returns the list who contains the smallest number
    else if (l1.val <= l2.val) {
        // if the l1 is the smallest, we call it self function with the .next of the list
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// To solve this problem, we can use recursion, calling it until one of the sheets is null, and while it is not null, we do an equality check, if list1 is less than or equal to list2, we call recursion with list1.next = mergeTwoLists (list1.next, list2), else if the value is greater than list2.next = mergeTwoLists(list1, list2.next). If one of the sheets is null, we simply return the opposite list (we don't care if it's null or not). Thus, when the recursion ends, the stack will begin to collapse in reverse order, which will allow us to get a new merged sorted list.