//    node scope/scope.js

let a=33; 
var c = 300;


if (true){ //block scope of the defined variables a,b,c;
    let a= 10; 
    const b=20;
     c=2;
}

console.log(a); //this is global scope a and it will always print 33;
// console.log(b);
console.log(c);