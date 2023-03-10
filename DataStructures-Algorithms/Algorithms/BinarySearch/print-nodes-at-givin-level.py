# It prints all the nodes at a particular level of the BST.

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

# Print nodes at a given level


def printGivenLevel(root, level):
    if root is None:
        return
    if level == 1:
        print(root.key, end=' ')
    elif level > 1:
        # Recursive Call
        printGivenLevel(root.left, level - 1)
        printGivenLevel(root.right, level - 1)


# Driver Code
if __name__ == '__main__':
    # Let us create following BST
    #           50
    #        /     \
    #       30      70
    #      /  \    /  \
    #     20   40  60   80
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
    printGivenLevel(root, 2)
