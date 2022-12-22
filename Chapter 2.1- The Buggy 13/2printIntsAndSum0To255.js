//PrintIntsAndSum0To255()
//Print integers from 0 to 255, and the sum so far.
function printSum0to255() {
    var sum = 0;
    for (var num = 0; num <= 255; num++) {
        sum += num;
    }
    console.log("The sum of digits from 0 to 255 is",sum);
    return sum;
}
printSum0to255();
