// if statement

const a = 44;
const b= 55;
let total;  // operators --> <,>, <=, >=, !=, ===, !==
if (2==="2"){ // double equal to checks for the value comparision and 
    total = a+b; //triple equal to sign checks for the value as well as type comparision
    
}
// console.log(total); 

// const score = 200;

// if (score>50) {
//     const pwr = "fly";
//     console.log(`Use power: ${pwr}`);
    
// };


// const balance =1000;

// if (balance>500) console.log("test"), console.log("test2");  // not a good practice 

// if (balance<500) {
//     console.log("less than 500");
    
// } else if(balance<900){
//     console.log("less than 900");
    
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle=false;
const loggedInFromEmail = true;


if (userLoggedIn && debitCard ) {
    console.log("allow to buy course");
    
}
 
if(loggedInfromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}










