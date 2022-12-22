//Declaring a new variable
var myBrr = [];
console.log(myBrr.length)

//Setting and accessing array values
myBrr[0] = 42;
console.log(myBrr[0]);

//Array.length is determined by the largest index:
myBrr[1] = "hello";
myBrr[2] = true;
console.log(myBrr.length);

//Overwriting Values
myBrr[0] = 101;

//Arrays can be sparsely populated: 
myBrr[myBrr.length + 1] = 0.2
console.log(myBrr.length)
console.log(myBrr)

//Shorten an array with the pop() method:
myBrr.pop();
console.log(myBrr)

















const arr = []
function Shift(arr, num) {
    temp = arr[arr.length - 1]
    for (i = 0; i < arr.length; i++) {
        arr[0]=arr[0+1]
        arr[arr.length - 1] = arr[arr.length]
    }
    arr[0] = num
    arr[arr.length-1] = temp;
    console.log(arr)
    console.log(arr.length)

}
Shift([1, 2, 3, 4, 5, 6, 7], 1)

//PushFront
const PushFront = (arr, num) => {
    console.log(arr)

}
PushFront([2,3,5,7,9], 1)

//PopFront
const PopFront = (x) => {
    console.log(x)
    temp = x[0];
    x[0] = x[x.length-1];
    x[x.length-1] = temp;
    console.log(x)
    x.pop()
    temps = x[1];
    tempo = x[x.length - 1]
    tem = x[0]
    x[x.length - 1] = tem;
    x[0] = temps;
    x[1] = tempo;

    console.log(x[1])
    console.log(x)
}
PopFront([1, 3, 5, 7, 8, 9, 10])

//InsertAt
const InsertAt = (crr, idx, num) => {
    console.log(crr)
    temp = crr[idx-1]
    console.log(temp)
    crr.length = crr.length + 1
    console.log(crr)
    for (i = crr.length-1; i >= idx; i--) {
        if (crr[i] != crr[crr.length - 1]) {
            crr[i+1] = crr[i]
        }
    }
    crr[idx] = num
    console.log(crr)
}
InsertAt([2, 3, 4, 5, 6, 7 ], 1, 500 )

//RemoveAt
const RemoveAt = (drr, i) => {
    //console.log(drr)
    temp = drr[i];
    drr[i] = drr[drr.length - 1];
    //console.log(drr)
    //console.log(drr[drr.length - 1]);
    drr[drr.length - 1] = temp;
    //console.log(drr[i])
    temps = drr[drr.length - 1]
    console.log(temps)
    drr.pop()
    for (i = 1; i <= drr.length - 1; i++) {
        if (drr[i] !== drr[drr.length - 1]) {
            drr[i] = drr[i + 1]
        }
        //temps = drr[1];
        //tempo = drr[drr.length - 1]
        //tem =drr[i]
        //drr[drr.length - 1] = tem;
        //drr[i] = temps;
        //drr[1] = tempo;

        //console.log(drr[1])
        console.log(drr)
    }
}
RemoveAt([2,3,4,5,6,7,8], 1)
