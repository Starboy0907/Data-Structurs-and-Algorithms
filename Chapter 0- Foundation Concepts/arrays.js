//array creation
var x = [1, 3, 5];

//setting an array elements value

x[2] = 10;
console.log(x[2]) 

//adding an element to an array
x.push(777)
console.log(x)

//To swap values in an array(or elsewhere), always use a temporary variable.
x = [1, 3, 5, 7]
temp = x[1];
x[1] = x[3];
x[3] = temp;
console.log(x);

//Looping through an array

var nums = [1, 3, 5, 7];
for (idx = 0; idx < nums.length; idx++) {
    console.log(nums[idx], idx)
}

var arr = []
for (val = 3; val < 99999; val = val + 3) {
    arr.push(val);
}
console.log(arr)



