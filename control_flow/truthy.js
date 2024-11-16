const userEmail =[]

// if (userEmail) {
//     console.log("got user email");
    
// } else{
//     console.log("dont have user email");
    
// }

// falsy values
// false , 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){} empty function

if (userEmail.length===0) {
    console.log("array is empty");
    
}

const emptyObj={};

if (Object.keys(emptyObj).length===0){ // this is the the syntax to check if the obj is empty
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null defined ---> its made only for null and undefined

let val1;
//val1=5 ?? 10; // 5 will be assigned
// val1= null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 2 ?? 3;

console.log(val1);

// terniary operator 

// condition ? true  : false

const iceTeaPrice =100;

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");





