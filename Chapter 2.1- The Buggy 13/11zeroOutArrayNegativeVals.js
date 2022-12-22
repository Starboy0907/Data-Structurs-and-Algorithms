//ZeroOutArrayNegativeVals(arr)
//Given an array, set negative values to zero.
const setNegsToZero = (arr) => { 
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] < 0) {
            arr[idx] = 0;
        }
    }
    console.log(arr);
}
setNegsToZero([1,2,-3,4,5,-6,7,8,9,10]);