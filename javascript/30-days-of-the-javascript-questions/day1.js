// 2667. Create Hello World Function
// Easy
// Companies
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".
 

// Constraints:

// 0 <= args.length <= 10

/**
 * @return {Function}
 */
const createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }()
};


const z = createHelloWorld();

add(1,2)

function add(a,b){
    return a + b;
}

//Arrow function doesn't support them 

add(1,2)

const add = (a,b) => {
    return a + b;
}

//Closures

const c = 10;

function add(a,b){
    return a + b + c;
}

add(1,2)

//Closures part II

function createCounter(){
    let value = 0; // HIDDEN STATE

    function increment(){
        return ++value;
    }

    return {
        increment: increment
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment())
console.log(counter1.increment())

console.log(counter2.increment())

//Spread Operator


let a = [1, 2];

let b = [3, 4];

console.log([...a, ...b])

function add(...args){
    return args[0] + args[1]
}

add(...a)