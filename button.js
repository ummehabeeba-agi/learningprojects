//one
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");

var home=document.querySelector(".home");
var changeColor1=function(){
   home.className="home1";
    
};


//two
var home=document.querySelector(".home");
var changeColor2=function(){
    home.className="home2";
    
    
};


//three
var home=document.querySelector(".home");
var changeColor3=function(){
    home.className="home3";
    
    
};
btn1.addEventListener("click",changeColor1);
btn2.addEventListener("click",changeColor2);
btn3.addEventListener("click",changeColor3);