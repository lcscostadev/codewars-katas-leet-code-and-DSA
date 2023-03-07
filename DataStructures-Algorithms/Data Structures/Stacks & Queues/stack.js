// Last in first out

const stack = [];

// push
stack.push('Dog');
stack.push('Cat');
stack.push('Bear');

// pop
stack.pop();

//peek - since peek isn't really an array method we use length - 1 to see the second last item
stack[stack.length - 1];


// STACK WITH CLASSES