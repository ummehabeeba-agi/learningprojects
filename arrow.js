//forEach
let  a=[1,2,3,4,5,6];
let output=a.forEach((item)=>{
    console.log(`${item*2}`);
});
//map
let  b=[1,2,3,4,5,6];
let result=b.map((item)=>{
    return ++item;
   
});
console.log(result);

//filter
let  c=[1,2,3,4,5,6];
let res=c.filter(item=>item%2===1)
console.log(res);

//filter without arrow
let  d=[1,2,3,4,5,6];
let res1=d.filter(function(item){
    return item%2==1;
});
console.log(res1);
//concat
let num1=[6,7,8];
let num2=[1,3,9];
let sum=num1.concat(num2);
console.log(sum);

//indexOf
let n1=[1,2,3,4,5,7];
console.log(n1.indexOf(3,2));
//lastIndexOf
let n2=[1,2,3,4,5,6];
console.log(n2.lastIndexOf(5));

//include
let n3=[1,2,3,4,5,6];
console.log(n3.includes(2));

//toString
let str=["Javascript","HTML","CSS"];
let out=str.toString();
console.log(out);

//isArray
let one=["Javascript", "HTML","CSS"];
let outp=Array.isArray(one);
console.log(outp);
