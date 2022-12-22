//SquareArrayVals(arr)
//Given an array, square each value in the array.
function squareArrVals(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        arr[idx] = arr[idx]*arr[idx];
    }
    console.log(arr)
}
squareArrVals([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
