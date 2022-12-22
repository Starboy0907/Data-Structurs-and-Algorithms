//knowledgeBase return Statements
//notes iterate in reverse, compare suffixes for equality, return the suffix
//key: to create a series of iterations and compare each. 
const common = (arr) => {
    var str = ""
    for (let a of arr) { //this is how you iterate through muti-dimentional arrays
        //console.log(a.length - 1, a[a.length - 1])
        for (i = a.length - 1; i > 0; i--) {
            if (a[i] == a[i] == a[i]) {
                console.log(a[i])
            }
        }
        //console.log(a[a.length - 4], a[a.length - 3], a[a.length - 2], a[a.length - 1])
        //console.log(a[a.length - 1], a[a.length - 2], a[a.length - 3], a[a.length - 4])
        // if (a[0][a.length - 1] == a[1][a.length - 1] == a[3][a.length - 1]) {
        str += ' ' + a[a.length - 4] + a[a.length - 3] + a[a.length - 2] + a[a.length - 1]
        // }
        console.log(str);
    }

}
common(["ovation", "notation", "action"]);

//common("nice", "ice", "sic");
//in 2-3 min
//challenge

//Question: What are associative arrays?
//Ans.: Dictionaries with key value pairs?



