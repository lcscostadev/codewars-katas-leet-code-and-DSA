# Right view of a Binary Search Tree is set of nodes visible when tree is visited from Right side.
import sys

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
    else:
        node.right = insert(node.right, key)

    # Return the node pointer
    return node

# Function to print the right view
# of a binary tree.


def rightViewUtil(root, level, max_level):
    # Base Case
    if root is None:
        return

    # If this is the last Node of its level
    if (max_level[0] < level):
        print("\t", root.key, end="")
        max_level[0] = level

    # Recur for right subtree first,
    # then left subtree
    rightViewUtil(root.right, level + 1, max_level)
    rightViewUtil(root.left, level + 1, max_level)

# Wrapper over rightViewUtil()


def rightView(root):
    max_level = [0]
    rightViewUtil(root, 1, max_level)


# Driver Code
if __name__ == "__main__":
    # Let us create following BST
    # 50
    # /	 \
    # 30	 70
    # / \ / \
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
    rightView(root)

    # This code is contributed by japmeet01
