const Acronyms = (str) => {
    const newStr = str.split(" ");
    var acStr = '';
    for (i = 0; i < newStr.length; i++) {
        //console.log(newStr[0][0]);
        acStr += newStr[i][0];
    }
    console.log(acStr);
}
Acronyms("there's no free lunch - gotta pay yer way")