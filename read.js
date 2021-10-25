let a=true;
let promise=new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve("Promise Resolved");
    },3000);

});
fetch("/read.txt")
.then((response)=>response.text())
.then((data)=>console.log(data));
async function asyncFunc(){
    let result=await promise;
    console.log(result);
   
}

asyncFunc();