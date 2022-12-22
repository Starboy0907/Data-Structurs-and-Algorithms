const Arrs2Map = (arr,brr) => {
    //console.log(arr, brr);
    crr = {};
    for (i = 0; i < arr.length; i++) {
        crr[arr[i]] = brr[i];
    }
    console.log(crr);

}
Arrs2Map(['a','b','c','d','e'],[1,2,3,4,5]);