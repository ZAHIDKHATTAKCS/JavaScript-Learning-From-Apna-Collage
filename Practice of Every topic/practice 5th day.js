// // Q1 Create a function using the "function" keyword that takes a string as an argument & return the number of vowels in the string
// function returnVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// returnVowels("abc");
// returnVowels("zahidkhattak");

// Q2 Create an arrow function to perform same task
// const Vowels=(str)=>{
//     let count=0;
//     for (let char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         }
        
//     }
//     console.log(count);
// }
// Vowels("apna collage");
// Vowels("shrada khapra");
// Vowels("Muhammad Zahid");


// Q3 For a given array of numbers, print the square of the eah value sing for each loop

let arr = [1,2,3,4,5];

arr.forEach((num)=>{
    console.log(num*num);
})