// print all numbers from 0 to 100
// for(let i=0; i<=100; i++){
//     console.log('number = ',i);
// }


//Qs 1 print all even numbers 
// for (let num=0; num<=100; num++){
//     if(num%2==0){
//         console.log("Even number is =",num);
//     }
// }

// print all odd numbers 
// for(let odd=0; odd<=100; odd++){
//     if(odd%2 !== 0){
//         console.log("odd Number is =",odd);
//     }
// }

// Qs 2 Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let gameNum = 25;
// let userNum= prompt("Guess the game number");

// while(userNum != gameNum){
// userNum= prompt("you entered the wrong number, Guess again");

// }
// console.log("Congratulations, you entered the right number");


// Q3 prompt the user to enter their full name, generate a username for them based on their input. Start username with @, followed by their full name and ending with the fullname length. eg. username = "shradhakhapra", username should be "@shradhakhapra13", here 13 is the length of the username

let FullName = prompt("Enter your Full Name without Spaces");

let result = '@'+FullName+FullName.length;

console.log(result);