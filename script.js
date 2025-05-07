// // This is a primitive Datatype
// // String, Number, Boolean, Null, Undefined, Symbol, BigInt

// // 1.
// console.log(200)

// //2.
// let myAge = 45;
// myAge = 55; // // myAge variable has been reassigned to 55. The value of myAge is now 55. The original value of 45 is lost and cannot be retrieved.
// console.log(myAge);  // // 55

// //3.
//  let num1 = 4 + 5, num2 =90 * 4, num3 = num2/num1;
// console.log (num3); // // 36.0, because num1 = 9 and num2 = 360, so num3 = 360/9 = 40.0


// // 4.
//  let num1 = "4" + 5, num2 =90 * 4, num3 = num2/num1;
// console.log (num3); // // 40.0, because num1 = 45 and num2 = 360, so num3 = 360/45 = 8.0. The string "4" is concatenated with the number 5 to form the string "45", which is then used in the division operation.


// //5.
//  let valueOne = "4" + 5000 + 2, val2 = 89 + "2" +9, num3 = 88 + 87 + "2" -40;
// console.log (valueOne, val2, num3); // // "450002", "8929", 135.0
// console.log (typeof valueOne, typeof val2, typeof num3); 
// //valueOne and val2 are strngs because the "+" operator supports string concatenation and addss the numbers to the string. The "-" operator only supports number addition and subtraction, so it forces the string to become a number before performing the operation.


// //6.
// const yourAge = 67;
// yourAge = 70; // // This will cause an error because 'const' variables cannot be reassigned
// console.log(yourAge);

// //7. 
// let kezaya = "Today is my sister's birthday"; // // The double quotes allows us to use single quotes inside the string without causing an error. The single quotes are treated as part of the string and do not terminate the string.
// console.log(kezaya);

// //8. DataTypes Examples- number, string, boolean, null, undefined
// // Primitive DataTypes- They are the data types that can hold only one value at a time and are immutable. They are also called value data types. Examples of primitive data types include: Number, String, Boolean, Null, Undefined, Symbol, BigInt.
//  let myNumber = 5;
// let myString = "5";
// myString = "This is a string";
// let myBoolean = true;
// let myNull = null;
// let myUndefined = undefined;
// console.log (typeof myNumber, typeof myString, typeof myBoolean, typeof myNull, typeof myUndefined);
// console.log(myNumber, myString, myBoolean, myNull, myUndefined);


// //9a.
// //Non-primitve DataTypes- They are the data types that can hold multiple values and are mutable. They are also called reference data types. They are stored in the heap memory and can be changed or modified. Examples of non-primitive data types include: Object, Array, Function, Date, e.t.c.

// // 9b.
// // Objects: are used to store multiple values in a single variable. They are unordered collections of key-value pairs, where each key is a string and each value can be any data type, including other objects and arrays. Objects are created using curly braces {}, their contents can be changed after they are created and can be accessed using dot notation or bracket notation.

// const student = {
//     "S/N": "1, 2, 3, 4, 5",
//     Name: "John Doe",
//     Age: 25,
//     isHappy: true,
// }
// console.log(student);
// console.log(student.Name);


// //10. 
// // Arrays: are used to store multiple values in a single variable. They are ordered collections of values and can hold any data type, including other arrays and objects. Arrays are mutable, meaning their contents can be changed after they are created. They are also zero-indexed, meaning the first element is at index 0.
// const myArray1 = [1,2,3,4,5,6,7,8,9,10];
// const myArray2 = ["John", "Doe", 25, true, null, undefined, { Name: "John Doe" }, [1, 2, 3]];
// console.log(myArray1, myArray2);
// alert (`${myArray1}, ${myArray2[3]}`);
// console.log (myArray2.length);

