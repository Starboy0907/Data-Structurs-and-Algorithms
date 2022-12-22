const Fibonacci = (num) => {
    arr = [0, 1, 3]

    i = 0
    while (arr.length <= num) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3])
        console.log(arr.length - 1 + arr.length - 2 + arr.length - 3)
        i++
    }
    console.log(arr)
}
Fibonacci(18);