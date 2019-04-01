/* 

Answer what is the result of following code, and explain why. (Format for answer: text)

let x = 0;

if (x == "") {
  let x = 1;
} else {
  x = 3;
}

console.log(x);
*/

let x = 0;

if (x == "") {
  let x = 1;
} else {
  x = 3;
}

console.log(x);

// Outpu: 0
// Answer: the first if statement as the comparison is made using
// two == signs, that means it tries to do the type conversion since 0 and "" is consider a falsy value, so translating it
// the results for the comparison is (false==false).
// as the let statement works on a block scope, doing let = 1 inside the if statement does not affect the value of the x.
/*

Falsy Values
Okay, so why does false == 0 in JavaScript? It’s complex, but it’s because in JavaScript 0 is a falsy value.

Type coercion will actually convert our zero into a false boolean, then false is equal to false.

There are only six falsy values in JavaScript you should be aware of:

false — boolean false
0 — number zero
“” — empty string
null
undefined
NaN — Not A Number

When comparing any of our first three falsy values with loose equality(==), they will always be equal! That’s because these values will all coerce 
into a false boolean.

false == 0
// true
0 == ""
// true
"" == false
// true


*/
