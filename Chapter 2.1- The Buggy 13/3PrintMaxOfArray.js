//PrintMaxOfArray(arr)
//Print the largest element in a given array.

function printArrayMax(arr) {
    if (arr.length == 0) {
        console.log("[], no max val.");
        return;
    }
    var max = 0;
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] > max) {
            max = arr[idx];
        }
    }
    console.log("Max value is:", max);
}
printArrayMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

