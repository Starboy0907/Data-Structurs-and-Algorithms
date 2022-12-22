//PrintMaxMinAverageArrayVals(arr)
//Print the max, min and average array values.
function maxMinAverage(arr) {
    // if (arr.length == 0) {
    //     return;
    // }
    var avg = 0;
    var min = arr[0]; 
    var max = 0;
    var sum = 0;

    for (var idx = 0; idx <= arr.length-1; idx++) {
        if(arr[idx] <= min) { 
            min = arr[idx];
            console.log(min,max,avg,sum);
            //return min;
        }
        if(arr[idx] > max) {
            max = arr[idx];
            //console.log(max);
            //return max;
        }
        sum += arr[idx];
        avg = sum/arr.length
        //return avg;
    }
    console.log(sum, avg, max, min);
    //return max;
    
}
maxMinAverage([1,2,3,4,5,6,7,8,9,10]);