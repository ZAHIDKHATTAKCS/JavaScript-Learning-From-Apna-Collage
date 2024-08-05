// Q1 Create a new button element. Give it a text "click me" , background color of red & text color of white , and insert the button as the first element inside the body tag


// first we have to create a button element
let button = document.createElement("button");

// now adding text
button.innerText="click me";

// now adding styles
button.style.backgroundColor="red";
button.style.color="white";

// now add to the body
let body = document.querySelector("body");

body.prepend(button);


// Q2 create a <p> tag in html, give it a class & some styling, now create a new class in css and try to append this class to the <p>
let content = document.querySelector("p");
console.log(content.getAttribute("class"));
content.setAttribute("class","para");
