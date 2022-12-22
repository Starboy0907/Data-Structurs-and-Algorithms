const { performance } = require('perf_hooks');
const start = performance.now();

const Fibonacci = (num) => {
    arr = [0, 1]
    i = 0
    while (arr.length <= num) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        // console.log(arr.length - 1 + arr.length - 2)
        i++
    }
    console.log(arr)
    console.log(`This too ${performance.now() - start} milliseconds to run`);
}
Fibonacci(18);