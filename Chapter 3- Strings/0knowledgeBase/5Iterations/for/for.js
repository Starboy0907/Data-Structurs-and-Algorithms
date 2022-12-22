//1.For
    //a beautiful way to initialize an array and populate it at the same time on the same line.
    //.challenge: understand  the .from codex and the .find codex
var array = Array.from(new Array(100).keys())
let arrayLength = array.length;
const keys = array.keys();
let text = "";
// for (let x of keys) {
//     text += x + "  ";
// }
console.log(text);
for (let i = 0; i < arrayLength; i++) {
    let val = array[i];
    console.log(val);
}

//2.while

//3.do...while

//4. for...in

//5.forEach

