/*

(Algorithm test) Given an array of strings that is interspersed with "" after sorted, 
write a function to find an index of a given string. 
If there is no such string in the array, function should return -1.

Example of "an array of strings that is interspersed with "" after sorted"
["ba", "bb", "", "cd"]
["a", "", "b", "", "", "c", "", "d"]
["", "monster", "", "", "", "vail", "", "", "", "", "zebra", "", ""] (Format for answer: any programming language you can use)
const solution = function () {
};

console.log(solution("hi", ["hi"]) === 0)
console.log(solution("a", ["", "a", "", "", "b"]) === 1)
console.log(solution("adf", ["abc", "abd", "", "", "adf", ""]) === 4)

*/

const solution = function (str, arr) {
    var foundIndex = 0;

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === str) {
            foundIndex = index;
            continue;
        }
    }
    
   return foundIndex;
};

console.log(solution("hi", ["hi"]) === 0)
console.log(solution("a", ["", "a", "", "", "b"]) === 1)
console.log(solution("adf", ["abc", "abd", "", "", "adf", ""]) === 4)
