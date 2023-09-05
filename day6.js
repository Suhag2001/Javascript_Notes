//

let a = ["java","javascript"];
// let b = a.toString();

// console.log(typeof a);
// console.log(a);
// console.log(typeof b);
// console.log(b + "");


//iternating the array

// 1.for

// for(let i = 0 ; i< a.length; i++){
//      console.log(a[i]);
// }
// 2.for in 

// for (let i in a){
//     console.log(a[i]);
// }
// 3.for of

// for(let i of a){
//     console.log(i);
// }
// 4.forEach 
// a.forEach(function(index, value ){
//     console.log(value);
//      console.log(index);
// });
// 5.map

// let b = a.map(function(value,index, a){
//     return value;
// }
// );
// console.log(b);


//object

//we can add the multiple types of values in object

let obj = {
     "full name" : "Pallavi Sawalakhe",
    email:"pallavi@gmail.com",
    contact: 56589856565,
    task : ["task", "change", "task", "task", "task", "task"],
    Gmail: function(){
        return this.email;
    }
}

//how to access value of object

// .

// console.log(obj.email);
// console.log(obj.contact);
// console.log(obj.task[1]);
// console.log(obj.Gmail());
// console.log(obj.full name); // not accessible

// [propertyName]

// console.log(obj["full name"]);
// console.log(obj["contact"]);


//replace the value
// obj.email = "test@example";
// console.log(obj.email);
// console.log(obj.Gmail());

//
// obj.address ="nagpur";
// console.log(obj.address);

// console.log(obj);


// console.log(typeof obj);

// let name = new String("aman");
// let num  = new Number(56556565);
// console.log(name);
// console.log(typeof name);
// console.log(num);
// console.log(typeof num);