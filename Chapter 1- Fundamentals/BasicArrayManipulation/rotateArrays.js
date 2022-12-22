const rotateArr = (arr, shiftBy) => {
    //console log parameters
    console.log(arr, shiftBy);
//initialize temp variable
    temp = arr[0];
    temps = arr[1];
    for (i = 0; i < arr.length; i++){
        temp=arr[i];
        console.log(i,arr[i], temp);
        temp = arr[i];
        arr[i] = temp;
    }

}
console.log(arr);
rotateArr([1, 2, 3, 4, 5], 1);

//Sample Code
//How to place  Sample Code in data structures such as loops, to produce algorithms
//De-Highlight any code before running code in its entirety
//temp has to be the previous arr[i]
