function hello(){
    console.log('Hello');
}

setTimeout(hello,2000); // timeout : 2s = 2000ms



function getData(dataId){
    setTimeout(() => {
        console.log("data",dataId);
    }, 4000);
}


// async function || this will always create a promise , in order to check the promise in console.log you have to call the async function function in inspect area in console

async function hello(){
    console.log('Hello');
}

function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('data');
        }, 3000);
    });
}