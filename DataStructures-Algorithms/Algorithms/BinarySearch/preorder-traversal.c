// Preorder traversal first visits the root node and then traverses the left and the right subtree.It is used to create a copy of the tree.Preorder traversal is also used to get prefix expression on of an expression tree.

#include <stdio.h>
#include <stdlib.h>

// Given Node node
struct node
{
    int key;
    struct node *left, *right;
};

// Function to create a new BST node
struct node *newNode(int item)
{
    struct node *temp = (struct node *)malloc(
        sizeof(struct node));
    temp->key = item;
    temp->left = temp->right = NULL;
    return temp;
}

// Function to insert a new node with
// given key in BST
struct node *insert(struct node *node, int key)
{
    // If the tree is empty, return a new node
    if (node == NULL)
        return newNode(key);

    // Otherwise, recur down the tree
    if (key < node->key)
    {
        node->left = insert(node->left, key);
    }
    else if (key > node->key)
    {
        node->right = insert(node->right, key);
    }

    // Return the node pointer
    return node;
}

// Function to do preorder traversal of BST
void preOrder(struct node *root)
{
    if (root != NULL)
    {
        printf("%d ", root->key);
        preOrder(root->left);
        preOrder(root->right);
    }
}

// Driver Code
int main()
{
    /* Let us create following BST
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80
   */
    struct node *root = NULL;

    // Creating the BST
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 20);
    insert(root, 40);
    insert(root, 70);
    insert(root, 60);
    insert(root, 80);

    // Function Call
    preOrder(root);

    return 0;
}