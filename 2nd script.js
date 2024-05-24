// Comments in code
/* comments are two types single line comment 
    double line comment

    comments are used to know what the coding is going to do so,
    we have to use english as per it is international may be you encountered with someone is from uk , us and they only know english , so english is preferred
*/

// console.log("hello world");

// Arithmetic Operators 
// let a = 5;
// let b = 2;
// let c = a+b;

// console.log("a =",a,"& b =",b);
// console.log("a + b =", c);

// console.log("a - b =", a-b);
// console.log("a * b =", a*b);
// console.log("a / b =", a/b);
// console.log("a % b =", a%b);
// console.log("a ** b =", a**b); 

// Unary operator
// let a = 5;
// let b = 2;
// console.log("a =",a,"& b =",b);
// a = a+1; 
// console.log("a = ",a);
// now apply increment operator

// a++;
// console.log('Applying increment operator');
// console.log('a = ',a);

// applying decrement operator

// a--;
// console.log('using decrement operator');
// console.log('a is = ',a);

// console.log('++a =', ++a);
// console.log('--a =', --a);

// console.log('a++ =',a++);
// // print after post increment
// console.log('The value of a after post increment =',a);


// Assignment Operators

// let a = 5;

// let b = 2;

// a += 4; // this means add =4 to a which will be 9
// console.log(a);

// a -= 4 ; // this means to - the 4 from a 
// console.log(a); 

// a *= 5; // this means to * a by 5
// console.log(a);

// Comparison Operators
// let a = 5;
// let b = 2;

// console.log('a =',a , 'b',b);
// console.log('As a == b ',a == b);

// console.log('As a != b ',a != b);

// Strict Comparison Operators

// let a = 4;
// let b = '4';

// console.log('a =',a , 'b',b);

// console.log('As a === b ',a === b); // it will return false it because of strict comparison means that it will check for the value as well as for the type so the type of b is string in this case so it will return false


// Greater than operator

// let a = 5;
// let b = 3;

// console.log('a =',a ,',', 'b =',b);
// console.log('a > b',a>b);
// console.log('a < b',a<b);


// Logical Operators
// let a = 1;
// let b = 2;

// let condition1 = a < b; // true
// let condition2 = a > b; // false

// console.log('condition1 && condition2 =',condition1&&condition2);
// console.log('condition1 || condition2 =',condition1 || condition2);
// console.log('! condition1 =',! condition1);

// console.log( !(a === b)); // you have to give the expression in small brackets

// Conditional Statements 
// let age = 15;

// if(age >= 18){
//     console.log('Your age is greater than 18 , Now you are eligible to vote');
// }

// if(age<18){
//     console.log('Your age is less than 18, Now you are not eligible to vote');
// }

// if else conditional statements
// let mode = 'dark';
// let color;

// if(mode === 'dark'){
//     color = 'black';
// }else{
//     color = 'white';
// }
// console.log(color);

// let age = 12;

// if (age < 18) {
//     console.log('Your age is less than 18 , Now you are not eligible to drive');
// }else{
//     console.log('Your age is greater than 18, Now you are eligible to drive');
// }

// now check to odd and even numbers

// let number = 6;

// if(number%2===0){
//     console.log(number,'is even');
// }else{
//     console.log(number,'is odd');
// }

//  Now else if statement

// let mode = "yellow";
// let color;
// if(mode === "dark"){
//     color = "black";
// }else if(mode === "blue"){
//     color = "blue";
// }else if(mode === "pink"){
//     color = "pink";
// }else{
//     color = "white";
// }
// console.log(color);

//  now Ternary Operator
let age = 12;

let result = age < 18 ? "Teenager" : "Young" ; 

age < 18 ? console.log("Teenager"): console.log("Young");
console.log(result);