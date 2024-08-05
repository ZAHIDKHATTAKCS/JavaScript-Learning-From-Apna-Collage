// getAttribute();
// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");

// console.log(id);

// let name = document.querySelector("div");
// let nameattribute = name.getAttribute("name");
// console.log(nameattribute);


// setAttribute () method to change the attribute to value to new value

// let name = document.querySelector("h1");
// let newvalue = name.setAttribute("class","fullname");

// console.log(newvalue);

// style method to change the style of the node or elements

let div = document.querySelector("div");

div.style.backgroundColor="green";
div.style.backgroundColor="purple";
div.style.fontSize="20px";
div.style.textAlign="center";

// createElement and add to the end of the node or element first we have to create it

let btn = document.createElement("button");

// now add some text
btn.innerText="click me!";

// now add some style
btn.style.padding="10px";
btn.style.fontSize="15px";
btn.style.backgroundColor="lightgreen";
btn.style.color= "red";

// .append() now insert at the end of the node
div.append(btn);
console.log(div);


// .prepend() to add an element at the start of the element or node 
let heading = document.createElement("h3");

heading.innerText="hi ! this is list";

div.prepend(heading);


// .before() to add an element just before the other element

let para = document.createElement("p");

para.style.color="red";
para.style.fontSize="20px";
para.innerText = "Hi this paragraph is added through .before method";

div.before(para);

// .after() method is used to add an element after the other element
let addedDiv  = document.createElement("div");
addedDiv.innerText="This is New Div add through .after method in JavaScript";
addedDiv.style.backgroundColor="pink";
addedDiv.style.border="2px solid red";
addedDiv.style.padding="10px";

div.after(addedDiv);


// .remove() method used to remove the element
let toDelete = document.getElementById("paragraph");

toDelete.remove();