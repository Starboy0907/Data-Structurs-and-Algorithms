//Knowledge base: 1: create a function that takes a string, 2:  iterate through the string, create an empty string, 3: populate that empty string with specifications 

const Inverthash = (str) => {
    var reversed = "";
    //console.log(str.indexOf("e"));
    for (i = str.length-1; i >= 0; i--) {
        //console.log(str[i]);
        reversed += str[i];
    }
    console.log(reversed);1`.kn`
    return reversed
    
}
Inverthash("creature");