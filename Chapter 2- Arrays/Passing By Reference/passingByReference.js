//Reverse Array
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


//Set Skyline Heights Function with param., console.log() of param and function
const skylineHeights = (crr) => {
    console.log(crr)
    //iterate through the array and push elements to new array nn to eliminate negatives
    nn = []
    for (i = 0; i < crr.length; i++) {
        if (crr[i] > 0) {
            nn.push(crr[i])
        }
    }
    console.log(nn)

    //iterate through positive array to eliminate variable preceded by larger numbers
    skyline = []
    const temps = 0
    for (i = 0; i < nn.length; i++) {
        
        if (nn[i] > temps) {
            temps == nn[i]
            skyline.push(nn[i])
            console.log(temps, nn[i])
        }
    }
    height = []
    console.log(skyline)
    // height.push(nn[0])
    // temp == nn[0]
    for(i = 0; i < nn.length; i++) {
        if (nn[i] > temp) {
            temp = nn[i]; 
            height.push(nn[i]);
            console.log(temp, nn[i]);

        }
    }
    console.log(height)

    //
    //eliminate negative values
}
skylineHeights([1, -1, 7, 3,2,1])
