# Level order traversal of a BST is breadth first traversal for the tree. It visits all nodes at a particular level first before moving to the next level.

import queue

# Given Node node


class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

# Function to insert a new node with
# given key in BST


def insert(node, key):
    # If the tree is empty, return a new node
    if node is None:
        return Node(key)

    # Otherwise, recur down the tree
    if key < node.key:
        node.left = insert(node.left, key)
    elif key > node.key:
        node.right = insert(node.right, key)

    # Return the node pointer
    return node

# Returns height of the BST


def height(node):
    if node is None:
        return 0
    else:
        # Compute the depth of each subtree
        lDepth = height(node.left)
        rDepth = height(node.right)

        # Use the larger one
        if lDepth > rDepth:
            return (lDepth + 1)
        else:
            return (rDepth + 1)

# Print nodes at a given level


def printGivenLevel(root, level):
    if root is None:
        return
    if level == 1:
        print(root.key, end=" ")
    elif level > 1:
        # Recursive call
        printGivenLevel(root.left, level - 1)
        printGivenLevel(root.right, level - 1)

# Function to line by line print
# level order traversal of a tree


def printLevelOrder(root):
    h = height(root)
    for i in range(1, h+1):
        printGivenLevel(root, i)
        print()


# Driver Code
if __name__ == '__main__':
    # Let us create following BST
    #          50
    #       /     \
    #      30      70
    #     /  \    /  \
    #   20   40  60   80
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
    printLevelOrder(root)
