//1. Print all integers from 1-255
const printTo255 = () => {
    for (i = 0; i < 256; i++) {
        console.log(i)
    }
}
printTo255();

//2. Print Sum 0-255;
const PrintSum = () => {
    totalSum = 0
    for (i = 1; i < 256; i++) {
        totalSum += i
    }
    console.log(totalSum)
}
PrintSum()
    
// 3.Find and Print Max
//Given an array, find and print its largest element.
function PrintMax(arr) {
    maxNum = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }
    console.log(maxNum)
}
PrintMax([3, 5, 9, 7, 1])

// 4.Array with Odds
//Create an array with all the odd integers between 1 and 255(inclusive).
const printArray = () => {
    array = [];  //define variable befor the loop
    for (i = 1; i < 256; i++) {
        if (i % 2 == 0) {
            continue
        }
        array.push(i)
    }
    console.log(array)
}
printArray()



//5.Greater Than Y
//Given an array and a value Y, count and print the number of array values greater than Y.
function GreaterThanY(array, y) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > y) {
            console.log(array[i])
        }
    }
}
GreaterThanY([25, 50, 100, 150, 200, 250], 175)


//6. Max, Min, Average
//Given an array, print the max, min and average values for that array.
avg = 0;
maxNum = 0;
function MaxMinAvg(arr) {
    for (i = 0; i < arr.length; i++) {
        avg += arr[i];
        console.log(avg)
        minNum = arr[i];
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
        if (arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    console.log(maxNum, minNum, avg/arr.length)
}
MaxMinAvg([334, 456, 764, 985, 169])


//7. Swap String For Array Negative Values
//Replace any negative array values with 'Dojo'​.
function SwapString(arr) {
    console.log(arr)
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'dojo';
        }
    }
    console.log(arr)
}
SwapString([-100, 500, -250, 300, -450, 600, -500]);
// 8. Print Odds 1 - 255
//Print all odd integers from 1 to 255.
const Odds = () => {
    for (i = 0; i < 256; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
Odds()

// 9.Iterate and Print Array
//Iterate through a given array, printing each value.
function IterateAndPrint(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
IterateAndPrint([234, 456, 567, 789])



//10.Get and Print Average
//Analyze an array’s values and print the average.


//11. Square the Values
//Square each value in a given array, returning that same array with changed values.
function Square(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr)
}
Square([234,345,456,567,678,789])

//12. Zero Out Negative Numbers
//Return the given array, after setting any negative values to zero.
function Zero(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr)
}
Zero([50, -50, 100, -100, 150, -150, 200, -200])
//13. Shift Array Values
//Given an array, move all values forward by one index, dropping the first and leaving a '0'​value at the end.
function Shift(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
    }
    arr[arr.length - 1] = 0;
    console.log(arr)
}
Shift([1,2,3,4,5,6,7,8,9,10,11,12,13,14])
