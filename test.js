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