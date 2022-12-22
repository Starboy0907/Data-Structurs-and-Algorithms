//PrintOdds1To255()
//Print all odd integers from 1 to 255.

function printOdds1to255() {
    var num = 1;
    while (num <= 255) {
        console.log(num + 2);
        num++;
    }
}
printOdds1to255();

//The bug is that num is not incrementing.