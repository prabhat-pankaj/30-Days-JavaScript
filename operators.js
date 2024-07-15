// Day 2: Operators

// Activity1: Arithmetic Operators
// Task: 1
function addTwoNums(num1, num2) {
   return num1 + num2;
}

console.log(addTwoNums(20, 50));

// Task: 2
function subTwoNums(num1, num2) {
   return num1 - num2;
}

console.log(subTwoNums(50, 15));

// Task: 3
function mulTwoNums(num1, num2) {
   return num1 * num2;
}

console.log(mulTwoNums(50, 5));

// Task: 4
function divTwoNums(num1, num2) {
   return num1 / num2;
}

console.log(divTwoNums(50, 5));


// Task: 5
let mod1 = 20;
let mod2 = 3;
console.log(mod1 % mod2);


// Activity 2: Assignment Operators
// Task: 6
function AssOprAdd(num) {
   return num += 10
}
console.log(AssOprAdd(20));

// Task: 7
function AssOprSub(num) {
   return num -= 15
}
console.log(AssOprSub(50));


// Activity 3: Comparison Operators
// Task: 8
let num1 = 20;
let num2 = 10
// if(num1 > num2) {
//    console.log("20 is greater than 10");
// } else {
//    console.log("10 is less than 20");
// }

if(num1 < num2) {
   console.log("20 is greater than 10");
} else {
   console.log("10 is less than 20");
}


// Task: 9

// if(10 >= 10) {
//    console.log("20 is greater than 10");
// }

if (10 <= 15) {
   console.log("10 is less than 15");
}


// Task: 10

console.log(8 == '8');
console.log(8 === '8');


// Activity 4: Logical Operators

let x = 7;
let y = 18;

// Task: 11
console.log(x < 10 && y > 11);

// Task: 12
console.log(x == '10' || y === '10');

// Task: 13
console.log(!(x == y));


// Activity 5: Ternary Operator
function checkNumber(num) {
   let result = num >= 0 ? 'Positive' : 'Negative';
   
   console.log(`The number ${num} is ${result}.`);
}

checkNumber(10);  
checkNumber(-5);  
checkNumber(0);   