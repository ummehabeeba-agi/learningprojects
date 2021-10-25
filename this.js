function User1(user_name, department,salary){
    (this.name=user_name),(this.dept=department),
    (this.sal=salary),
    (this.salaryHike=function(){
     return  console.log(this.sal*20/100+this.sal);
    });
}


var employee1={
  name:"Lavanya",
    dept:"Testing",
    sal:32000,
    salaryHike1:function(){
        console.log(this.name+" "+this.dept+" "+this.sal);
console.log(this.sal*10/100+this.sal);
    }
}
 var employee2={
    name:"Misriya",
    dept:"Development",
    sal:34000,
    hike2:function(){
        console.log(this.name+" "+this.dept+" "+this.sal);
        console.log(this.sal*10/100+this.sal);
    }
    
 }
 console.log(employee1.salaryHike1());
 console.log(employee2.hike2());
    
const user1=new User1("Sindhu","EDP",30000);
const user2=new User1("Sanket","Production",35000);
console.log(user1.name+" "+user1.dept+" "+user1.sal);
console.log(user2.name+" "+user2.dept+" "+user2.sal);
console.log(user1.salaryHike());
console.log(user2.salaryHike());
