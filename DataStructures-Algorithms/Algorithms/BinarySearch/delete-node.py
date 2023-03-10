# It is used to delete a node with specific key from the BST and return the new BST.

# Different scenarios for deleting the node:

# Node to be deleted is the leaf node : Its simple you can just null it out.
# Node to be deleted has one child : You can just replace the node with the child node.
# Node to be deleted has two child :
# Need to figure out what will be the replacement of the node to be deleted.
# Want minimal disruption to the existing tree structure
# Can table the replacement node from the deleted nodes left or right subtree.
# If taking if from the left subtree, we have to take the largest value in the left subtree.
# If taking if from the right subtree, we have to take the smallest value in the right subtree.
# Choose one approach and stick to it.


# Python program to delete a node of BST

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

# Function to do inorder traversal of BST


def inorder(root):
    if root:
        inorder(root.left)
        print(root.key, end=" ")
        inorder(root.right)

# Function that returns the node with minimum
# key value found in that tree


def minValueNode(node):
    current = node

    # Loop down to find the leftmost leaf
    while current and current.left is not None:
        current = current.left

    return current

# Function that deletes the key and
# returns the new root


def deleteNode(root, key):
    # base Case
    if root is None:
        return root

    # If the key to be deleted is
    # smaller than the root's key,
    # then it lies in left subtree
    if key < root.key:
        root.left = deleteNode(root.left, key)

    # If the key to be deleted is
    # greater than the root's key,
    # then it lies in right subtree
    elif key > root.key:

        root.right = deleteNode(root.right, key)

    # If key is same as root's key,
    # then this is the node
    # to be deleted
    else:

        # Node with only one child
        # or no child
        if root.left is None:
            temp = root.right
            root = None
            return temp
        elif root.right is None:
            temp = root.left
            root = None
            return temp

        # Node with two children:
        # Get the inorder successor(smallest
        # in the right subtree)
        temp = minValueNode(root.right)

        # Copy the inorder successor's
        # content to this node
        root.key = temp.key

        # Delete the inorder successor
        root.right = deleteNode(root.right, temp.key)

    return root


# Driver Code
if __name__ == '__main__':
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
    root = deleteNode(root, 60)
    inorder(root)

    # This code is contributed by japmeet01
