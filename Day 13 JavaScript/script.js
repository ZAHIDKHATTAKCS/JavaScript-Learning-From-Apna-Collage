// api calling
const URL = "https://cat-fact.herokuapp.com/facts";

// let promise =  fetch(URL);
// console.log(promise);

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response); // the result is in JSON format JSON stand for JavaScript Object Notation
    let data  = await response.json();
    console.log('here is the data in the api =',data[0].text);
    factPara.innerText = data[1].text;
}
btn.addEventListener('click',getFacts);