const { performance } = require('perf_hooks');
const start = performance.now();

function factorial(num) {
    sum = 1;
    for (i = 1; i < num + 1; i++) {
        if (i % 2 == 0) {
            sum *= i;
        }
    }
    console.log(sum);
    console.log(`The factorial is ${sum}`);
    console.log(`This too ${performance.now() - start} milliseconds to run`);
}
factorial(2);
factorial(35);
