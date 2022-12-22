//ReturnArrayCountGreaterThanY(arr, y)
//Given an array,return count greater than Y.

function numGreaterThanY(arr, y) {
    var numGreater = 0;
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] > y) {
            numGreater++;
        }
    }
    console.log(numGreater)
}
numGreaterThanY([1,2,3,4,5,6,7,8,9,10], 5);