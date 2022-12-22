// // let names = "Jamal";
// // let role = "Software Developer";

// // let aString = `Hello! My name is ${names} and I'm a ${role}`;
// // console.log(aString);

// //Is Palindrome
// //Knowledge Base:  1: Definition of a palindrome. 2: reverse the string or iterate back and forth 3: Iterate with a neasted for loop once a condition is meet with a while loop 4: Reuse Code and snippets 5. Initialixe effective count variables for comparison and selection. 

// const longPalindrome = (pal) => {
//     arr1 = [];
//     arr2 = [];
//     //newPal = pal.split(" ").join("");
//     temp = "";

//     for (let i = 0; i < newPal.length; i++) {
//         arr1.push(newPal[i]);
//     }

//     for (let i = newPal.length - 1; i >= 0; i--) {
//         console.log(newPal[i]);
//         arr2.push(newPal[i]);
//     }

//     console.log(arr1, arr2);

//     if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
//         console.log(true);
//     } else {
//         console.log(false)
//     }
// }
// longPalindrome("what up, dada?");

//2-3 min. 1) Setup the function to take a palindrome with a function call 2) create 2 empty arrays 3) split and join gthe array w/o spaces 3) create 2 for loops to iterate and populate the empty array, one forward and one backwards 4) compare the stringified arrays in a switch case
//challenge: longest palindrome

const lp = (palin) => {
    i = 0;
    polly = []
    temp = "";
    for (i = 0; i < palin.length; i++) {
        for (let k = i + 1; k < palin.length; k++) {
            if (palin[i] == palin[k]) {
                //console.log(temp += "***" + palin[k]);
                console.log(palin[i], palin[k])
                // for (let l = i; l < k; l++) {
                polly.push((k - i))          
                
                //temp = palin[j];
                //LongestPalinDrome();
            }
        }
    }
    console.log(polly);
}
        // temp = palin[i]
        // console.log(i,temp,palin[i]);
    
        //console.log(temp);
    
lp("what's up, dada?");

