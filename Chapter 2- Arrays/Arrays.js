//Is Palindrome
//Knowledge Base:  1: To ignore spaces, be able to split string apart and remove spaces with a join. 2: reverse the string or iterate back and forth 3: Use a set of switch cases 4: Proper comparison of arrays

const isPalindrome = (pal) => {
    arr1 = [];
    arr2 = [];
    pal.split(" ");
    pal.join("");
    for (let i = 0; i < pal.length; i++) {
        arr1.push(pal[i]);
    }

    for (let i = pal.length - 1; i >= 0; i--) {
        console.log(pal[i]);
        arr2.push(pal[i]);
    }
    console.log(arr1, arr2);
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        console.log(true);
    }
    else {
        console.log(false)
    }
}
isPalindrome("d ad")


