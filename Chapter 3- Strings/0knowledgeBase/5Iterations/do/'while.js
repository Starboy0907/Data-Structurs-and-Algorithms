var array = Array.from(new Array(100).keys()); 
let i = 0;
let arrayLength = array.length;

do {
    let val = array[i];
    i++;
    console.log(val);
} while (i < arrayLength);

