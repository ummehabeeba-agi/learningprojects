//creating promise--resolved
let number=true;
let promise=new Promise(function(resolve,reject) {
    if(number){
        resolve("It is a number ");
    }
    else{
        reject("Not a number ");

    }
});

console.log( "Creating Promise using resolved" + promise);

//reject
let string=false;
let promise1=new Promise(function(resolve,reject) {
    if(string){
        resolve("It is a string ");
    }
    else{
        reject("Not a string ");

    }
});
console.log(promise1);

//then()
let x=true;
let promise2=new Promise(function(resolve,reject) {
    
        resolve("It's raining today" );
    });
    promise2.then(function rain(result1){
        console.log(result1);
    })
    .then(function noRain(result1){
        console.log(result1);
    })
    .then(function sunny(){
console.log("Call some other function");
    });
    console.log(promise2);

   //catch
   let y=false;
let promise3=new Promise(function(resolve,reject) {
    
        reject("Not resolved" );
    });
    promise3.then(function success(result){
        console.log(result);
    })
   .catch(function error(result){
       console.log(result)
   });
    console.log(promise3);

    //finally---resolved
    let completed=true;
    let promise4=new Promise(function(resolve,reject) {
        resolve("Promise  Resolved");
    });
    promise4.finally(function result() {
        console.log("Finally Executed  Using  resolved :Good Morning");
    });
    console.log(promise4);

    //finally---reject
    let a=false;
    let promise5=new Promise(function(resolve,reject) {
        reject("Promise Not Resolved");
    });
    promise5.finally(function result() {
        console.log("Finally Executed  Using Reject: No matter what");
    });
    console.log(promise5);