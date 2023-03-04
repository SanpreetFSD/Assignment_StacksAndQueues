class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(val) {
      this.queue2.push(val); // add new element to the second queue
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift()); // move all elements from the first queue to the second queue
      }
      // swap the names of the two queues so that the second queue becomes the first queue
      const temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
    }
  
    pop() {
      return this.queue1.shift();
    }
  
    top() {
      return this.queue1[0];
    }
  
    empty() {
      return this.queue1.length === 0;
    }
  }
  
  // example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.top()); // output: 3
  console.log(stack.pop()); // output: 3
  console.log(stack.pop()); // output: 2
  console.log(stack.empty()); // output: false
  console.log(stack.pop()); // output: 1
  console.log(stack.empty()); // output: true
  