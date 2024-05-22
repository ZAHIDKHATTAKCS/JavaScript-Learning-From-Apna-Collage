console.log("Apna Collage");


console.log("I Love JS");


console.log("Zahid Khattak");

// variables

// int variable
age = 24;

// float variable
radius = 34.4;

// string variable
FullName = "Zahid Khattak";

// boolean variable
isFollow= true;

// Variables in JavaScript is case sensitive
FULLNAME = 'Shradha khapra';

Fullname = 'Zahid Khattak';


// Output
console.log(age);
console.log(radius);
console.log(FullName);
console.log(FULLNAME);
console.log(Fullname);
console.log(isFollow);


// only letters and digits and underscores are allowed like 

Address = 'peshawar';

console.log(Address);

_laptopName = 'prime minister laptop';

console.log(_laptopName);

Friend = 'null';
console.log(Friend);


// Variables name Keywords Let, var and const

var name = "computer";
let price = 100;
const totalprice = 200;

console.log(name);
console.log(price);
console.log(totalprice);

// block scope variables , this will give you an error, you can use it in another block 

// {
//     let age = 23;
//     console.log(age);

//     let age = 34;
//     console.log(age);
// }
// {
//     let age = 34;
//     console.log(age);
// }

// Object variable
const student = {
    FullName : 'Zahid Khattak',
    age : 24,
    address : 'peshawar'
}

console.log(student['address']);

// to update the value inside the object, here is code this will update the age value 
student['age']= 34;

console.log(student);

