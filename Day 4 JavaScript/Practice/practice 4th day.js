// Q1 For a given array with marks of students -> [85,97,44,37,76,60] find the average marks of the entire class.

// let marks =[85,97,44,37,76,60];
// let sum = 0;
// for(let value of marks){
//     sum = sum + value;
// }
// let average = sum / marks.length;
// console.log(`average marks of the Class = ${average}`);

// Q2 for a given array with prices of 5 items -> [50,645,300,900,50] all items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
// let items = [50,645,300,900,50];

// for(let i = 0; i<items.length; i++){
//     console.log(`Prices before offer = ${items[i]}`);
//     let offer = items[i] / 10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer = ${items[i]}`);
// }

/* 
    Q3 Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix",
    a. Remove the first company from the array
    b. Remove Uber & Add Ola in its place
    c. Add amazon at the end
*/

// a. Remove First company 
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies.splice(0,1));
console.log(`After removed first Company from the array ${companies}`);

// b. remove Uber & Add Ola in its place 
console.log(companies.splice(1,1,'Ola'));
console.log(`After remove Uber company and add Ola company to companies \t ${companies}`);

// c. add amazon at the end 
console.log(companies.splice(5,0,'Amazon'));
console.log(`After Adding amazon at the end of the companies \t ${companies}`);