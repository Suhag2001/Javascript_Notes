
//function of Dom for getting the DOM element

// 1. getElementById

// var ele =  document.getElementById("para1");

// ele.style.color= "red";

//2. getElementsByClassName

// let list = document.getElementsByClassName("para");

// list[0].style.color="green";
// list[1].style.color="pink";

// for(let i of list){
//     i.style.color= "red";
// }

// getElementsByTagName

// let list = document.getElementsByTagName("p")

// list[1].style.color= "green";

//getElementsByName

// let list = document.getElementsByName("btn");

// list[0].style.backgroundColor= "red";

//querySelector

// let l = document.querySelector("#para1");

// l.style.color= "red";


//querySelectorAll

// list = document.querySelectorAll("p");

// list[2].style.color= "red";

// Changing HTML element

// 1.innnerHTML 

// document.getElementById("para1").innerHTML = "<b>text form Js</b>";
// var l = document.getElementById("para1");
// l.innerHTML= "text form Js";


// 2.textContent
// document.getElementById("para3").textContent = "<b>text form Js 3</b>";


//Events 


function  myFun(){
    let a = 2;
    let b = 3;
document.getElementById("para2").innerHTML = a++ ;

}
