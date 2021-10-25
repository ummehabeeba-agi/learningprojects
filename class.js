class Employee{
    
    constructor(name, dept,salary){
        this.n=name;
        this.d=dept;
        this.sal=salary;
    }
    salaryHike1(){
        
        console.log(`Salary Hike is:${this.sal*20/100}`);
    }
    salaryHike2(){
        
        console.log(`Salary Hike is:${this.sal*10/100}`);
    }
}
    let emp1=new Employee("habeeba","CSE",25000);
    let emp2=new Employee("sindhu","ECE",30000);

console.log(emp1);
console.log( emp1.salaryHike1());
console.log(emp2);
console.log( emp1.salaryHike2());

//class inheritance
class Father{
    constructor(age,bike){
        this.age=age;
        this.bike=bike;
    }
    bike(){
        console.log(`The bike is: ${this.bike}`);
    }

    }
    class Son extends Father {
        
        }
    let sonOne=new Son(25,"Honda");
    console.log(sonOne.bike);

    //super

class Person{
    constructor(name,age){
        this.age=age;
        this.name=name;
    }
    greet(){
        console.log(`Hello: ${this.name} and my age is ${this.age}`);
    }

    }
    class Student extends Person {
        constructor(name,age){
            super(name,age)
        }
        }
    let studentOne=new Student("Habeeba",23);
    console.log(studentOne.greet());

    //getter and setter
    class Vehicle{
        constructor(name,price){
            this.name=name;
            this.price=price;

        }
        get vehicleName(){
            return this.name+" "+ this.price;
        }
        set vehicleName(x){
            this.name=x;
        }
    }
const Vehicle2=new Vehicle("Audi",5000000);
console.log(Vehicle2.name+" "+Vehicle2.price);

//override
class Student1{
    constructor(name){
        this.name=name;
        this.marks=70; 
  
}
marks(){
    console.log(`Marks: ${this.name}`);
}
}
class Subject extends Student1{
    constructor(name){
       super(name);
       this.marks=80;

}
marks(){
    console.log(`Hello  ${this.name}`);
}
}
let subjectOne=new Subject("Mahesh");
console.log(subjectOne.marks);

