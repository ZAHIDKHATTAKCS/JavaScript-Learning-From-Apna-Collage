// console.log("apna collage");

/*
    for (let i = 0; i <=5; i++)
    here let i is the initialization statement 
    i <= 5 is the stopping condition where loop will stop
    i++ is the updation statement 
    here keep in mind we have to initialize once
*/

// print 1 to 5 loop
// for(let count=1; count<=5; count++){
//     console.log("Apna College");
// }

// Calculate sum of 1 to 5 
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum = sum + i; 
// }
// console.log("Sum =",sum);

// console.log("Loop has been Ended");


// for(let i= 1; i<=5; i++){
//     console.log("i = ", i);
// }
// console.log(i);

// While loop
// let i = 1;
// while(i<=5){
//     console.log("zahid khattak");
//     i++;
// }
// console.log("loop ends here");

// do while loop
// let i =1;
// do{
//     console.log('computer science');
//     i++;
// }while(i <=10);

// for-of loop
// let str = 'zahid';
// for(let i of str){
//     console.log(i);
// }

// let student = {
//     name : 'zahid',
//     age: 30,
//     cgpa: 3.5,
//     isPass : true
// }
// for(let key in student){
//     console.log('key =', key,' value = ',student[key]);
// }


// Template Literals
// let Sentence = `This is a template literal`;

// console.log(Sentence);

// console.log(typeof(Sentence));

// let obj ={
//     item : 'pen',
//     price : 30
// }

// console.log("the cost of ", obj.item,"is", obj.price, "rupees" );

// here is how we used template literals
// let output = `this is template literals -> the cost of ${obj.item} is ${obj.price} rupees`;

// console.log(output);

// let string = `this is called string interpolation ${1+2+5}`;
// console.log(string);

// Escape Character
// console.log('here is the escape string next line -> zahid\nkhattak');
// console.log('here is the escape string tab -> zahid\tkhattak');

// Strings Methods or functions

// str.toUpperCase()
// let str = "Zahid Khattak";
// str = str.toUpperCase();

// console.log(str);

// str.toLowerCase()
// let str2 = "ZAHIDKHATTAK";
// str2 = str.toLowerCase();
// console.log(str2);

// str.trim
// let str = "     zahid khattak    ";
// console.log(str);
// console.log(str.trim(str));

// str.slice(start,end) , the end value will be not print not include

// let str = "01234566";
// console.log(str.slice(2,5));

// Topic str.concat()

// let str1 = 'zahid';
// let str2 = 'khattak';
// let result = str1.concat(str2)
// console.log(result);

// Topic str.replace(Search Value , New Value);
// let color= "hello";
// console.log(color.replace('h','y'));
// console.log(color.replace('lo','p'));

// Topic str.charAt(index)

let str = "i love javascript";
console.log(str.charAt(3));