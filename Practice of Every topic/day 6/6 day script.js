// console.log('hello');
// alert('Apna College');

// console.dir(window);
// console.dir(document.head);
// console.log(document.head);
// console.log(document.body); // this will take the body from the html document, mean here we can access the HTML code form JavaScript

// console.log(document.body.childNodes[1]);

// access html code by using its ID
// let heading = document.getElementById("heading");

// console.dir(heading);

// access HTML elements by using it's class
// let byClass = document.getElementsByClassName("heading2");

// console.dir(byClass);

// console.log(byClass);

// access HTML elements by Tag name
// let paragraphs = document.getElementsByTagName("p");

// console.log(paragraphs);
// console.dir(paragraphs);


// access HTML elements by querySelector it will return the first paragraph from you multiple html paragraphs
// let firstparagraph = document.querySelector("p");

// console.log(firstparagraph);

// console.dir(firstparagraph);


// access all the same HTML elements by querySelectorAll it will return all the same Elements you demands
// let allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.dir(allParagraphs);

// Topic 2 DOM manipulation properties 
// tagName 
// let firstparagraph = document.getElementById("firstp").tagName;
// console.log(firstparagraph);

// let heading = document.getElementById("heading");
// console.log(heading.tagName);


// Topic 3 Nodes properties 

// firstChild property

// console.log(document.getElementById("div").firstChild); // this will return #text its because this will check the text node first as per we studied

// lastChild Property
// console.log(document.body.lastChild); // this will return the last child of the body



// children we can access all the children also in a tag or in a element
// console.log(document.querySelector("div").children); // this will return multiple children

// innerText

// let div = document.querySelector("#list");

// console.dir(div);

// console.dir(div.innerText);

// innerHTML
// console.log(document.getElementById("list").innerHTML);

// textContent this will show the inner content even if it is not shown on front page
console.log(document.getElementById("h5").textContent);