// // Arrays are ordered in the sense that the first element is at index 0, the second element is at index 1, and so on. For example, in the array myArray1, the first element is 1 (at index 0), the second element is 2 (at index 1), and so on. The last element is 10 (at index 9).
// // The length of the array is the number of elements in the array. For example, in the array myArray1, the length is 10 because there are 10 elements in the array. The length property can be used to get the number of elements in an array. For example, myArray1.length will return 10.


// //11.
// const student = {
//         "S/N": "1, 2, 3, 4, 5",
//         Name: "John Doe",
//         Age: 25,
//         isHappy: true,
//     }
//  const myArrays = ["Amaka", "Chijioke", 300, false, { name: "John Doe" }, [1, 2, 3]];
// console.log(myArrays[0]); // Amaka
// console.log(myArrays[1]); // Chijioke
// console.log(myArrays[2]); // 300
// console.log(myArrays[3]); // false
// console.log(myArrays[4]); // { name: "John Doe" }
// console.log(myArrays[5]); // [1, 2, 3]
// console.log(student["S/N"]); // 1, 2, 3, 4, 5
// console.log (student.Age); // 25
// console.log (student.isHappy); // true

// //12. 
// Operators in JavaScript: There are different operators in Js, their main purpose is to perform operations on variables and values. They are used to manipulate data and variables in a program. The most common types of operators in JavaScript include:
// Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Unary Operators, Ternary Operators. Others include: Bitwise Operators, and Relational Operators.

// //12a.
//  Arithmetic Operators: +, -, *, /, %, ** (Exponentiation), ++ (Increment), -- (Decrement). Example:

// let a = 10, b = 5;
// const sum = a + b; // Addition
// console.log(sum); // 15

// const sub = a - b; // Subtraction
// console.log(sub); // 5

// const mul = a * b; // Multiplication
// console.log(mul); // 50

// const div = a / b; // Division
// console.log(div); // 2

// const mod = a % b; // Modulus (Remainder)
// console.log(mod); // 0



// //12b. Assignment Operators: =, +=, -=, *=, /=, %=, **=, ++=, --=
// let x=10, y=5, z=20;
// console.log (x += y); // 15, x = x + y
// console.log (x -= y); // 10, x = x - y
// console.log (z *= y); // 100, z = z * y
// console.log (z /= y); // 20, z = z / y
// console.log (y %= x); // 5, y = y % x
// console.log (x **= y); // 100000, x = x ** y


// //13.
// //Comparison Operators: ==, ===, !=, !==, >, <, >=, <=. 
// // Comparism operators are used to compare two values and return a boolean value (true or false).
//let a = 10;
// let b = 20;
// let c = 10;
// const d = 20;
// const e = 20;
// const f = "mary";
// const g = "20";


// //13a.
// // Equals To
// console.log (c == d); // false
// console.log(d == e); // true 

// //13b.
// // Greater Than
// console.log(c > f); // false, because f is a string, when it is compared to a number, it becomes NaN (Not a Number), annd NaN always returns false when compared to any number or itself.
// console.log(d >= e); // true
// console.log (a > d); // false

// //13c.
// // Strictly Equals to: it compares beyond the value, it compares the data type as well.
// console.log (e === g); // false, because e is a number while g is a string.
// console.log (e == g); // true, this is a loose equality check, it only compares the value and not the data type.

// //14.
// // Logical Operators: && (AND), || (OR), ! (NOT), Not Equals To (!=), Not Strictly Equals To (!==)

// //14a.
//  OR Operator: returns a boolean value (true or false) if any of the operands(expression) is true/correct.
// //Ayo's Admission Details
// const fees = true;
// const uniform = true;
// const id = false;
// const textbook = false;
// const checkOR = fees || uniform || id || textbook;
// console.log(checkOR); // true because at least one of the operands is true.

// // 14b. 
// // NOT Operator: reverses the boolean value of the operand. It returns true if the operand is false and false if the operand is true.
// const checkNOT = !fees;
// console.log (checkNOT) // false
// // console.log(c != d); // false

