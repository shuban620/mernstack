// The Assignment Answers
//and their topics:  {"1 syntax"}
// 1.	Write a JavaScript program to print "Hello, World!" to the console.
// console.log("Hello World");

// 2.   Write a JavaScript program that accepts two numbers as input and displays their sum.
// let a = 12;
// let b = 56;
// let sum = a + b;
// document.write(sum);

// 3.	Write a JavaScript program that prompts the user to enter their name and displays a personalized greeting.
// let yourname = prompt('Enter your name :');
// document.write("Assalam u alaikum"," ",yourname);

// {"2 Operators"}
// 1.	Write a JavaScript program that accepts two numbers as input and displays their product.
// let num1 = parseInt(prompt('Enter the first number :'));
// let num2 = parseInt(prompt('Enter the second number :'));
// let product = num1*num2;
// document.write("The product of",' ',num1,' ',"and",' ',num2,' ',"is",' ',product,".");

// 2.	Write a JavaScript program that prompts the user to enter their age and checks whether they are old enough to vote (i.e., at least 18 years old).
// let age = parseInt(prompt('Enter your age :'));
// if(age>=18){
//     document.write("You are eligible for Vote casting.");
// }
// else{
//     document.write("Your age is not enough for Vote casting.");
// }

// 3.	Write a JavaScript program that accepts three numbers as input and displays the largest of the three.
// let num1 = parseInt(prompt('Enter the first number :'));
// let num2 = parseInt(prompt('Enter the second number :'));
// let num3 = parseInt(prompt('Enter the third number :'));
// let largest = Math.max(num1,num2,num3);
// document.write("The largest number is ",largest,".");

// 4.	Write a JavaScript program that calculates the area of a circle with a radius of 5 units.
// let radius = parseInt(prompt('Enter the radius :'));
// let circumference,diameter,areaofcircle;
// circumference=2*3.14*radius;
// diameter=2*radius;
// areaofcircle=3.14*radius*radius;
// document.write("The Circumference of your radius is ",circumference,".",'<br>');
// document.write("The Diameter of your radius is ",diameter,".",'<br>');
// document.write("The area of a circle of your radius is ",areaofcircle,".");

// {"3 Variables"}
// 1.	Write a JavaScript program that declares a variable called "myName" and assigns it the value of your name. Display the value of the variable to the console.
// let myName = "Shuban";
// press uncomment the button from html file then the result will be shown.

// 2.	Write a JavaScript program that declares two variables called "a" and "b" and assigns them values of 5 and 7, respectively. Display their sum to the console.
// let a = 5,b = 7;
// let sum = a + b;
// console.log(sum);

// 3.	Write a JavaScript program that prompts the user to enter their age and stores the value in a variable called "userAge". Display the value of the variable to the console.
// let userage = parseInt(prompt('Enter your age :'));
// console.log(userage);

// 4.	Write a JavaScript program that declares a constant called "PI" and assigns it the value of 3.14. Display the value of the constant to the console.
// const PI = 3.14;
// console.log(PI);

// 5.	Write a JavaScript program that declares a variable called "myFavColor" and assigns it the value of your favorite color. Display the value of the variable to the console.
// let myFavColor = "Green";
// console.log(myFavColor);

// {"4 Scope"}
// 1.	Write a JavaScript program that declares a variable called "myNum" inside a function and assigns it the value of 10. Display the value of the variable to the console outside the function. What happens?
// function task(){
//     let myNum = 10;
// }
// task()
// console.log(myNum);
// Result: Uncaught ReferenceError: myNum is not defined
//     at start.js:77:13

// 2.	Write a JavaScript program that declares a variable called "globalVar" outside a function and assigns it the value of 5. Declare a variable inside the function with the same name and assign it a different value. Display the value of the variable outside the function. What happens?
// let globalVar = 5;
// function task(){
//     let globalVar = 7;
// }
// task()
// document.write(globalVar);

// 3.	Write a JavaScript program that declares a constant called "myPI" inside a function and assigns it the value of 3.14. Display the value of the constant outside the function. What happens?
// function task(){
// const myPI = 3.14;
// }
// task()
// document.write(myPI);
// Uncaught ReferenceError: myPI is not defined
//     at start.js:94:16

// 4.	Write a JavaScript program that declares a variable called "myName" outside a function and assigns it the value of your name. Declare a variable inside the function with the same name and assign it a different value. Display the value of the variable outside the function. What happens?
// let myName = "Shuban";
// function task(){
//     let myName = "Ali";
// }
// task()
// document.write(myName);

// 5.	Write a JavaScript program that declares a variable called "x" outside a function and assigns it the value of 10. Declare a variable inside the function with the same name and assign it a different value. Display the value of both variables inside and outside the function. What happens?
// let x = 10;
// function task(){
// let x = 12;
// document.write(x);
// }
// task()
// document.write(x);
// first it display the inner part and with that it display the outer part.

// {"5 Data Types"}
// 1.	Write a JavaScript program that declares a variable called "myString" and assigns it the value of a string of your choice. Display the value of the variable to the console.
// let myString = "Shuban186"
// console.log(myString);

// 2.	Write a JavaScript program that declares a variable called "myNum" and assigns it the value of a number of your choice. Display the value of the variable to the console.
// let myNum = 15;
// console.log(myNum);

// 3.	Write a JavaScript program that declares a variable called "myBool" and assigns it the value of a boolean (true or false) of your choice. Display the value of the variable to the console.
// let myBool = true;
// console.log(myBool);

// 4. Write a JavaScript program that declares an array called "myArray" and assigns it the values of three different strings. Display the values of the array to the console.
// let myArray = ["shuban","pakistan","gujrat"];
// console.log(myArray);

// 5.	Write a JavaScript program that declares an object called "myObject" with three properties (name, age, and email) and assigns them values of your choice. Display the values of the object to the console.
// let myObject = {name:"Shuban",age:20,Email:"ashuban620@gmail.com"};
// console.log(myObject);

// let a, b;
// a = 10;
// b = 10;
// if (a == b) {
//     document.write("my first js program is done");
// }
// else {
//     document.write("try again");
// }



// [{("ALL THE TASKS OF THE ASSIGNMENT ARE COMPLETED!!!!!!")}]



// var a = 12;
// var b = 56;
// function add() {
//     var sum = a + b;
//     document.getElementById("sum").innerHTML = sum;
// }
// add()

// function subtract() {
//     var sum = a - b;
//     document.getElementById("subtract").innerHTML = sum;
// }
// subtract()

// function multiply() {
//     var sum = a * b;
//     document.getElementById("multiply").innerHTML = sum;
// }
// multiply()

// function divide() {
//     var sum = a / b;
//     document.getElementById("divide").innerHTML = sum;
// divide()

var counter;
var a = parseInt(prompt('enter a number :'));
var maxmulti = parseInt(prompt('enter the limit :'));
for(counter=0;counter<=maxmulti;counter++)
{
    document.write(a,"x",counter,"=",counter*a,'<br>');
}


// var marks = ["210/250", "230/250", "215/250", "230/250", "235/250", "234/250", "225/250", "245/250", "150/250", "248/250"];
// document.write(marks[prompt("enter the roll number: ")]);

// {const country = ["pakistan", "india", "iran", "iraq", "australia"];
// const addcountry = country.push("saudi arabia", "sweden");
// const newlength = country.length;
// const nameofstrings = country.toString();
// document.write("The total length of the array elements are:"," ",newlength,".","<br>","The fifth country name is: ",country[4],".","<br>",nameofstrings,".");

// }