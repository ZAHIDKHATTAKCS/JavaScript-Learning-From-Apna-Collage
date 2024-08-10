let userScore = 0;
let compScore = 0;


// accessing user score paragraph 
const userScorePar = document.querySelector("#user-score");


// accessing computer score paragraph 
const compScorePara = document.querySelector("#computer-score");


// access the message 
const Message = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{

    //  rock , paper, scissors , we first creates options first to chose one for computer and make a random number and use it by indexing to chose one option

    const options = ["rock","paper","scissors"];

    const randIdx = Math.floor(Math.random() * 3); // when we use to take the values in between any number we have to multiply one greater number to math.random number it's because of we will take it as index number so here computer have to chose 1 of 3 options, and keep in mind that math.random number creates numbers after decimal so we don't need this for this we have to use , math.floor () and this will be removed

    return options[randIdx]
}


const drawGame = ()=>{
    Message.innerText = "Game Was Draw. Play Again";
    Message.style.backgroundColor = "#081b31";

}


const showWinner = (userWin,userChoice,compChoise) =>{
    if(userWin){
        userScore++;
        userScorePar.innerText = userScore;
        Message.innerText = `You Win ! Your ${userChoice} beats ${compChoise}`;
        Message.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        Message.innerText = `You Lose ${compChoise} beats Your ${userChoice}`;
        Message.style.backgroundColor = "red";
    }
}

// for creating a random choice for computer
const playGame = (userChoice)=>{
    console.log("user Choice = ",userChoice)

    // now generate computer choice , you will notice that we are creating function for each and every little work this is called modular way of programming
    const compChoise = genCompChoice();
    console.log("computer Choice =",compChoise);

    if(userChoice === compChoise)
    {
        // draw game
    drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // here check computer choice , scissors, paper with computer
            userWin = compChoise === "paper" ? false : true;
        }else if (userChoice === "paper"){
            // rock , scissors with computer
            userWin = compChoise === "scissors" ? false : true;
        }else{
            // rock , paper with computer
            userWin = compChoise === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoise);
    }

}


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was Cliked",userChoice);
        playGame(userChoice);
    })
})


