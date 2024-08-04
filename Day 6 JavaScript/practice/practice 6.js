//  Q1 Create H2 heading element with text - "Hello JavaScript".Append "from Apna College students" to this text using JS

let heading2 = document.querySelector("h2");

heading2.innerText = heading2.innerText + ' from Apna Collage';

console.log(heading2);


// Q2 Create 3 divs with common class name - "box". access them and add some unique text to each one of them
let divs = document.querySelectorAll(".box");
// console.dir(divs);

// console.log(divs[0].innerText = 'new value 1');
// console.log(divs[1].innerText = 'new value 2');
// console.log(divs[2].innerText='new value 3');


// Q2 in for loop
let idx = 1;
for(div of divs){
    div.innerText=`new value ${idx}`;
    idx++;
}
