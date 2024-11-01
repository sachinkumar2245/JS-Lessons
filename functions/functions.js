// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addNumbers(3,5);


function addNumbers(num1,num2){
    let result= num1+num2;
    return result

}

console.log(addNumbers(3,4)); // 
// let result = addNumbers(3,4);
// Without a return statement in the function, this would output "result: undefined"
// because the function does not return any value. To store and use the result 
// outside the function, we need to add a return statement inside the function.

function loginuserMessage(username="sachin"){
    if(!username){
        console.log("pls entr an username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginuserMessage("sachin"));

console.log(loginuserMessage("sunita")); // this will print undefined instead of null 
