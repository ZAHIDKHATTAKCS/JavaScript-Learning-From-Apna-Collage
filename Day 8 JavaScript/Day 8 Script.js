let btn = document.querySelector("#newbtn");

btn.onclick = ()=>{
    console.log("btn 1 is clicked");
    let a = 25;
    a++;
    console.log(a); // 26
}

let box1 = document.querySelector("#box1");

box1.onmouseover = () =>{
    console.log("hi you are just hover over the div \t this is called Events handling");
}

// event object it is special object that has details about the event
box1.onmouseover = (evt) =>{
    console.log(evt); 
    // to print the object information
    console.log(evt.type);
    console.log(evt.target);
}


// event listeners take two value is an argument
box1.addEventListener("click",()=>{
    console.log("box is clicked! handler 1");
});


box1.addEventListener("click",()=>{
    console.log("box is clicked! handler 2");
});

const handler3 = ()=>{
    console.log("box is clicked! handler 3");
};

box1.addEventListener("click",handler3);

box1.addEventListener("click",()=>{
    console.log("box is clicked! handler 4");
});

box1.removeEventListener("click",handler3);



const newfnt = () => {
    console.log('zahid khattak');
}

box1.addEventListener("dblclick",newfnt);