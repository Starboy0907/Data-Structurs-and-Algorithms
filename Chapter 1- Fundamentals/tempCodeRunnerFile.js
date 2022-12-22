function factorial(num) {
    sum = 1;
    for (i = 1; i < num + 1; i++) {
        console.log(i)
        if (i % 2 == 0) {
            sum *= i;
        }
    }
    console.log(sum);

}
factorial(3);
factorial(5);
