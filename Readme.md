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
- Only letters, digits and underscore ( \_ ) are allowed. ( not even space )
- Only Letter, underscore `_` or `$` should be 1st character.

- [Reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ( these words are used for special work like console is the reserved words use for printing something on screen ) cannot be variables names.

#### <p align='center'> Variables Names Keywords in JavaScript</p>

- We can create variables without keywords like `( var , let , const )` but this is not good practice you have to use variables keywords

- `Var` Variable can be re-declared & updated in JavaScript, A global scope variable ( means you can use it where you want in a program ), before 2015 people use var variable after in 2015 we got ES6 the advanced version of JavaScript after that we have `let` and `const`

- `Let` Variable cannot be re-declared but can be updated. A block scope variable ( means that you can only use it only in a block of code mean in a specific place )
- `Const` Variable cannot be re-declared or updated. A block scop variable, We can use Constant variables in special cases like for the value of `PI` <br> `Note` if we have `const` object we can change the object key only not the whole object

- `Note` if you are declaring a variable with no value assigned to it for `let` and `var` variable it will return `undefined` but in the case of `const` it will give an error

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
- `Operators` ( used to perform some operation on data )

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

5. `Assignment Operators` to assign values to the variables, ( = , += , -= , \*= , %= , \*\*= ) you can give space between the value and the name of the variable but you can't give space in btween Assignment Operators like + = which pass an error

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

- `Escape Character \n & \t` \n is used to add a next line in a string and \t is used to add a tab in a string
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

# <p align='center'> Day 4 </p>

## <p align='center'> Topic 5: Arrays in JavaScript</p>

- `Array` is the collections of items, or array is the type of variable which stores multiple but same type of data in consecutive memory location. array is a type of object whenever you want to print the typeof array it will return object instead of array it's because it is the type of object. for creating an array you have to provide the name of the array and put the values in between square brackets [ ] exmple <p align="center">let array = [ 1 , 2 , 3 ]</p>

- `.length and method` . length is a property , and a property only return us a value , while method performs calculations

- `Array Indices` through array index we can access the different values that are stored in array. for example

<p align="center">let array = [ 1 , 2 , 3 ] ;</p>
<p align="center">console.log ( array [ 0 ] ) ; // this will return 1</p>

- we can also changed the values of the array by using array index
<p align="center">array [ 2 ] = [ 5 ] ; // this will replace 5 in the place of 3 </p>

- as per we learn earlier the strings are not mutable and arrays are mutable mean that we can't change the strings value using index and other way but we can the array.

#### <p align='center'> Looping over an array</p>

- `Looping over an array` to print all the elements in the array we can use looping over an array. we can use for , while , and do while loop , for of loop and for in loop as well.

#### <p align='center'> Array Methods</p>

- `Push()` a method that is used for adding an element at the end of hte array

- `Pop()` a method used for deleting an element from the end of the array

- `toString()` a method that is used for to convert a array to string .

- `Concat()` it joins the multiple arrays & return the result, it is also a string method to join the multiple strings `Note` it not change the original array but it return the new array

- `unshift()` its work like push method but it add an element to the start of the array .

- `shift()` its work like pop method but it delete from the start of the array

- `slice ()` slice method as per we learn in strings it will return a piece of strings same as for it will return piece of array by giving specific indices.<br> eg slice ( StartIndex , EndIndex ), `Note` it will not change the original array

- `splice ()` slice method is used to add , remove , and replace something in the original array . it will take three arguments <br> eg splice (startIndex , Delcount, newElement) here delcount is to represent how many elements you wants to delete <br> splice( 2 , 1 , 10 ); it will start form index 2 and delete 1 item and adding 10 in the index 2 which we pass in the startIndex , <br> `Note` it will delete , update and add a new element in the index you provided as a startIndex, if you pass only one value it will delete all the number after that specific index you pass

# <p align='center'> Day 5 </p>

## <p align='center'> Topic 6: Functions in JavaScript</p>

- `Functions` is a block of code to perform a specific task, it can be called whenever needed.

- `Function Creation` function creation consists of function definition and function calling, in order to create your own function you have to define the function first and than you have to call the function also for example,<br>

<p align='center'>function myfunction ( ) {<br>
console.log ( ' zahid khattak ' ) ;
<br>}  // this is called function definition
<br> myfunction ( ) ; // this is called function calling
</p>

- `Parameters and Arguments` the Parameters are those values that are inside the function definition while the arguments are the value inside the function whenever it called for example
<p align="center">function msgfnt ( msg ) { // here msg is the parameter<br>
console.log ( msg ) ;<br>
}<br>
msgfnt ( " hello this is Zahid " ) ; // now this is arguments </p>

- `Local Variables` all those variable that are define inside the function and can be call inside the function are called local variables , these variables can't be call outside the variable it will pass an error when you call it outside of the function.

- `Global Variables` all those variables that are define outside of the function are called Global variables it can be called anywhere in code mean you can call and use it inside the function and outside of the function <br>
  `Note:` the function parameters are also called local variables. it can be used inside the function and it is block scope it will work inside a block we can say these are block scope variables also.

- `Arrow Functions` arrow functions is the simplest way to create functions. keep in mind that we have to store the arrow function in a variable to call it later on for example <br>
<p align="center">const functionname = ( param1 , param2 ) => {<br>
// block of code here <br>} // this is called arrow function </p>

- `Note:` arrow function is the part of modern JavaScript

- `forEach Loop in arrays` is a type of loop that we used for arrays and we can also used for strings

- `Higher order functions and methods` higher order functions in JavaScript are functions or methods that either take another function as a parameter inside them or they return the another function as their output



# <p align='center'> Day 6 </p>

## <p align='center'> Topic 7: DOM in JavaScript</p>

- `DOM` Document object Module, when a page is loaded, the browser creates a `Document Object Model DOM ` of the page. as per we can access our html code in JavaScript, our all html elements convert to an object when it is access in the JavaScript and this object called document and this document is available in window object. you can access this document by search window.document in window object , and this document is the representation of our HTML code. we used `DOM` for dynamic changes in our page . if you just linked the JavaScript in the head this will not access the document mean the HTML code it's because it will not access the body and its elements cause it will run first before the HTML body . so we have to link our JavaScript just before the body ending tag


- `Window object` the window object represents an open window in a browser. it is global object with lots of properties & methods. it is browser's object ( Not JavaScript's ) & automatically created by browser and all the JavaScripts built-in methods , functions and alerts are define there you can view it by going to console log in browser and write <br> ' window ' and hit enter to show

- `Console.dir()` this will return the properties of that variable are anything that you called inside it like console.dir(document); this will show all the properties that are used in the document.

#### <p align='center'> DOM Manipulation</p>

- `Selector` These are all the selectors through which we can access the HTML elements in JavaScript.

- `Selecting with Id` &nbsp;&nbsp; Access element by it's ID <br>
<p align='center'> document.getElementsById ( " myid " );</p>

- `Selecting with Class` &nbsp;&nbsp; Access element by it's Class <br>
<p align='center'> document.getElemntsByClassName ( " MyClass " );</p>


- `Selecting with Tag` &nbsp;&nbsp; Access element by its tag <br>
<p align='center'> document.getElemntsByTagName ( " p " );</p>

- `Query Selector` &nbsp;&nbsp; This is the better way to access the Elements, in Query Selector you can access the Elements by either their Id , their Class and their Tag Name, Note : it will access first element of the all same names like if you have multiple same class this will return only first class element  <br>
<p align='center'> document.querySelector ( " myid/myclas/tag " );</p>

- `Query Selector All` &nbsp;&nbsp; this is the way how you can access all the correspondence tags, class, and id elements  that you demands, `Note` in query selector all you have to write `dot ( . )` before class name and `Hash ( # )` before id name <br>
<p align='center'> document.querySelectorAll ( " myid/myclas/tag " );</p>
<p align='center'> document.querySelectorAll ( " .myclass " );</p>
<p align='center'> document.querySelectorAll ( " #myid " );</p>


#### <p align='center'>Properties</p>

- `tagName` this property returns tag for element nodes
<p align='center'>document.getElementById("#heading").tagName;</p>


- `innerText` this property returns the text content of the element and all its children we can also change the content of the element by innerText property
<p align='center'>document.getElementById("heading").innerText; // this will show the text only</p> 

<p align='center'>document.getElementById("heading").innerText="abcd"; // now this will change the innerText also</p> 

- `innerHTML` this property returns the HTML contents with HTML structure of the element

<p align='center'>document.getElementById("heading").innerHTML;</p>


- `textContent` this property returns textual content even for hidden elements, means that this will return the content even if it is hidden from frontend page.
<br>
<p align='center'>console.log ( document.getElementById ( " h5 " ) .textContent);</p>

#### <p align='center'>Node Properties</p>

- `Node` there are three types of nodes in DOM tree 
1. `Text Node`
2. `comments Node`
3. `Elements Node` <p align='center'>we are accessing and working on Elements nodes in JavaScript</p>

<br>

- `firstChild` firstChild property of the Node interface returns the node's first child in the DOM tree or null if the node has no children

- `lastChild` lastChild property of the node returns the last child of the node in DOM tree, or null if there is no child nodes.
<p align='center'>console.log ( document.body.lastChild );</p>


- `children` we can access all the children by using children property 
<p align='center'>console.log ( document.querySelector ('div') .children )</p>















<br>
<br>

## Special Functions in JavaScript

1. `typeof` this function will return the type of that variable which you pass inside it like `typeof(name);`

2. `Syntax` means the rules of that language you must have to follow, like in English we must terminate the sentence with a full stop . The JavaScript Language rules are you must add semicolon ; at the end of every line.

<br><br><br>

## Lessons

#### `All Power is within you , You can do anything and everything.`

#### ` Till than keep learning and keep coding 💻`
