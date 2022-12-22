const SecondLargest = (arr) => {

    // initialize an empty array
    console.log(arr);
    largest = 0;
    secondLargest = 0;
    marker = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
            marker = i;
            arr[i] = arr[arr.length - 1];
        }
    }
    console.log("The largest number in the array", largest);

    for (i = marker; i < arr.length; i++) {
        if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    console.log("The second largest number in the array is", secondLargest);
}
SecondLargest([47, 348, 290, 89, 237, 238]);
