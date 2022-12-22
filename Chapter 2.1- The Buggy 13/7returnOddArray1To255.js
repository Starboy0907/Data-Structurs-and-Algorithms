//ReturnOddsArray1To255()
//Create & return array with odd integers 1 - 255.

function oddArray1to255() {
    var oddArray = [];
    for (var num = 1; num <= 255; num += 2) {
        oddArray.push(num);
    }
    console.log(oddArray);
}
oddArray1to255();
