// Q 1. Get user to input a number using prompt("Enter a Number:"). check if the number is a multiple of 5 or not

// let number = prompt("Enter a Number :");

// if (number%5 === 0){
//     console.log('Your number',number,'is the multiple of 5');
// }else{
//     console.log('Your number',number,'is not the multiple of 5');
// }


// Q 2. Write a code which can give grads to students according their scores 
/*
    90-100 , A
    70-89 , B
    60-69 , C
    50-59 , D
    0-49  < F
*/
let Marks = prompt("Enter your Marks 0-100 :");
console.log("Your Marks is =",Marks);

if(Marks >= 90 && Marks <= 100){
    console.log("Grade A");
}else if(Marks >= 70 && Marks <= 89){
    console.log("Grade B");
}else if(Marks >= 60 && Marks <= 69){
    console.log("Grade C");
}else if(Marks >= 50 && Marks <= 59){
    console.log("Grade D");
}else if(Marks >= 0 && Marks <= 49){
    console.log("Grade F");
}else{
    alert("Please Enter correct score from 0-100");
}