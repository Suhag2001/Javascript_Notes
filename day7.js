//Function

// 1.Named function

// function Add(a , b){
// return  a+b;
// }

// console.log(Add(3,5));
// 2.Annonymous function
// function (parametrs){
//   //  code   
// }

// let a={
//     name: "Bootcodings",
//     fun : function(){
//         return this.name;
//     }
// }

//Use of anonymous function
// 1. In Object  , Array
// 2. As a parameter
// 2. Self Call 

// (    function(){
//         console.log("bootcodings");
//     }
// )();
// 3.Arrow function

// const fun=(parameters)=>{
//     //code
// }


// const add = (a, b)=>{
//     return a+b;
// }


//Difference between let , var, and const

// 1.hoisted 
//var  
// console.log(a);
// var a = "madan";
// console.log(b);
// let b = "madan";
// console.log(c);
// const c = "madan";
// 2.block scope 
// let and const 
//  {
//     const a= "madan";
//     console.log(a);
// }
// data();
// console.log(a);
// 3.Reusablity  
// var and let 

// const s = 22;
// s=23;
// console.log(s);

// let a = 223;
// a = 222;
// console.log(a);

const fun =(a,b)=>{
    return a+b;
}

console.log(fun(1,2));
console.log(fun(55,2));

fun =()=>{
    console.log("Bootcoding");
}

fun();