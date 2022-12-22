//Knowledge Base: 1: how to iterate through a javascript object; 2: how to access both specific keys and specific values; 3: how to create keys and values in an empty object;


const InvertHash = (object) => {
    newob = {};
    //object['d'] = 4; 
    for (const [key, value] of Object.entries(object)) {
        //console.log(key, value);
        newob[value] = key;
    }
    console.log(Object.keys(object)[1])
    console.log(newob);
}
InvertHash({ 'a': 1, 'b': 2, 'c': 3 })

//2-3 min: 1: create a function that takes an object as a parameter
//2: create an empty object
// 3: create a for loop to iterate through the parameterized object
// 4: create the specified key, value pair on each iteration
// 5: call the function
