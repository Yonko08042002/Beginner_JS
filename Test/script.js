// console.log("hello world")
// console.error("this is an error")
// console.warn("this is a warning")

// var, let and const

// const s= 'technology, computers, it, code'
// console.log(s.length)
// console.log(s.split(', '))

// console.log(s.split(', ')[0])


//Arrays - variables that hold multiple values

//const fruits =['apple', 'oranges', 'pears']

// fruits[3]='grapes';
// fruits.push('mangos')// đẩy 1 giá trị vào cuối mảng
// fruits.unshift('strawberries')//  thêm 1 giá trị ở đầu mảng

// fruits.pop();

//  console.log(Array.isArray(fruits));
// console.log(fruits.indexOf("oranges"))

// console.log(fruits)

//#object

// const person ={
//     firstName:'Ling',
//     lastName:'Thuy',
//     age:21,
//     hobbies:['music','movies','sport'],
//     address:{
//         stress:'06 Tran Phu',
//         city:'Da Nang',
//         state:'MA'
//     }
// }
// person.email="tin08042002@gmail.com"// them truc tiep thuoc tinh vao object
// console.log(person)
// console.log(person.firstName,person.lastName)
// console.log(person.hobbies[0])
// console.log(person.address.city)


// const {firstName,lastName,hobbies,address:{city,state}}=person  

// console.log(state)

//# Array object

// const todos =[
//     {
//         id:1,
//         text:"take out trash",
//         isCompleted: true
//     },
//     {
//         id:2,
//         text:"Meeting with boss",
//         isCompleted: true
//     },
//     {
//         id:3,
//         text:"Dentist appt",
//         isCompleted: false
//     }
// ];

// console.log(todos)
//console.log(todos[1].text)

// const todoJSON =JSON.stringify(todos)
// console.log(todoJSON)

//**For
// ex
// for(let i =0; i < 10; i++){
//     console.log('for loop number:'+i);
// }

// for(let i =0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo)
// }


//**while

// let i= 0;
// while(i<10){
//     console.log('for loop number:'+ i);
//     i++;
// }


//foEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.id)
// });

// const todoText = todos.map(function(todo){
//     return todo.text
// });

// console.log(todoText)

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true
// }).map(function(todo){
//     return todo.text
// });

// console.log(todoCompleted)


//** cau dieu kien

// const x=6;
// const y =11;

// if(x >5 && y >10){
//     console.log('x is more than 5 or y is more than 10');
// }

//** */ toán tử bậc 3

// const z =11;

// const color = z>10 ?'red':'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;    
// }

//** */ function

function addNum(num1=1,num2=2){
    return num1+num2;
}

console.log( addNum());


const adddNums =(num1,num2 )=> {
     return num1+ num2;
}

console.log(adddNums(5,5))

//Constructor function
// function Person(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob= new Date(dob);
//     // this.getBirthdayYear =()=>{
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = ()=>{
//     //     return `${this.firstName}``${this.lastName}`
//     // }
// }

// Person.prototype.getBirthdayYear =function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName=function(){
//     return `${this.firstName}${this.lastName}`
// }

//Class

class Person{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName= lastName;
        this.dob= new Date(dob);
    }
    getBirthdayYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName}${this.lastName}`
    }

}

// Instantiate object: khoi tao doi tuong

const person1= new Person('John', 'joe','4-3-1987');
const person2= new Person('Mary', 'Smite','3-6-1997');

// console.log(person2.dob.getFullYear());

console.log(person1.getBirthdayYear());
console.log(person1.getFullName());

console.log(person2.getFullName());

console.log(person1)
