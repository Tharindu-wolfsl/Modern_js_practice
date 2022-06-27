

// var,let, const

// var is function scope 


var num=10;

function testVar(){

    var num1=40;
    console.log(num);
    console.log(num1);
    num=30;
    console.log(num);

    
}

if(num>5){

    var num2=50;

}
console.log(num2);

testVar();


// let is blockscope


let num=10;

if(num<11){
    let great="Hello";
    console.log(great);
    great="world"; //can't redecalre only replace value
    console.log(great);
    num=12;
    console.log(num);
}
console.log(num);

// const is blockscope


const num=10;

if(num<11){

    const great="Hello";
    console.log(great);
    // const great="world"; cannot redeclare pr replace value
    const num=11; //cannot replace only redeclare because of block scope
    console.log(num);
}

console.log(num);
//ES6 template literals

//Conctenenation

let name="Tharindu";
let age=26;

let desc="My name is tharindu priyashan "+name+" I am "+age+" years old!";

console.log(desc);

//template literals

let fName="Dinushi";
let lName="Rajapaksha";

let msg=`My first name is ${fName} and my last name is ${lName}. `;
console.log(msg);

function testLiterals(name){

    return `His name is ${name.toUpperCase()}.`;
}

console.log(testLiterals("Gimhana"));

// rest parametres

// argument object

function test1(salaries){

    console.log(arguments); //this show all the arguments pass to the functions

}

test1(1000,2000,3000,2344);


//rest parameter
function test2(...marks){ //in here using ... we can pass all the parameters of function as array

    console.log(marks);
}

test2(45,56,87,32);


// spread parameters


//spread paramters for arrays
let a=[1,2,3];
let b=[4,5,6];
let c=[...a,...b];

console.log(c);



let names=["Tharindu","Priyashan","Senevirathna"];

console.log(...names);

//spread parameteers for strings

let subject="Science";

console.log(...subject);


//spread paramters for object

let marks={

    science:78,
    maths:87
}
let result={

    name:"Tharindu",
    age:26,
    ...marks

}

console.log(marks);
console.log(result);


//use with function

const test=[1,2,3];

function sum(a,b,c){

    return a+b+c;
}
console.log(sum(...test));
// deafault parameters


//ex1
function getYear(currentYear,years=20){

    return currentYear+years;

}

console.log(getYear(2022,10));
console.log(getYear(2022));


//ex2
function getValue(num1,num2=3,num3=2){

    return (num1*num3)+num2;

}

console.log(getValue(10));
console.log(getValue(10,5));

//ex3

const getBirth=function(name,bday=new Date()){

        console.log( `${name} born in year ${bday.getFullYear()}`);

}

getBirth("Tharindu",new Date('1996-02-12'));
getBirth("Gimhana");

//for of loop


//for loop example

const test1=["Tharindu","Dinsuhi","Gimhana","Vimukthi","Sanduni"];


// for(let i=0; i<test1.length; i++){
    
    //     console.log(test1[i]);
    // }
    
//for of loop example

for(let x of test1){

    console.log(x);
    
}
const test2=["Colombo","Galle","kandy","Trinco","Jaffna"];

for(let y of test2.entries()){ //get each element as an entries with index

    console.log(y);
}

const name1="Tharindu";

for(let z of name1){

    console.log(z);
}
const sym1=Symbol('fname');
const sym2=Symbol('fname');//use string to identify diffrent symbol


console.log(typeof(sym1));



console.log(sym1===sym2);


console.log(sym1);
console.log(sym2.toString());
sets

similar to arrayas but it doesn't accept duplicate values

const set=new Set();

set.add("Tharindu");
set.add("Dinsuhi");
set.add(26);
set.add(true);
set.add("Dinsuhi");

console.log(set);

for(let i of set){

    console.log(i);
}

const set=new Set(["Tharindu","Dinsuhi","Gimahana","Dinsuhi",12]);
console.log(set);


console.log(set.size);

console.log(set.has("Tharindu"));


maps
collection of elements which can store as key value pair. Mpa object can hold both objects and primitive types as either key or
values

createing map object
let map=new Map();
console.log(map);

//insert values 

map.set("fname","tharindu");
map.set("lname","priyashan");
map.set("tp",766354069);

//get value
console.log(map.get("fname"));
console.log(map.get("lname"));
console.log(map.get("tp"));

