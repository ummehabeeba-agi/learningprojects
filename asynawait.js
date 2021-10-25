let a=true;
let promise=new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve("Promise Resolved");
    },3000);

});
async function asyncFunc(){
    let result=await promise;
    console.log(result);
    console.log("hello");
}

asyncFunc();

//
let x=false;
let promise1=new Promise(function(resolve,reject) {
    setTimeout(function(){
        reject("Promise  Not Resolved");
    },3000);

});
async function asyncFunction(){
    let res=await promise1;
    console.log(res);
    console.log("hello");
}

asyncFunction();

//API response
let method=fetch(url)
.then(function(){
    console.log("APIs");
    })
    .catch(function(){
    console.log("Not resolved");
    });