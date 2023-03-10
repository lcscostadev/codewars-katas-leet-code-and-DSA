#  Left view of a Binary Search Tree is set of nodes visible when tree is visited from Left side.
# Python program to print
# left view of a BST

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

# Function to print left view of
# binary tree


def leftViewUtil(root, level, max_level):
    # Base Case
    if root is None:
        return

    # If this is the first node
    # of its level
    if max_level[0] < level:
        print(root.key, end=" ")
        max_level[0] = level

    # Recur for left and right subtrees
    leftViewUtil(root.left, level + 1, max_level)
    leftViewUtil(root.right, level + 1, max_level)

# Wrapper over leftViewUtil()


def leftView(root):
    max_level = [0]
    leftViewUtil(root, 1, max_level)


# Driver Code
if __name__ == '__main__':
    # Let us create following BST
    # 50
    # / \
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
    leftView(root)

    # This code is contributed by japmeet01
