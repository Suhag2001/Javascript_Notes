//Comments 
//There are two types of comments 
// 1.Single line comment 
// sinle line comment 
// 2.Multi line comment
/* multi 
line 
comments 
*/ 


// Operators
// 1.Arithmetic Operators 
// + 
// -
// /
// *
// %
// ++
// --

// 2. Comparison Operators
// ==
// ===
// != 
// >     
// >=
// <
// <=

// 3.Logical Operator 

// &&
// var a = 25 , b=20 , c=30 ;
// if(a>b && a>c){
//     console.log(" a is greater");
// }
// ||
// if(a>b ||a>c){
//     console.log(" a is greater");
// }
// !
// if( a != b){
//     console.log("a is not equal to b");
// }

// 4.Assignment operator

// =
// var a =10 ;
// console.log(a);
// +=  , a = a+10 
// a += 10;
// console.log(a);

// -=
// a -= 5;
// console.log(a);
// /=
// a /= 2 ;
// console.log(a);
// *=
// a *= 2 ;
// console.log(a);
// %=
// a %= 2 ;
// console.log(a);

//Conditional statement 
// 1. if 
// if(condition){
//     // code 
// }
// var a = 10 , b= 20 ;
// if(a < b){
//     console.log( a+ " is small");
// }
// 2 . if else 
// var a = 10 , b= 20 ;
// if(a > b){
//     console.log( a+ " is small");
// }else{
//     console.log( b + "is greater");
// }
// 3 . Nested if ( if else if )
// var a = 10 , b= 40 , c=30;
// if(a > b && a > c){
//     console.log( a+ " is greater");
// }else if(b> a && b> c){
//     console.log( b + "is greater");
// }else {
//     console.log(c + "is greater");
// }

// var op = "*";
// var a = 10 , b= 20 ;

// if (op=="+"){
//     console.log( "add =" + (a+b));
// }else if (op=="-"){
//     console.log( "sub =" + (a-b));
// }else if (op=="/"){
//     console.log( "div =" + (a/b));
// }else if (op=="*"){
//     console.log( "mul =" + (a*b));
// }else{
//     console.log("invalid operation");
// }
// 4. switch case


// var op = "?";
// var a = 40 , b= 20 ;
// switch(op){
//     case "+":{
//         console.log( "add =" + (a+b));
//         break ;
//     }
//     case "-":{
//         console.log( "sub =" + (a-b));
//         break ;
//     }
//     case "*":{
//         console.log( "sub =" + (a*b));
//         break ;
//     }
//     case "/":{
//         console.log( "div =" + (a/b));
//         break ;
//     }
//     default:{
//         console.log("invalid operation");
//     }
// }

// Loop
// 1. for 
// for( intialization ; condition ; increament / decreament ){
//     //code ;
// }

// for(var a = 10 ; a>=1 ; a--){
//     console.log(a);
// }

// for(var a = 1 ; a<=3 ; a++){
//    console.log("outer"+a);
//    for(var b = 1 ; b<=3 ; b++){
//     console.log("inner" +b);
//    }
// }

// 1234
// 1234
// 1234

// for(var i = 1 ; i<=3; i++){
//     var a = "";
//     for(var j = 1 ; j<=4 ;j++){
//       a += j;
//     }
//     console.log(a);
// }

// for(var i = 1 ; i<=10 ;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

// 2. while 
// var i = 1 ;
// while(i<=10){
//     i++; 
//     console.log(i);
// }

// 3. do while
// var a =111 ;
// do{
// console.log(a);
// a++;
// }while(a<=10)
