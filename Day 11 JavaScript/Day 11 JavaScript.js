// // topic 1 learn about Prototypes


// const student = {
//     fullname : "zahid khattak",
//     marks : 94.4,
//     printMarks: function(){
//         console.log("marks = ", this.marks); // this is a keyword that is used for return the marks of this object mean in our case student like we can say student.marks
//     },
// }


// // to create a prototype

// const employee = {
//     calTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
//     // so if some of our employees have different tax rate than normal employees so we have to create another function what if we create the same name function that we already create in prototype so it will override the prototype function
//     calTax(){
//         console.log("tax rate is 20%");
//     }
// };

// karanArjun.__proto__=employee;

// // so if we have multiple employees in company in future and we have to calculate text for all these so we have to call our prototype simply like

// const zahid = {
//     salary : 80000,
// };

// const khan = {
//     salary : 70000,
// };

// zahid.__proto__ = employee;
// khan.__proto__ = employee;


// Topic : 2 Classes 

// like here in our case an apple phone should have start and end mean powerOn powerOff
// class applePhone {
//     constructor(){
//         console.log("creating new object");
//     }
//     powerON(){
//         console.log("Power On");
//     }     powerOff(){
//         console.log("Power Off");
//     }
// } // so this is the template


// // so now we have to create object from our class
// let iphone12 = new applePhone();

// let iphone6 = new applePhone();


// Topic 3 Inheritance
// class parent{
//     hello(){
//         console.log("hello hi");
//     }
// }

// class Child extends parent{
// }

// let obj = new Child();


// class person {
//     eat(){
//         console.log("eat");
//     }sleep(){
//         console.log("sleep");
//     }
// }

// class Enginner extends person{ 
//     work(){
//         console.log("solve problems and build something");
//     }
// }

// let zahidObj = new Enginner;



// Topic : 4 Error Handling

try{
    let a = 5;
    let b = 5;
    console(`a is = ${a} and b is = ${c}`);
}catch(err){
    console.log(err);
}