//push
var arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);

//pop
arr.pop();
console.log(arr);

//shift
arr.shift();
console.log(arr);

//unshift
arr.unshift(9);
console.log(arr);

//slice
var newArr=arr.slice(2,4);
console.log(newArr);
console.log(arr);

//splice----removing
var nArr=arr.splice(1,3);
console.log(newArr);
console.log(arr);

//splice----adding
var newArray=arr.splice(2,0,8,7);
console.log(newArray);
console.log(arr);

//split
let str ="Welcome all" ;
var newArr=str.split( " ", 2);
console.log(newArr);
console.log(str);
