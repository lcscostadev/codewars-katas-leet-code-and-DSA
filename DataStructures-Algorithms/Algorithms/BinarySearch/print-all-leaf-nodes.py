# A node is a leaf node if both left and right child nodes of it are NULL.
class Node:
    def __init__(self, item):
        self.key = item
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

# Function to print leaf nodes
# from left to right


def printLeafNodes(root):
    # If node is null, return
    if not root:
        return

    # If node is leaf node,
    # print its data
    if not root.left and not root.right:
        print(root.key, end=" ")

    # If left child exists,
    # check for leaf recursively
    if root.left:
        printLeafNodes(root.left)

    # If right child exists,
    # check for leaf recursively
    if root.right:
        printLeafNodes(root.right)


# Driver Code
if __name__ == "__main__":
    # Let us create following BST
    #          50
    #        /    \
    #      30      70
    #     /  \    /  \
    #   20   40  60   80

    # Creating the BST
    root = None
    root = insert(root, 50)
    insert(root, 30)
    insert(root, 20)
    insert(root, 40)
    insert(root, 70)
    insert(root, 60)
    insert(root, 80)

    # Function Call
    printLeafNodes(root)
