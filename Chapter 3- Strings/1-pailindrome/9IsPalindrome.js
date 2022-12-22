//Is Palindrome
//Knowledge Base:  1: To ignore spaces, be able to split string apart and remove spaces with a join. 2: reverse the string or iterate back and forth 3: Use a set of switch cases 4: Proper comparison of arrays

const isPalindrome = (pal) => {
    arr1 = [];
    arr2 = [];
    newPal = pal.split(" ").join("");
    for (let i = 0; i < newPal.length; i++) {
        arr1.push(newPal[i]);
    }

    for (let i = newPal.length - 1; i >= 0; i--) {
        console.log(newPal[i]);
        arr2.push(newPal[i]);
    }
    console.log(arr1, arr2);
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        console.log(true);
    } else {
        console.log(false)
    }
}
isPalindrome("dad");

//2-3 min. 1) Setup the function to take a palindrome with a function call 2) create 2 empty arrays 3) split and join gthe array w/o spaces 3) create 2 for loops to iterate and populate the empty array, one forward and one backwards 4) compare the stringified arrays in a switch case
//challenge: longest palindrome