//SwapStringForArrayNegativeVals(arr)
//Replace negative array values with 'Dojo'​.
function subStringForNegs(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] < 0) {
            arr[idx] = "Dojo"
        }
    }
    console.log(arr)
    return arr;
}
subStringForNegs([1,2,-3,4,5,6,-7,8,9,10])