// //14c.
// // AND Operator: only returns a boolean value (true or false) if all the operands(expressions) are true/correct. For it to work, the expressions must be fully true or fully false.
// const checkAND = fees && uniform && id && textbook;
// console.log(checkAND); // false because not all the operands are true.
// const checkAYO = fees && uniform; 
// const checkAmaka = (fees && uniform) || (fees && id);
// console.log (checkAmaka); // true because at least one of the operands is true.

// // 15.
// // Unary Operators: are operators that take only one operand. They are used to perform operations on a single value. Examples of unary operators include: + (Unary Plus), - (Unary Minus), ++ (Increment), -- (Decrement), ! (Logical NOT).
// // 15a.Increment and Decrement Operators: ++ (Increment), -- (Decrement)
// let h = 3; 
// console.log (h); // 3
// console.log (h++); // 3, this will display the original value of h before incrementing it by 1. The increment happens after the value is displayed. this is called post-increment(after increment).
// console.log (h); //4. New value of h after incrementing it by 1

// //15b.
// let bigNum = 12000, smallNum = 1000;
// console.log (++bigNum); // 12001, this will display the new value of bigNum after incrementing it by 1. The increment happens before the value is displayed. this is called pre-increment(before increment).
// console.log (--bigNum); // 12000, this will display the new value of bigNum after decrementing it by 1. The decrement happens before the value is displayed. this is called pre-decrement(before decrement).

// //NOTE: The increment and decrement operators can be used in both pre and post forms. The pre form increments or decrements the value before it is used in the expression, while the post form increments or decrements the value after it is used in the expression.



// // 16.
// //Tenary Operator: A shorthand way of writing an if-else statement. It takes three operands and is often used as a shortcut for the if statement.
// //Syntax: condition ? expressionIfTrue : expressionIfFalse. The ? acts as a gateway

// const tenTest = 76 > 55 ? "Yes, This is correct"    :   "No, That's not correct"

// //Write a program that tells if a user is legible to vote
// userAge= prompt ("Enter your age: ");
// let voting = (userAge >= 18) ? "You're eligible" : "You need to grow up first";
// console.log(voting);
// alert (voting);

// let age = 18;
// let voting = (age >= 18)  ?  "You are eligible"  : "You are not eligible";
// // console.log(voting);

//Write a program that checks the age of a user less than 100 and greater than or equal to 18. If the user is less than 100 and greater than or equal to 18, display "You can vote", else display "You cannot vote".
// let voting = (age < 100) && (age >= 18) ? "You can vote"  :  "You cannot vote"
// console.log(voting);






// // JAVASCRIPT DAY 2 // // // //
// //Conditional Statements- if, else, else if

// //1. If Statements: The if statement will not display anything as long as the condition remains false. i.e It only displays when the condition is true.
// //Syntax: if (condition) {expression}
// //a.
// let a = 65;
// let b = 98;
// console.log (b > a); // true, because 98 is greater than 65

// //b.
// if (b > a) {
// console.log ("b is greater than than a"); // This will display because the condition is true.
// }
// if (b < a) {
// console.log("b is less than a"); // This will not display because the condition is false. This is why the else statement is needed to display the expression when the condition is false.
// }

// //2. if-else Statements: if (condition) {expression} else {expression} 
// //The if-else statement will display the expression in the if block if the condition is true, and the expression in the else block if the condition is false.

// //2a.
// let a = 0.5;
// let b = 10.5;

// if (a > b) {
//     console.log ("a is the greater number"); // This will not display because the condition is false.
// }
// else {
//     console.log ("b is the greater number");// The else block is allowed to display because the condition is false.
// }


// // 3a. Write a program that checks if users password matches the database password. If it does, display "Welcome to the system", else display "Invalid username or password".

// let DBPass = "myPass****", userPass = "myPass****"; 

// if (DBPass === userPass) {
//     console.log ("Welcome to the System");
// } else {
//     console.log ("Invalid login details");
// }

