![Apna Collage](https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/6efdd5e7f0d663cf231d0f2040be0a1e.png)


## Today Just Started Learning JavaScript from Apna Collage

# <p align='center'> Day 1 </p>

- JavaScript { JS is a dynamically typed ( mean don't need to tell which type of data we are going to store in a variable ) programming language. we use it to give instructions th the computer }

- Ctrl + k ( use to clear the console log in your browser )

- Install Visual Studio Code ( It is free & Popular code editor by Microsoft )

- `console.log ("Apna Collage");` Console.log is used to log ( Print ) a message to the console

- `.js` means that this file is the JavaScript file

- To connect the JavaScript with the browser we have to create `HTML` file to run the JavaScript code on browser 

- VS code provide us a Boilerplate for `HTML` like `!` when your just enter it this will create the basic code of `HTML` for you

- Now to connect the `javascript` file with `HTML` you have to write Script tag within the `HTML` file and add the path in the `src` attribute

## <p align='center'> Topic 1 : Variables in JavaScript</p>
- Variables are containers for data , that is used to store data
#### <p align='center'>Types of variables</p>
1. Int Variable ( 1 , 3 , 434 )
2. float Variable ( 1.23 , 34.3 )
3. String Variable ( 'food' , 'zahid')
4. Boolean Variable ( 'True', 'False' )
5. Null variable ( means nothing inside the variable ) `( name = 'null' )`
6. undefined variable ( means this is not defined ) `( name = 'undefined' )`

#### <p align='center'> Variables Name Rules in JavaScript</p>
- Variables names are case sensitive ( a & A is different )
- Only letters, digits and underscore ( _ ) are allowed. ( not even space )
- Only Letter, underscore ` _ ` or `$` should be 1st character.

- [Reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)  ( these words are used for special work like console is the reserved words use for printing something on screen ) cannot be variables names.

#### <p align='center'> Variables Names Keywords in JavaScript</p>
- We can create variables without keywords like `( var , let , const )` but this is not good practice you have to use variables keywords

- `Var` Variable can be re-declared & updated in JavaScript, A global scope variable ( means you can use it where you want in a program ), before 2015 people use var variable after in 2015 we got ES6 the advanced version of JavaScript after that we have `let` and `const`

- `Let` Variable cannot be re-declared but can be updated. A block scope variable ( means that you can only use it only in a block of code mean in a specific place )
- `Const` Variable cannot be re-declared or updated. A block scop variable, We can use Constant variables in special cases like for the value of `PI` <br> `Note` if we have `const` object we can change the object key only not the whole object

-  `Note` if you are declaring a variable with no value assigned to it for `let` and `var` variable it will return `undefined` but in the case of `const` it will give an error 

## <p align='center'> Topic 2: Data Types in JavaScript</p>
- Data type define the type of the data that a variable can store
#### <p align='center'> There are two Categories of Data Types in JavaScript</p>
- `Primitive data type` Primitive data types are fixed data types that are predefined there are 7 Primitive data types in JavaScript that are given below
<div align='center'>
1. Number <br>
2. String <br>
3. Boolean<br>
4. Undefined<br>
5. Null <br>
6. BigInt (Big integer) <br>
7. Symbol <br>
</div>

<br>

- `None Primitive data type` Objects are the None Primitive data types, Objects are contained arrays and functions. Objects is the collection of the values, objects are key value pairs <br> `Note` you can check the code of object in javascript file
---
# <p align='center'> Day 2 </p>

## <p align='center'> Topic 3: Operators & Conditional Statements in JavaScript</p>
- `Comments` ( Part of Code which is not executed ) , Single line comment and double line comment
-  `Operators` ( used to perform some operation on data )
#### <p align='center'> Operators</p>

 <p align='center'> Note : 4 + 3 = 7  here 4 and 3 are called operands and the + is operator and as a whole it can be called Expression
</p>

1. `Arithmetic Operators + , - , * , / ` These are called Arithmetic Operators

2. `Modulus %` This operator gives us the reminder of the division

3. `Exponentiation` This will use for the power of something like 2 power 2 which is = 4 for Exponentiation we have to use ** like 2**2 which means 2 power 2 that is = 4

4. `Unary Operator` there are two unary operator like increment operator ++ and decrement operator -- unary operator needs only one operand, we can use increment and decrement operators in two ways like <br>
a++ ( post increment ) and ++a ( pre increment )<br>
a-- ( post decrement ) and --a ( pre decrement )<br>
the difference in btw post and pre is the pre change the value first and start executing code while post execute code and change the value later on

5. `Assignment Operators` to assign values to the variables, ( = , += , -= , *= , %= , **= ) you can give space between the value and the name of the variable but you can't give space in btween Assignment Operators like + = which pass an error

6. `Comparison Operators` is used to compare the values of the variables ( == equal to , != not equal to , > , >= , < , <=) so if you compare the values of the two variables in which one variable store the integer and the other variable store the string but only one string like "2" wo if we compare it like a == b this will return true as per JavaScript change the string to integer first when there is only one digit inside a variable<br>
strict version of comparison operators like Equal to & type === and Not Equal to & type !== this means these will check it strictly now if the value and the type of the value same so it will return true and false

7. ` Logical Operators` is used to evaluate multiple functions and gives us the final result like if person1 is telling truth and person2 is telling lie so it will return the final result of this situation ( Logical AND && , Logical OR || , Logical NOT ! )
- Logical AND && : it will return true when both conditions are true
- Logical OR || : it will return true even if one condition is true
- Logical ! : it will return the opposite if the condition is false it will return true and if the condition is true it will return false and only one expression is needed for it like !a < b

8.  `Ternary Operators` is the simple way of use if else statements, it always working on 3 operands , 1st is condition 2nd and 3rd are the outputs , like a ? b : c here it means we have a condition a and b is the block of code which runs only when a is true if is not true so the code of block that is in c will be run

#### <p align='center'> Conditional Statements</p>
- `Conditional Statements` is used to implement condition in the code, ( if Statement , if-else statement , else if statement )


#### <p align='center'> MDN Docs </p>
- If you want to explore the JavaScript more and want to explore it documentation so search for MDN Docs in google

- Alert ("hello") one time message will be pop up in your screen

- Prompt ("hello"); this is also pop up message but the difference is you can also enter a message inside it

# <p align='center'> Day 3 </p>

## <p align='center'> Topic 4: Loops and Strings in JavaScript</p>

- `Loops` are used to execute a piece of code again and again
- `types of loops` ( For loop, infinite loop, while loop, do while loop, for of loop, for in loop)
- `For loop` Three statements make up a for loop: the initialization statement, a stop condition, and the updating statement, also known as the increment or decrement statement. If you used the let in initialization statement in the for loop and you try to print the result after the body of the loop, you will receive an error. The reason for this is that because let is defined in block scope, it can only be used inside the same function, if you use it outside of it, an error will occur. However, if you declare var an error won't occur.

- `infinite loop` A loop that never ends , although we should never use it in programming. This is because this will return true and will run and never stop this may cause website damaged where you used or may memory lose in your computer because it uses your memory

- `While loop` in while loop you have to initialize the value before loop. and the condition is checked in start.

- `do while loop` in do while loop a code run once must, and in do while loop we will give condition at the end

- `For-Of loop` this is the special loop, it is used to iterate or to loop on some special data types, like for of loop is helps us to use loop on strings and arrays, for example if we have to print the every single character of a string so we have option of `For-of` loop.

- `For-in loop` for the use of iteration on objects we have to use `For-in` loop. `For-in` loop is used to return keys in objects. Once if we have the keys of an object we can also take all the values using keys

- `Template Literals` is a way to embedded expressions in strings, also we can say this is a special type of string, the advantage of template literals is you can write variables and strings in one string by defining template literals string, a string is said to be a template literal in which variables and strings are enclosed in back tics `` keep in mind that we have to use the $ {Variable Name} whenever we want to call variable for example 

<p align='center'> let output = ` the cost of ${obj.item} is ${obj.price} rupees ` </p>

- `String Interpolation` is the process of inserting strings or values into an existing string for various purposes , or string interpolation is the template literal in which values are added, divided means a calculation inside the template literals is called string interpolation for example 

<p align='center'>let String = ` This is template literal ${1+2+3} `</p>

- `Escape Character \n & \t`  \n is used to add a next line in a string and \t is used to add a tab in a string
<p align='center'>console.log ( ' zahid \n khattak ' ) ;</p>
<p align='center'>console.log ( ' zahid \t khattak ' ) ;</p><br>

- `Note :` the Escape character length is count only one instead of two like \t these are two but counts is a one
<br>

#### <p align='center'> String Methods</p>
- `String Methods` are built-in functions to manipulate a string like make changes in a string.
- ` Note :` Strings are immutable in JavaScript, if you want to make changes in the string you have to create new string with a new change
- `str.toUpperCase ()` is a function in JavaScript that change the string to Uppercase , For Example : <br>
<p align="center">
let str = "zahid khattak" <br>
str = str.toUpperCase();
console.log(str);
</p>

- `str.toLowerCase()` is a function in JavaScript that change the string to Lower Case , same as example given for uppercase.

- `str.trim` is a function in JavaScript that removes the white spaces from the string at the end and also at the beginning, it not remove the white spaces in between the strings

- `str.slice(start,end)` is a function in JavaScript that return us the part of the string, `Note:` the ending value will be not return in a result , `Note:` if we didn't provide the last value it will start from the start value and print all the value til the end

- `str.concat()` is a function in JavaScript that concatenate two strings. you have to pass the string that you want to join in the function, `Note:` in JavaScript you can concatenate two strings by using + symbol but we have also the method str.concat() in JavaScript.

- `str.replace(searchvalue , newvalue)` is a function in JavaScript to search a value in string and replace it with the new value.

- `str.charAt(index)` function in JavaScript to find the character in a string by using index pass in function






<br>
<br>

## Special Functions in JavaScript
1. `typeof` this function will return the type of that variable which you pass inside it like `typeof(name);`

2. `Syntax` means the rules of that language you must have to follow, like in English we must terminate the sentence with a full stop . The JavaScript Language rules are you must add semicolon ; at the end of every line. 




<br><br><br>

## Lessons

#### `All Power is within you , You can do anything and everything.`
#### ` Till than keep learning and keep coding 💻`
