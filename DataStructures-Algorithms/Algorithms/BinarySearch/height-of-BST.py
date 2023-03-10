# It is recursively calculated using height of left and right subtrees of the node and assigns height to the node as max of the heights of two children plus 1.
# Python program to print
# height of a BST
import sys

# Given Node node


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
            return lDepth + 1
        else:
            return rDepth + 1


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
    print(' ', height(root))

    # This code is contributed by japmeet01
