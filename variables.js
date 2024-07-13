// Activity 1: Variable Declarations
// Task: 1
var num = 10;
console.log(num);
num = 20;
console.log(num);

// Task: 2
let str = "Hello World";
console.log(str);


// Activity 2: Constant Declarations
// Task: 3
const isLoggedIn = true;
console.log(isLoggedIn)


// Activity 3: Data Types
// Task: 4

let x = 10;
console.log(typeof x);

let myName = 'Prabhat';
console.log(typeof myName);

let booleanVal = false;
console.log(typeof booleanVal);

let obj = {
    name: 'Prabhat',
    age: 20
};
console.log(typeof obj);

let arr = [1, 2, 3];
console.log(typeof arr);
// Note: In JavaScript, arrays are considered objects, so the typeof operator returns "object" for arrays.


// Activity 4: Reassigning Varibles;
// Task: 5
let myVariable = 'NIFT-Shillong'
console.log(myVariable);
myVariable = 'IIT-Mumbai'
console.log(myVariable);


// Activity 5: Understanding const
// Task: 6
const myConstant = 10;
console.log(myConstant);

// myConstant = 20;
// console.log('Initial Value:', myConstant); // Error: Assignment to constant variable

try {
    myConstant = 20;
} catch (error) {
    console.log('Error when trying to reassing', error);
}