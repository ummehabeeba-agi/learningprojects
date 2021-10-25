//add element
var btn=document.getElementById("btn1");
var creatingElement = function (){
    var newElement=document.createElement("div");
    document.body.appendChild(newElement);
   newElement.textContent="newElement"

};
btn.addEventListener("click",creatingElement);


//textContent
var btn3=document.getElementById("btn3");
var addHere=function(){
    var newElement=document.createElement("div");
    newElement.textContent="Hello";
    var head=document.querySelector(".addHere");
    head.appendChild(newElement);

};
btn.addEventListener("click",addHere);

//replaceChild
var btn4=document.getElementById("btn4");
console.log(btn);
var add2=function(){
    var newElement=document.createElement("div");
    newElement.textContent="Hello";
    var main=document.querySelector(".add1");
    var replaceMe=document.querySelector(".sec1");
    main.replaceChild(newElement,replaceMe);

};
btn4.addEventListener("click",add2);

//removeChild
var btn5=document.getElementById("btn5");
console.log(btn);
var removeMe=function(){
    var x=document.querySelector(".sec2");
    var remove=document.querySelector(".add2");
    remove.removeChild(remove);

};
btn5.addEventListener("click",removeMe);