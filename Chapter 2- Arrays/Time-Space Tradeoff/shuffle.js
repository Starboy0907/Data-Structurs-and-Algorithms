const shuffle = (deck) => {
    console.log(deck)
    let count = deck.length;
    let newDeck = [];
    for (i = 0; i < count;i++) {
        newDeck.push(deck.sort((a,b) => Math.random() - 0.5)) //this is the line of code that randomizes elements in an array
        count -= 1;
    }
    console.log(deck);
}
shuffle([1,2,3,4,5,6,7,8,9,10]);

//randomCard = Math.floor(Math.random() * index);

