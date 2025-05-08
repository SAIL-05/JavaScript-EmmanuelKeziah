// // // // 28/04/2025- JAVASCRIPT DAY 1  BY MR SAMUEL// // // //
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


// // // // 06/05/2025- JAVASCRIPT DAY 2 BY MR SAMUEL// // // //

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


// // // //  06/05/2025- JAVASCRIPT DAY 2 BY MR SAMUEL// // // //
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


// // // // 06/05/2025- JAVASCRIPT DAY 3 BY MR SAMUEL  // // // //
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

// const val1= parseInt (prompt ("Enter a number: "));
// if (val1 > 0) {
//     alert (`${val1} is a positive number`);
//     console.log (typeof (val1)); 
// }
// else if (val1 < 0) {
//     alert (`${val1} is a negative number`);
//     console.log (typeof (val1)); 
// }
// else if (val1 === 0) {
//     alert (`${val1} is not a lucky number, please try again`);
//     console.log (typeof (val1)); 
// }
// else if (isNaN(val1)) {
//     alert ("Please input a valid number");
//     console.log (typeof (val1)); 
// }
// else if (val1 === "" || val1 === null) { 
//     alert("You have not entered a number, please enter a number");
//     console.log (typeof (val1));
// }
// else {
//     alert ("Please enter a valid number");
// }


// //Write a program that determines the greatest of two numbers.
// const num1 = parseInt (prompt ("Enter a number:"));
// const num2 = parseInt (prompt ("Enter another number:"));

// if (num1 > num2) {
//     console.log (`${num1} is the greater number`);
//     alert (`${num1} is the greater number`);
// }
// else if (num1 < num2) {
//     console.log (`${num2} is the greater number`);
//     alert (`${num2} is the greater number`);
// }
// else if (num1 === num2) {
//     console.log (`${num1} is really equal to ${num2}`);
//     alert (`${num1} is really equal to ${num2}`);
// }
// else if (isNaN (num1) || isNaN(num2)) {
//     console.log ("Please enter a valid number");
//     alert ("Please enter a valid number");
// }
// else {
//     console.log ("Please enter a valid number");
// }


// //Write a program that transforms a numerical grade to a letter grade (e.g grade 0-39 should display "F", grade 40-44 should display "E", grade 45-49 should display "D", grade 50-59 should display "C", grade 60-69 should display "B", grade 70-100 should display "A")
const grade = (parseInt(prompt("Enter your grade: ")));
if ((grade >= 70) && (grade <= 100)) {
    console.log ("Way to go champ, you got an A");
}
else if ((grade >= 60) && (grade <= 69))  {
    console.log ("Yay, you got a B");
}
else if ((grade >= 50) && (grade <= 59)) {
    console.log ("Not bad, you got a C");
}
else if ((grade >= 45) && (grade <= 49)) {
    console.log ("You got a D, try harder next time");
}
else if ((grade >= 40) && (grade <= 44)) {
    console.log ("You got an E, try harder next time");
}
else if ((grade >= 0) && (grade <= 39)) {
    console.log ("You just ey waste your parents money, you got an F");
}
else if (isNaN(grade)) {
    console.log ("Please enter a valid number");
}


// // // 08/05/2025- JAVASCRIPT DAY 4  BY MR IFE & MR JOSHUA// // //
// Properties and Methods
// Non-primitive/Object Datatypes: They are so-called because they always return an object.
// Examples include Arrays, Functions, and Objects.

// ARRAYS- They can store multiple values in one variable. There are different ways to store values in an array.
// // 1. Using the Array constructor: const myArray = new Array(1, 2, 3, 4, 5); // the new keyword is used to create a new instance of the Array object. The Array constructor takes any number of arguments, which are the elements of the array. The elements can be of any data type, including other arrays and objects.
// // 2. Using the square brackets e.g:
// const myArray = [1, 2, 3, 4, 5]; // this is the most common way to create an array.
// console.log (myArray.length); // 5, this will display the number of elements in the array. The length property returns the number of elements in the array. It cannot be changed or modified, the length property is automatically updated when elements are added or removed from the array.

// To pick the objects in the array, we use the index. Index starts from 0.
// console.log (myArray[3]); // 4.
// When the index of an array is unknown, how do we access the last elements in the array?
// // We can use the [length -1] property. i.e console.log (myArray[myArray.length - 1]) will return the last element in the array.
// console.log (myArray[myArray.length - 1]); // 5, this will display the last element in the array.


//METHODS
// Methods helps us to manipulate, add, remove, and access elements in the array. 
// They are called methods because they are associated with the array object. Methods are called using the dot notation, e.g: myArray.push(6), where push is the method and 6 is the argument passed to the method.

