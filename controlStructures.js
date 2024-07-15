// Day 3: Control Structures
// Activity 1: If-Else Statements

// Task: 1
function checkNumber(number) {
    if (number > 0) {
        console.log(`${number} is positive.`);
    } else if (number < 0) {
        console.log(`${number} is negative.`);
    } else {
        console.log(`${number} is zero.`);
    }
}
checkNumber(10);
checkNumber(-5);
checkNumber(0);


// Task: 2
function checkEligibility(age) {
    if (age >= 18) {
        console.log('You are eligible to vote.');
    } else {
        console.log('You are not eligible to vote.');
    }
}
checkEligibility(18);
checkEligibility(17);
checkEligibility(20);



// Activity 2: Nested If-Else Statements

// Task: 3
function findLargest(a, b, c) {
    let largest;

    if (a >= b) {
        if (a >= c) {
            largest = a;    
        } else {
            largest = c;
        }
    } else {
        if(b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }
    console.log(`The largest number is: ${largest}`);
}

findLargest(10, 20, 30);
findLargest(30, 20, 10);
findLargest(30, 10, 20);



// Activity 3: Switch Case

// Task: 4
function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = 'Sunday';
            break;

        case 2:
            dayName = 'Monday';
            break;

        case 3:
            dayName = 'Tuesday';
            break;

        case 4:
            dayName = 'Wednesday';
            break;

        case 5:
            dayName = 'Thursday';
            break;

        case 6:
            dayName = 'Friday';
            break;  

        case 7:
            dayName = 'Saturday';
            break;
    
        default:
            dayName = 'Invalid number. Please enter a number between 1 and 7.';
    }

    console.log(dayName);
}   
getDayName(1);
getDayName(2);
getDayName(3);
getDayName(4);
getDayName(5);
getDayName(6);
getDayName(7);
getDayName(8);


// Task: 5
function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = 'A'
            break;
        
        case (score >= 80):
                grade = 'B'
                break;

        case (score >= 70):
                grade = 'C'
                break;  

        case (score >= 60): 
                grade = 'D'
                break;

        case (score < 60):
                grade = 'F'
                break;

        default:
            grade = 'Invalid score'
    }

    console.log(`Your grade is: ${grade}`);
}
getGrade(95);
getGrade(85);
getGrade(75);
getGrade(65);
getGrade(55);



// Activity 4: Conditional (Ternary) Operator

// Task: 6
function checkEvenOdd(number) {

    let result = (number % 2 === 0) ? 'Even' : 'Odd';

    console.log(`The number ${number} is ${result}.`);
    
}
checkEvenOdd(10);
checkEvenOdd(11);



// Activity 5: Combining Conditions

// Task: 7
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`The year ${year} is a leap year.`);
    } else {
        console.log(`The year ${year} is not a leap year.`);
    }
    
}

checkLeapYear(2020);
checkLeapYear(2021);