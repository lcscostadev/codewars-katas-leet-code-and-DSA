//  A new key is always inserted at the leaf. Start searching a key from the root till a leaf node. Once a leaf node is found, the new node is added as a child of the leaf node.

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

const insert = (node, key) => {
    // If the tree is empty we return a new node
    if (node == null) {
        return new Node(key);
    }

    // if the node is less than the root node so we insert in the left tree
    if (key < node.key) {
        node.left = insert(node.left, key);
    } else if (key > node.key) {
        node.right = insert(node.right, key);
    }

    return node;
}

const inorder = (root) => {

    if (root != null) {
        inorder(root.left);
        document.write(root.key + " ");
        inorder(root.right);
    }

}

// Driver Code

/* Let us create following BST
          50
       /     \
      30      70
     /  \    /  \
   20   40  60   80
*/

let root = null;

// Inserting value 50
root = insert(root, 50);

// Inserting value 30
root = insert(root, 30);

// Inserting value 20
root = insert(root, 20);

// Inserting value 40
root = insert(root, 40);

// Inserting value 70
root = insert(root, 70);

// Inserting value 60
root = insert(root, 60);

// Inserting value 80
root = insert(root, 80);

inorder(root);

// 20 30 40 50 60 70 80
// the smaller numbers before the root (the left)
// higher numbers after the root (the right)


// Time Complexity: O(N), where N is the number of nodes of the BST
// Auxiliary Space: O(1) 