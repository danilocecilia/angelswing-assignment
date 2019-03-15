/*

What are the differences between Ex1, Ex2, and Ex3? (Format for answer: text)

function Ex1() {
  if (!(this instanceof Ex1)) {
    return new Ex1();
  }

  this.name = "JS";
}

const Ex2 = function Ex2() {
  if (!(this instanceof Ex2)) {
    return new Ex2();
  }

  this.name = "JS";
};

class Ex3 {
  constructor() {
    this.name = "JS";
  }
}

*/

// Answer: 
//EX1 uses function declaration, can be invoked using function name
//EX2 uses function expression, can be invoked using the variable name
//EX3 it uses class, it's called "special function", you need to gist declare it and then instantiate it in order to use it.