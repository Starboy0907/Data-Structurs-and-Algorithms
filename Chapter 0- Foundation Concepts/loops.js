// Loops are for when a block of code need to be ran a number
// For Loops are for when you know how many loops you need
//While loops are for when you need to continue looping while a certain test is true
// Loops are a combination of loops and conditionals

for (var num = 1; num < 6; num = num + 1)
{
    console.log("I'm counting! The number is ", num);
}
console.log("We are done. Goodbye world!");

//While Loops

var num = 1;
while (num < 6)
{
    console.log("Im counting! The number is ", num);
    num = num + 1;
}
console.log("We are done. Goodbye world!");

//the break and continue keywords

//break will exit the loop and continue outside the loop

var num = 1;
while (num < 5) {
    if (num == 3) {
        break;
    }
    console.log("I'm counting! The number is ", num);
    num = num + 1;
}

//Continue will break the current iteration and began the next loop

for (var num = 1; num < 5; num += 1) {
    if (num == 3) {
        continue;
    }
    console.log("I'm counting! The number is ", num);
}

