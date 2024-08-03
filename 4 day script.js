// Topic 1 Arrays 

// numbers array
// let marks = [34,65,87,65];
// console.log(marks);

// console.log(marks.length);

// string array
// let heroes = ['ironman','thor','hulk','shaktiman','tiger shroff'];
// console.log(heroes);

// find the type of array
// console.log(typeof(heroes));

// access a value using index
// console.log(heroes[4]);

// change a value using index
// heroes[3]='Shradha khapra';
// console.log(heroes);

// Topic 2 Looping over an array

// for loop to accessing each element an array
// let heroes = ['ironman','thor','hulk','shaktiman','tiger shroff'];
// for(let idex = 0; idex < heroes.length; idex++){
//     console.log(heroes[idex]);
// }

// // for of loop to accessing each element an array
// for (let hero of heroes){
//     console.log(hero.toUpperCase());
// }

// let Cities = ['Peshawar','Lahore','Islamabad','Karachi','Qadri Banda'];

// for(let city of Cities){
//     console.log(city.toUpperCase());
// }

// Topic 3 Array methods

// push() insert an element at the end of the array
// let foodItems =  ['potato','apple','litchi','tomato'];

// console.log(foodItems);
// foodItems.push('chips','paneer');
// console.log(`Array after adding an element at the end using push method -> \t ${foodItems}`);

// Pop(); delete an element from the end of the array
// foodItems.pop();
// console.log(`Array after deleting an element at the end using pop method ->\t${foodItems}`);

// toString -> to convert an array to string

// let books = ['pashto','urdu','english','computer science'];

// console.log(books.toString());
// console.log(typeof(books));

// concat(); to join the array and return the result

// let languages = ['Pashto','urdu','English','Chines','Hindi'];
// console.log(languages);

// let ComputerLanguages = ['PHP','JavaScript','HTML','CSS'];
// console.log(ComputerLanguages);

// let result =languages.concat(ComputerLanguages);
// console.log(`after concat the full array is = \t ${result}`);
// console.log(result);


// unshift () method used for adding an element at the start of the array

// let computers = ['Dell','Hp','Acer'];
// console.log(computers);

// computers.unshift('apple');
// console.log('the array after unshift \t'+computers);

// shift() method used for adding an element at the end of an array
// computers.shift();

// console.log('the array after shift \t '+computers);


// slice () method to return a piece of an array 

// let heroes = ['shrada khapra','amandatarwal','zahid khattak'];
// console.log(heroes);
// console.log(heroes.slice(0,2));

// splice () method 
let arr = [34,56,78,899];
console.log(arr.splice(2, 1, 60, 70));

console.log(arr);
// now we have to add an element and don't want to delete an element from the array so 

console.log(arr.splice(0,0,10)); // here i passed 0 because i don't want to delete any element but want to add an element at index 0

console.log(arr);

// delete an element
console.log(arr.splice(1,1)); // it will delete an element at index 1
console.log(arr);