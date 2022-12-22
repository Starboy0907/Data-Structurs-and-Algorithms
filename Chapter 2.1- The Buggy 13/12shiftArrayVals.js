//ShiftArrayValsLeft(arr)
//Shift array values forward, leaving '0'​at end.
function arrShift(arr) {
    for (var idx = 1; idx < arr.length; idx++) {
        arr[idx - 1] = arr[idx];
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
    arr.length--;
    return arr;
}
arrShift([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);