//rest parameters
function num(...args){
    console.log(args);

}
num(5,9,0,7);

//spread operator
const a=[1,5,7];
const b=[11,13,17];
const c=[...a,...b];
console.log(c);

//destructuring
const user={
    userName:"John",
    emailId:"xyz@gmail.com"
};
console.log(user);
const{userName,emailId}=user;
console.log(`${userName} ${emailId}`);

//array
function getMarks(){
    return[90,80,68,89];
};
let marks= getMarks();
let p=marks[0];
q=marks[1];
r=marks[2];
s=marks[3];

console.log(`${p} ${q} ${r} ${s}`);

