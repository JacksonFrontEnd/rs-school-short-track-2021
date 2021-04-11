/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.arr = [];
    this.index = 0;
  }

  push(element) {
    this.arr[this.index] = element;
    this.index++;
  }

  pop() {
    this.curr = this.arr[this.index - 1];
    this.arr.splice(this.index, 1);
    this.index--;
    return this.curr;
  }

  peek() {
    return this.arr[this.index - 1];
  }
}

module.exports = Stack;
