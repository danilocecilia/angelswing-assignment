/**
 * This function accepts an array of numbers, and returns the biggest number created by concatenating the numbers in the passed array.
 * If result is too big to save as a integer value,
 * then this function should return `NaN`.
 */

const solution = function (numbers) {
    return numbers.map(() => {
        const number = parseInt(
            numbers.sort((x, y) => {
                    var a = x.toString(),
                        b = y.toString(),
                        ab = parseInt(a + b),
                        ba = parseInt(b + a);

                    return ab > ba ? -1 : (ab < ba ? 1 : 0);
                }
            )
            .join(''), 10
        );

        if(number > Number.MAX_SAFE_INTEGER) {
            return NaN;
        }
        return number;
    })[0];
};

/**
 * Following logs should be `true`s.
 */
console.log(solution([1, 2, 3]) === 321); // `3` before `2` before `1`
console.log(solution([1, 12, 3]) === 3121); // `3` before `12` before `1`
console.log(solution([65, 4, 5]) === 6554); // `65` before `5` before `4`
console.log(isNaN(solution([23, 222, 333, 453, 233, 555, 6544, 5888])));
console.log(solution([44, 45, 21]) === 454421);
console.log(solution([4, 43, 81]) === 81443);