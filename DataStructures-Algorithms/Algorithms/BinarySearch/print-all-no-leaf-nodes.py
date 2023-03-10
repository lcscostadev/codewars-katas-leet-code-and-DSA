#  A node is a non leaf node if either of its left or right child nodes are not NULL.


class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

# Function to insert a new node with
# given key in BST


def insert(root, key):
    # If the tree is empty, return a new node
    if root is None:
        return Node(key)

    # Otherwise, recur down the tree
    if key < root.key:
        root.left = insert(root.left, key)
    elif key > root.key:
        root.right = insert(root.right, key)

    # Return the node pointer
    return root

# Function to print all non-leaf
# nodes in a tree


def printNonLeafNode(root):
    # Base Cases
    if root is None or (root.left is None and root.right is None):
        return

    # If current node is non-leaf,
    if root.left is not None or root.right is not None:
        print(root.key, end=" ")

    # If root is Not NULL and its one
    # of its child is also not NULL
    printNonLeafNode(root.left)
    printNonLeafNode(root.right)


# Driver Code
if __name__ == '__main__':
    # Let us create following BST
    # 50
    # /	 \
    # 30	 70
    # / \	 / \
    # 20 40 60 80

    root = None

    # Creating the BST
    root = insert(root, 50)
    insert(root, 30)
    insert(root, 20)
    insert(root, 40)
    insert(root, 70)
    insert(root, 60)
    insert(root, 80)

    # Function Call
    printNonLeafNode(root)

    # This code is contributed by japmeet01
