console.log("apna collage");

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

let student = {
    name : 'zahid',
    age: 30,
    cgpa: 3.5,
    isPass : true
}
for(let key in student){
    console.log('key =', key,' value = ',student[key]);
}