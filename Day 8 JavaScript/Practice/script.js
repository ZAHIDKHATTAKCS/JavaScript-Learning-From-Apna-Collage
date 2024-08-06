// Q1 Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again

// let modebtn = document.querySelector("#togglebtn");

// let currentmode = "light";

// let mode = ()=>{
//     if(currentmode === "light"){
//         currentmode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currentmode = "light";
//         document.querySelector("body").style.backgroundColor="white";

//     }
//     console.log(currentmode);
// }


// modebtn.addEventListener("click",mode);


// Q2 you have to create something that can apply changes on page

let Body = document.querySelector("body");

let btn = document.querySelector("#familybtn");

let currentfont = "Serif"

Body.style.fontFamily = currentfont;

const fnt = ()=>{
    if(currentfont == "Serif"){

        Body.style.fontFamily = "fantasy";
        console.log("Family font changed to Fantasy");
        currentfont = "fantasy";
    }else{
        Body.style.fontFamily = "sans-serif";
        console.log("Family font changed to Serif");
        currentfont= "Serif";
    }
    // console.log(currentfont);
}

Body.addEventListener("click",fnt)

console.log(currentfont);