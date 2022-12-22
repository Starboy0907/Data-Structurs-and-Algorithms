const Ray = (arr) => {
    console.log(arr)
    zrrr = []
    for (i = arr.length - 1; i >= 0; i--) {
        zrrr.push(arr[i]);
    }
    console.log(zrrr);
}
    Ray([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//Remove Negatives
const removeNegatives = (brr) => {
    console.log(brr)
    temp = 0
    for (i = 0; i < brr.length; i++) {
        if (brr[i] < 0) {
            temp = brr[i];
            brr[i] = brr[brr.length - 1]
            // console.log(i)
            console.log(temp)
            //console.log(brr[i])
            brr.pop()
        }
        
        if (brr[brr.length - 1] < 0) {
            // console.log(i)
            //console.log(temp)
            //console.log(brr[i])
            brr.pop()
            console.log(brr[0])
            temp = brr[0]
            // temp = brr[0];
            // brr[0] = brr[brr.length -1]


        }
        
    }
    //brr.pop()
    console.log(brr)
    console.log(brr[0])


}
removeNegatives([-22,45,65,-77,88,-2,-17,-55,67,98,-101,344])