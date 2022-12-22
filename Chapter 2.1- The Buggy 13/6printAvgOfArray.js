//PrintAverageOfArray(arr)
//Analyze an array’ s values and print the average.
arr = [1, 4, 7, 2, 5, 8];
if (arr.length == 0) {
    console.log("[ ], no avg val.");
    return;
}
var sum = arr[0];
for (var idx = 1; idx < arr.length; idx++) {
    sum += arr[idx];
}
console.log("Avg val:", sum / arr.length);
