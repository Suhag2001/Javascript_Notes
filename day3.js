//string


// let n = "\"Bootcoding\"";

// let b = 'I\\m student'

// console.log(n.length);
// console.log(n);
// console.log(b);

// 1.Escape characters

// \' 
// \"
// \\

// String methods
// let n = "I am student , I am developer";
// 1.Extracting String
// slice (start,end)
// console.log(n.slice(-5,-1));
// console.log(n.slice(2,4));
// console.log(n.slice(0,1));


// substring(start,end)
// console.log(n.substring(0,4));
// console.log(n.substring(-4,-1));  //not supported


// substr(start, length)

// console.log(n.substr(5,7));

// 2.replacing substring 
// let n = "I am student , I am developer";
// replace()
<<<<<<< HEAD
// let b = n.replace(/Am/ig,"was");  //i - insensitiven , g-global
=======
// let b = n.replace(/Am/ig,"was");  //i - insensitive , g-global  regex
>>>>>>> 1ceb8e8ff3edc09a19305f2e12977b621605eff5

// console.log(b);
// console.log(n);

// replaceAll()

// let d = n.replaceAll("Am","was");
// console.log(d);

// 3.converting upper and lower case

// let n = "I am Student , I am Developer";

// toUpperCase();
// console.log(n.toUpperCase());
// toLowerCase();
// console.log(n.toLowerCase());

// 4.string concatination
// +

// let a = "I am ";
// let b = "Developer";

// console.log(a+" "+b);

// concat()

// console.log(a.concat( b));

// 5.Extracting string character
// let a= "I am Developer";
// charAt()
// console.log(a.charAt(5));

// charCodeAt()

// console.log(a.charCodeAt(5));
// let a="9";
// console.log(a.charCodeAt(0));//48-57

let c = "i am23334 developer89";
let count =0;

for(let i=0; i<c.length;i++){
if(c.charCodeAt(i)>=48 && c.charCodeAt(i)<=57){
    count++;
}
}
<<<<<<< HEAD
console.log(count);
=======
console.log(count);
>>>>>>> 1ceb8e8ff3edc09a19305f2e12977b621605eff5
