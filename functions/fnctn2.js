function calculateCartPrice(...num1){ //... is called rest parameter it allows function to accept indefinite no of arrays

    return num1
}     

// console.log(calculateCartPrice(200,400,599,344));

const user={
    username: "sachin",
    price:  199
};

function handleObj(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
};

handleObj({
    username: "sahil",
    price: `200$`
});

const myNewArray = [200,44,343,4,353];

// const sdf= ["sa","sad","sadf"]; 

function returnSecondVaue(getArray){ //this function returns the second value of the passed array in the function as an argument
    return getArray[1];
};

console.log(returnSecondVaue(myNewArray));
// console.log(returnSecondVaue(sdf));
