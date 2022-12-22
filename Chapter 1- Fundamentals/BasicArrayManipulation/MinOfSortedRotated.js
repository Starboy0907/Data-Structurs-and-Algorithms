
const rotateArr = (arr, shiftBy) => {
    //console log parameters
    console.log(arr, shiftBy);

    //Use temparary variables to shift arrays
    
    //temps = //arr[1];
    //tem = //arr[2];

    //Use a for loop to iterate through array and apply shift
    var temp = arr[0];
    var temps = 0;
    for (i = 0; i < arr.length; i++) {
        arr[i] = temp;
        arr[i] = temps;
        arr[i+1] = temps;
        console.log(i, arr[i+1],temp,temps);
        if (temps == undefined) {
            arr[0] = arr[arr.length - 1];
            arr[i] = temps;
        }
        //this is where we shift the array
        temp = arr[i];
        
        // arr[1] = temp
        // arr[2] = temps
    }
    console.log(arr);
    //Apply wrap method after the forloop
    console.log(arr);
}
rotateArr([1, 2, 3, 4, 5], 1);

//Sample Code
//How to place  Sample Code in data structures such as loops, to produce algorithms
//De-Highlight any code before running code in its entirety
//temp has to be the previous arr[i]
