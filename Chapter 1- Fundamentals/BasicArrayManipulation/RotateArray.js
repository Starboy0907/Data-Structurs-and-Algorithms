//Binary Sorted
const Binary = (arr, num) => {
    console.log("This is the array", arr)
    console.log("This is the last element of the array", arr[arr.length-1])
    console.log("The num is", num);

///add a conditional that bisects the array
    const highSide = (Math.abs(arr[arr.length - 1] - Math.abs(num)))
    console.log("This is the hightSide of the array", highSide)
    const lowSide = (Math.abs(num) - Math.abs(arr[0]))
    console.log("This is the lowSide", lowSide)
    
//add a forloop that iterates through the bisescted array to find the number
    console.log(arr.length-1)
    for (i = arr.length-1 /2; i > 0; i--) {
        var found = 0;
        if ( num > arr[arr.length - 1]) {
            console.log("The number is out of range")
            break
        }if (arr[i] = num) {
            found === arr[i];
            console.log(arr[0],found)
            console.log("Yes the number", num + " is in the array at", i)
            break;
        } else {
            for (i = 0; i < arr.length-1/ 2; i++) {
                if (arr[i] == num) {
                    found === arr[i];
                    console.log("Yes, the*******", num + " is in the array at", i)
                    console.log(arr[i],found)
                    break
        } else {
            console.log("The number is not in the array")
        }
            }
//an else statement that iterates through the other bisection if the number is not found
        }
    }
}
Binary([1, 2, 3, 4, 6, 7, 8, 9, 10], 2)