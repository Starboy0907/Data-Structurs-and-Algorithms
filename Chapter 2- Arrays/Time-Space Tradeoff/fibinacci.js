// recursive
const { performance } = require('perf_hooks');
const start = performance.now();

// function rFib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return rFib(n - 1) + rFib(n - 2);
// }
// console.log(`This too ${performance.now() - start} milliseconds to run`,);
// rFib(20);
//iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
console.log(`This too ${performance.now() - start} milliseconds to run`);
iFib(20);