// // 3b.
// let DBPass = "Kez12345";
// let inputPass = prompt("Enter your password: "); // Store the user input in inputPass
// if (inputPass === DBPass) {
//     alert("Welcome to the system"); 
//     console.log(inputPass);
// }
// else {
//     alert("Invalid name or password");
//     console.log(inputPass);
// }

// let DBPass = "Kez12345"; //represents the password in the database
// let DBUser = "Kez12345"; //represents the user password inputted upon login

// if (DBPass === DBUser) {
//     console.log ("Welcome To The System"); 
// }
// else {
//     console.log ("Invalid name or password");
// }


// //4.
// // Prompts and Alerts: 
// // Prompt: is a built in function that allows you accept user input. It takes a string as an argument and returns the value entered by the user as a string, i.e it always returns a string even if the user enters a number. That means you have to convert the string to a number using Number() or parseInt() before using it in calculations.

// // prompt (this round brackets called parenthesis and displays the dialog box to the user)

// //4a.
// let myData= prompt ("Welcome to GlobalFin Services. Please enter your username:");
// let myPass= prompt ("Please enter your password:");
// let myPhone= prompt ("Please enter your phone number:");
// // This will display a dialog box to the user with the message "Please enter your username:" and an input field for the user to enter their username, the same goes for the password and phone number. But the input is not stored in any variable, so it will not be used in the program. It will only function as a prompt to the user.
// // To store the input in the "database" (variables), you need to assign the prompt to a variable. For example:
// console.log (myData);
// console.log (myPass);
// console.log (myPhone); // //This will display all the 3 inputs in the console.
// console.log (myData, myPass, myPhone);
// // This will display the 3 inputs in the console as a single string.
// alert (myData + " " + myPhone);


// //5.
// // Write a program that allows user to enter a number and alerts the lucky number the user entered.

// const userNum = parseInt (prompt("Enter a Number: "));
// console.log (`The number you entered is: ${userNum}`);
// console.log (typeof (userNum)); 

// if (userNum === 0) {
//     alert ("Zero is not a lucky number");
// }
// else if  (userNum > 0) {
//     alert (`Your lucky number is ${userNum}`);
// }
// else if (isNaN(userNum)) {
//     alert ("Please enter a valid number");
// }
// else if (userNum < 0) {
//     alert ("Ofcourse, negative numbers are not lucky numbers");
// }
// else if (userNum === "") {
//     alert ("Please enter a number");
// }
// else {
//     alert ("Please enter a valid number");

// //6.
// // Prompt sees the input as a string, so we need to convert it to a number using Number() or parseInt().
// const valueOne = prompt ("Enter a number: ");
// console.log (typeof (valueOne));
// alert (typeof (valueOne)); 

// // 6b.
// // Write a program that displays a prompt asking the user to enter a number and converts the input to a number using Number() or parseInt(). 
// //Then check if the number is positive, negative or zero. If it is positive, display "The number is positive", if it is negative, display "The number is negative", and if it is zero, display "The number is zero".
// // The program should also check if the input is a number or not. If it is not a number, display "Please enter a valid number". If the input is empty, display "Please enter a number".

const val1= parseInt (prompt ("Enter a number: "));
if (val1 > 0) {
    alert (`${val1} is a positive number`);
    console.log (typeof (val1)); 
}
else if (val1 < 0) {
    alert (`${val1} is a negative number`);
    console.log (typeof (val1)); 
}
else if (val1 === 0) {
    alert (`${val1} is not a lucky number, please try again`);
    console.log (typeof (val1)); 
}
else if (isNaN(val1)) {
    alert ("Please input a valid number");
    console.log (typeof (val1)); 
}
else if (val1 === "" || val1 === null) { 
    alert("You have not entered a number, please enter a number");
    console.log (typeof (val1));
}
else {
    alert ("Please enter a valid number");
}












