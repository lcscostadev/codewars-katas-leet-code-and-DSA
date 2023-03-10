# It is used to return the node with the smallest value in the BST.
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

# Function that returns the node with minimum
# key value found in that tree


def minValueNode(node):
    current = node

    # Loop down to find the leftmost leaf
    while current and current.left is not None:
        current = current.left

    return current


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
    print(minValueNode(root).key)

    # This code is contributed by japmeet01
