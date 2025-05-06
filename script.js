// // This is a primitive Datatype
// // String, Number, Boolean, Null, Undefined, Symbol, BigInt

// console.log(200)

// let myAge = 45;
// myAge = 50;
// myAge = 55;
// console.log(myAge);

// const yourAge = 67;
// yourAge = 70; // This will cause an error because 'const' variables cannot be reassigned
// console.log(yourAge);

// let kezaya = "Today is my sister's birthday";

// console.log(kezaya);

// let myNumber = 5;
// let myString = "5";
// myString = "This is a string";
// let myBoolean = true;
// let myNull = null;
// let myUndefined = undefined;

// console.log(myNumber, myString, myBoolean, myNull, myUndefined);


// // Non-primitve DataTypes
// // Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet

// // Object
// const student = {
//     "S/N": "1, 2, 3, 4, 5",
//     Name: "John Doe",
//     Age: 25,
//     isHappy: true,
// };

// console.log(student);
// console.log(student.Name);


// // Array
// const myArray = [1,2,3,4,5,6,7,8,9,10];
// const myArray2 = ["John", "Doe", 25, true, null, undefined, { Name: "John Doe" }, [1, 2, 3]];
// console.log(myArray);
// console.log(myArray2);


// const myArrays = ["Amaka", "Chijioke", 300, false, { name: "John Doe" }, [1, 2, 3]];
// console.log(myArrays[0]); // Amaka
// console.log(myArrays[1]); // Chijioke
// console.log(myArrays[2]); // 300
// console.log(myArrays[3]); // false
// console.log(myArrays[4]); // { name: "John Doe" }
// console.log(myArrays[5]); // [1, 2, 3]
// console.log(student["S/N"]); // 1, 2, 3, 4, 5

//Operators in JavaScript
// Arithmetic Operators: +, -, *, /, %, ** (Exponentiation), ++ (Increment), -- (Decrement). Example:

// let a = 10;
// let b = 5;
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



// Assignment Operators: =, +=, -=, *=, /=, %=, **=, ++=, --=


// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=. 
// Comparism operators are used to compare two values and return a boolean value (true or false).

// let c = 10;
// const d = 20;
// const e = 20;
// const f = "mary";
// const g = "20";


// //Equals To
// console.log (c == d); 
// console.log(d == e); 

// //Greater Than
// console.log(c > f);
// console.log(d >= e); // true
// console.log (a > d);

// //Strictly Equals to: it compares beyond the value, it compares the data type as well.
// console.log (e === g); // false
// console.log (e == g); // true

// // Logical Operators: && or & (AND), || (OR), ! (NOT)
// //Not Equals To

// //OR Operator: returns a boolean value (true or false) if any of the operands(expression) is true/correct.
// console.log(c != d); // false

// //Ayo's Admission Details
// const fees = true;
// const uniform = true;
// const id = false;
// const textbook = false;

// const checkOR = fees || uniform || id || textbook;
// console.log(checkOR); // true because at least one of the operands is true.

// //AND Operator: only returns a boolean value (true or false) if all the operands(expressions) are true/correct. For it to work, the expressions must be fully true or fully false.
// const checkAND = fees && uniform && id && textbook;
// console.log(checkAND); // false because not all the operands are true.


// const checkAYO = fees && uniform; 

// const checkAmaka = (fees && uniform) || (fees && id);
// console.log (checkAmaka); // true because at least one of the operands is true.

// //Unary and Ternary Operators
// //Increment and Decrement Operators: ++ (Increment), -- (Decrement)

// let h = 3; 
// console.log (h); // 3
// h++; // Increment h by 1
// console.log (h++); // 4
// console.log (h--);

// //Tenary Operator: A shorthand way of writing an if-else statement. It takes three operands and is often used as a shortcut for the if statement.

// //Syntax: condition ? expressionIfTrue : expressionIfFalse. The ? acts as a gateway

// const tenTest = 76 > 55 ? "Yes, This is correct"    :   "No, That's not correct"

// //Write a program that tells if a user is legible to vote

// let age = 18;
// // let voting = (age >= 18)  ?  "You are eligible"  : "You are not eligible";
// // console.log(voting);

// let voting = (age < 100) && (age >= 18) ? "You can vote"  :  "You cannot vote"
// console.log(voting);




// // JavaScript- Day 2
// //Conditional Statements- if, else, else if

// //1. If Statements: if (condition) {expression}- will not display anything as long as the condition remains false. It only displays when the condition is true.

// let a = 65;
// let b = 98;
// console.log (b > a); // true, because 98 is greater than 65

// if (b > a) {
//     console.log ("b is greater than than a"); // This will display because the condition is true.
// }

// if (b < a) {
//     console.log("b is less than a");// This will not display because the condition is false.
// }

// //2. if-else Statements: if (condition) {expression} else {expression} 
// //The if-else statement will display the expression in the if block if the condition is true, and the expression in the else block if the condition is false.

// let a = 0.5;
// let b = 10.5;

// if (a > b) {
//     console.log (" a is the greater number"); // This will not display because the condition is false.
// }
// else {
//     console.log ("b is the greater number");// The else block is allowed to display because the condition is false.
// }


// // Write a program that checks if users passwpord matches the database password. If it does, display "Welcome to the system", else display "Invalid username or password".

// let DBPass = "Kez12345"; //represents the password in the database
// let DBUser = "Kez12345"; //represents the user password inputted upon login

// if (DBPass === DBUser) {
//     console.log ("Welcome To The System"); 
// }
// else {
//     console.log ("Invalid name or password");
// }


// //Prompts and Alerts: 
// //Prompt: is a built in function that allows you accept user input. It takes a string as an argument and returns the value entered by the user as a string, i.e it always returns a string even if the user enters a number. That means you have to convert the string to a number using Number() or parseInt() before using it in calculations.

// //prompt (this round brackets called parenthesis and displays the dialog box to the user)
// prompt ("Welcome to GlobalFin Services. Please enter your username:");
// prompt ("Please enter your password:");
// prompt ("Please enter your phone number:");
// // This will display a dialog box to the user with the message "Please enter your username:" and an input field for the user to enter their username, the same goes for the password and phone number. But the input is not stored in any variable, so it will not be used in the program. It will only function as a prompt to the user.

// // To store the input in the "database" (variables), you need to assign the prompt to a variable. For example:

// const myData = prompt ("Welcome to GlobalFin Services. Please enter your username:");
// const myPass = prompt ("Please enter your password:");
// const myPhone = prompt ("Please enter your phone number:");

// console.log (myData);
// console.log (myPass);
// console.log (myPhone);
// //This will display all the 3 inputs in the console.

// console.log (myData, myPass, myPhone);
// //This will display the 3 inputs in the console as a single string.

// alert (myData + " " + myPhone);










