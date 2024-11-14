//Immediately Invoked function expressions

(function chai(){ //named iife
    console.log("db con");
    
}) ();  // to avoid the global scope pollution due to global scope variables or the different declarations
       

( (name)=>{ //unamed iife
    console.log(`db tow ${name}`);
    
})("sachin")