//check value exist

console.log(map.has("email"));

//map size

console.log(map.size);

//iterate map

for(let i of map){

    console.log(`${i[0]} : ${i[1]}`);
}


array destructuring


let names=["Tharindu","Dinsuhi","Gimhana","Vimukthi"];

const [n1,n2,n3]=names;

console.log(n1);
console.log(n2);
console.log(n3);


let cities=()=>["Galle","Colombo","Kandy","Plonnaruwa"];

let [c1,c2]=cities();


console.log(c1);
console.log(c2);



object destructuring

object destructuring use to extract values of objects and assign to variables


normal way

let person={
    name:"Tharindu",
    age:26
}

const name=person.name;
const age=person.age;

console.log(`My name is ${name} and I am ${age} years old!`);



using object destructring

let student={

    name:"Tharindu Priyashan",
    degree:"BCS computer science",
    subjects:["DS","OS","OOP","NETWORKING"],
    age:26,
    gpa:{
        first:3.1,
        second:2.8,
        third:3.2
    }
}

const {name}=student;

console.log(`My name is ${name}`);


const {degree:d,age:a}=student; //use identifier

console.log(`My degree is ${d} and I am ${a} years old!`);


const {subjects:[a1,a2,a3]}=student; //use of array

console.log(a1);
console.log(a2);

const {subjects}=student;

for(let i of subjects){

    console.log(i);
}




const {gpa:{first,second}}=student;

console.log(`My first year gpa is ${first} and second year ${second}.`);

 









class person{

    constructor (name){

        this.name=name;
    }

    
    printArrow(){
        setTimeout(()=>console.log(this.name),100) // here this work for function scope
    }
    printFunc(){
        setTimeout(function(){

            console.log(this.name); //here this work for global scope

        },100)
    }

}

let test=new person("Tharindu");

test.printArrow();
test.printFunc();



// normal functon
function sum(a,b){

    return a+b;

}
//arrow function
//with two prameters
let suma=(a,b)=>a+b;


console.log(suma(1,2));

//with one paramters

function person(name){

    return `My name is ${name}`;
}

let persona=name=>`My name is ${name}`;

console.log(persona("Tharindu"));

//without parameters
function print(){

    console.log("print");

}

let printa=()=>console.log("print");

printa();

let button=document.getElementById('btn');

// button.addEventListener('click',function(){

//     console.log("Clicked");

// });

button.addEventListener('click',()=>console.log("Clicked"));



const sym1=Symbol('fname');
const sym2=Symbol('fname');//use string to identify diffrent symbol


console.log(typeof(sym1));



console.log(sym1===sym2);

console.log(sym1);
console.log(sym2.toString());

function Course(_subject){

    this.subject=_subject;
    this.getMarks=()=>{
        console.log(`${this.subject} : 80`);
        console.log(this);
    }
}

let cou=new Course("Maths");
console.log(cou);

cou.getMarks();

console.log(this);

function test(){

    console.log(this);
}

class Course{

    constructor (_subject){

        this.subject=_subject;

    }
    getMarks(){
        console.log(`${this.subject} : 80`);
        console.log(this);
    }
}

const cou=new Course("Science");
console.log(cou);

cou.getMarks();
//getters and setters

//normal process
//only can get values of object cannot change

// const person={
//     fname:"Tharindu",
//     lname:"Priyashan",
//     fullName(){

//         return `${this.fname} ${this.lname}`;
//     }
// }

// console.log(person.fullName());


//using getters and setters

// const person={
//     fname:"Dinushi",
//     lname:"Rajapaksha",
//     get fullName(){

//         return `${this.fname} ${this.lname}`;
//     },
//     set fullName(name){
//         const setname=name.split(' '); //split paramter value from space and store in array
//         this.fname=setname[0];
//         this.lname=setname[1];

//     }
// }

// console.log(person.fullName);
// person.fullName="Tharindu Priyashan";
// console.log(person.fullName);

//using class

class Person{

    constructor(width,height){

        this.width=width;
        this.height=height;
    }

    get area(){

        return this.width * this.height;
    }

    set area(values){

        const param=values.split(',');

        this.width=param[0];
        this.height=param[1];

    }

}


const person=new Person(10,5);

console.log(person.area);

person.area="4,3";

console.log(person.area);