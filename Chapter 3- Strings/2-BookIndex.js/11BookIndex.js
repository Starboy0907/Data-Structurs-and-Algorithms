//knowledgeBase .length, .split, .join, .concat, for...in loops, switch/case
//how to return ranges from an array of sequential numbers



const BookIndex = (sort) => {
    //console.log(sort);
    var temp = sort[0];
    var str = "";
    for (i = 0; i < sort.length; i++) {
        console.log(i + " i",sort[i] + " sort[i]");
        temp = sort[i];
        if (sort[i] - temp == 2) {
            str += sort[i];
            str += sort[i] + " ";
        }
        console.log(temp + " Temp")

    }
    console.log(str)

}
BookIndex([1,3,4,5,7,8,10])

//in 2-3 min
//challenge