// 1. push(): adds one or more elements to the end of an array and returns the new length of the array. It can take any number of arguments, which are the elements to be added to the array. The elements can be of any data type, including other arrays and objects.
// 2. pop(): removes the last element from an array and returns that element. This method changes the length of the array. It does not take any arguments. It is used to remove the last element from the array. If the array is empty, it returns undefined.
// e.g 
// console.log(myArray.push(6));
// console.log(myArray);
// console.log(myArray.pop());
// console.log(myArray);

// myArray.pop();
// to remove the last elent of an array
// myArray.pop();
// remove the first element of an array
// myArray.shift();
// to add an element to the end of an array
// myArray.push(6);
// to add an element to the beginning of an array
// myArray.unshift(0);
// to find the length of an array
// myArray.length;
// to find the index of an element in an array
// myArray.indexOf(3);
// to find the last index of an element in an array
// myArray.lastIndexOf(3);
// to know if an element is in an array
// myArray.includes(3);
// to find character in a string, use charAt()
// to find the last character in a string, use charAt(string.length - 1);
// to find the first character in a string, use charAt(0);
// .join();
// .join("...");
// .slice(); removes the items in the array and returns a new array. it takes two arguments, the start index and the end index. The start index is inclusive and the end index is exclusive. It does not change the original array. It returns a new array with the elements from the start index to the end index. The original array remains unchanged.
// console.log(myArray.slice(1, 3)); // [2, 3], this will display the elements from index 1 to index 2. The end index is exclusive, so it does not include the element at index 3. stop before you get to index 3.
// .splice (); to delete items, update the values and add new values to the array. It takes three arguments, the start index, the delete  count and the new values to be added. It changes the original array and returns the deleted elements as a new array. The start index is inclusive and the delete count is the number of elements to be deleted from the start index. The new values are the elements to be added to the array. The new values can be of any data type, including other arrays and objects.

// console.log (myArray.splice(2, 0, 'ope')); // start at 2, delete 0 elements and add 'ope' to the array. This will not change the original array because the delete count is 0. It will only add 'ope' to the array at index 2. The original array remains unchanged.
// console.log (myArray.splice (2, 2)); //starts at index 2, deletes 2 elements and return the remaining values


// push,pop- remove or add from the end of the array
//shift, unshift- remove or add from the front of the array

// 3. shift(): removes the first element from an array and returns that element. This method changes the length of the array. It does not take any arguments. It is used to remove the first element from the array. If the array is empty, it returns undefined.
// console.log(myArray.shift());

//4. unshift(): adds one or more elements to the beginning of an array and returns the new length of the array. It can take any number of arguments, which are the elements to be added to the array. The elements can be of any data type, including other arrays and objects.
// console.log(myArray.unshift(0));


// What if the index of the element is unknown?
// .indexOf(): returns the first index at which a given element can be found in the array, or -1 if it is not present. It takes one argument, which is the element to be searched for in the array. The search is case-sensitive and starts from index 0. If the element is not found, it returns -1. can be used to get something in the middle of the array.
// console.log(myArray.indexOf(3)); // 2, this will display the index of the first occurrence of the element 3 in the array. If the element is not found, it returns -1


//OBJECTS- {}, uses a key-value pair to store data.

// let student = {
//     name: "John Doe",
//     score: 90,
//     age: 25,
// };
// console.log (student)
// console.log (student.name); // John Doe ---dot notation
// console.log (student["name"]); // John Doe ---bracket notation


// // Object.keys(), Object.values(), Object.entries()
// console.log (Object.keys(student)); // ["name", "score", "age"]
// console.log (Object.values(student)); // ["John Doe", 90, 25]
// //Object.seals() - the values of the object cannot be changed, but the properties can be added or removed. It prevents new properties from being added to the object, but allows existing properties to be changed. 
// // console.log (Object.seal(student)); // {name: "John Doe", score: 90, age: 25}
// console.log (student.score = 100); // 100, this will change the value of the score property to 100. But if the object is sealed, the properties cannot be added or removed. The values can be changed.
// console.log (student.age = 30); // 30, this will change the value of the age property to 30. But if the object is sealed, the properties cannot be added or removed. The values can be changed.

// let scoreBoard = [1, 2, 3, 4, 5, {name: "John Doe", score: 90}];
// console.log (scoreBoard[5].name); // John Doe, this will display the name property of the object at index 5 in the array. The object is stored at index 5 in the array. The object can be accessed using the index of the array and the property name of the object.

//Create an array, put an object in it, and access the object "ife " in the array using the index of the array and the property name of the object.

let myArray =[1,2,3,4, {name: 'ife'}];
console.log (myArray[4].name); // 'ife'

let newScore = [3, 4, 5, 6, 7, {name: 'ife', score : 90, age: 25}];
// console.log (newScore[5].name); 
// console.log (newScore[5].score); // 90
console.log (newScore[5]['age']);
console.log (newScore[5]['score']);


let newName = null;
console.log (typeof newName);





