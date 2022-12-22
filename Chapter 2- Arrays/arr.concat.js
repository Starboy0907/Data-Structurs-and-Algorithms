
const arrConcat = (...arrays) => {
    let result = [];
    for (var i = 0; i < arrays.length; i++) {
        result = [...result, ...arrays[i]];  //using a spread
    }
    return result;
}
console.log(arrConcat(['a', 'b'], [1, 2]));

// arrConcat = (a, b) => {
//     arr = [];
//     for (i = 0; i < a.length; i++) {
//         arr.push(a[i]);
//         arr.push(b[i]);
//     }
//     console.log(arr);
// }
// arrConcat([1, 2, 3, ], [4, 5, 6]);

//randomCard = Math.floor(Math.random() * index);
