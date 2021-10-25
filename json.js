//comments
async function asyncFunc(){
    let response= await fetch("https://jsonplaceholder.typicode.com/comments");
    let data=await response.json();
    console.log(data);
}
asyncFunc();

//albums
async function albums(){
    let response1= await fetch("https://jsonplaceholder.typicode.com/albums");
    let result=await response1.json();
    console.log(result);
}
albums();


//todos
async function todos(){
    let res= await fetch("https://jsonplaceholder.typicode.com/todos");
    let res1=await res.json();
    console.log(res1);
}
todos();