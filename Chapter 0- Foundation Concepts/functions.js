//Function are for code that you expect to call often
function printMyName() {
    console.log("My name is Martin");
}

printMyName();

//parameters
function greetSomeone(person) {
    
    if (person == "Martin") {
        console.log("Yo dawg!, howz it goin?");
    
    }
    else {
        console.log("Greetings Earthling!");
    }

}
greetSomeone("Martin")

//return
let x = myFunction(4, 3) 
    function myFunction(a, b) {
        return a * b;
}
console.log(x)