//Sigma given a number, sum all positive integers up to that number

function Sigma(num) {
    sum = 0;
    console.log(sum);
    for (i = 0; i < num; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
        console.log(sum);
    }

}
Sigma(6);
Sigma(7);

//Factorial
function factorial(num) {
    sum = 1;
    for (i = 1; i < num + 1; i++) {
        console.log(i)
        if (i % 2 == 0) {
            sum *= i;
        }
    }
    console.log(sum);

}
factorial(3);
factorial(5);

//ThreeFives() - Add each value from 100 to 4000000 if that value is divisible by 3 or 5 but not both

function ThreeFives() {
    finalSum = 0;
    for (i = 0; i < 4000000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            finalSum += i
            if (i % 3 == 0 && i % 5 == 0) {
                continue;
            }
        }
    }
    console.log(finalSum)
}
ThreeFives()

function ThreeFives(start, stop) {
    finalSum = 0;
    for (i = start; i < stop; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            finalSum += i
            if (i % 3 == 0 && i % 5 == 0) {
                continue;
            }
        }
    }
    console.log(finalSum)
}
ThreeFives(100, 500)

function generateCoinChange(cents) {
    var change = cents
    var halfDollars = 0
    var quarters = 0
    var dimes = 0
    var nickels = 0
    var pennys = 0

    while (change > 49 ) {
        change -= 50
        halfDollars += 1
        
    }
    
    while (change > 24) {
        change -= 25
        quarters += 1
    }

    while (change > 9) {
        change -= 10
        dimes += 1
    }
    
    while (change > 4) {
        change -= 5
        nickels += 1
    }
    
    while (change > 0) {
        change -= 1
        pennys += 1
    }
    console.log(change,halfDollars,quarters, dimes, nickels, pennys)
    
}
generateCoinChange(988)

//Statistics to Doubles
function Statistics() {
    var rolls = 0;
    var rollStats = []
    let dieOne = 1
    let dieTwo = 2
    while (dieOne !== dieTwo) {
        dieOne = Math.floor((Math.random() * 6) +1);
        dieTwo = Math.floor((Math.random() * 6) +1);
        console.log(dieOne, dieTwo)
        rolls += 1
    }
    rollStats.push(rolls)
    console.log(rolls)
    console.log(rollStats)
}
Statistics()

//SumToOneDigit
//function takes number
//

const SumToOneDigit = (num) => {  //this is an arrow function
    num = Array.from(String(num), Number);  //convert num to an array to iterate through ea. digit
    //console.log(typeof(num))
    //console.log(num.length)
    let sum = 0  //set sum to 0 in order to += later
    
    for (i = 0; i < num.length; i++) {  //now that num is an array, we can loop through its length
        sum += num[i]  ///here we add the value at the given index
        //console.log(sum)
    }
    //console.log(typeof(sum))
    console.log(sum)
    if (sum >= 10) { //if sum is not a single digit, then we can we can call the function within the function and pass in the given sum until we reach a single digit.
        SumToOneDigit(sum)
    }
    
    return "Hello, single digit is ", sum
}
SumToOneDigit(32480498)

//Fibonacci Sequence Function
const Fibonacci = (num) => {
    arr = [0, 1]
    
    i = 0
    while (arr.length <= num) {
        arr.push(arr[arr.length - 1] + arr[arr.length -2])
        console.log(arr.length - 1 + arr.length - 2)
        i++
    }
    console.log(arr)
}
Fibonacci(18)

//LastDigit of A to the B

const LastDigit = (a, b) => {
    digit = [a ** b];
    console.log(digit)
    LD = Array.from(String(digit), Number);
    console.log(LD[LD.length - 1]);
}
LastDigit(9, 3)

//ClockHandsAngles
const ClockHandsAngles = (seconds) => {
    hourHandDeg =  seconds * 60 / 3;
    minuteHandDeg = seconds / 360 * 60 * 6;
    secondHandDeg = seconds / 60 * 360;
    console.log(hourHandDeg + " Hour-Hand Degrees//", minuteHandDeg + " Minute-Hand Deg//",
        secondHandDeg + " Second-Hand Degrees")
}
ClockHandsAngles(5)

//PushFront
const PushFront = (arr) => {
    
}

