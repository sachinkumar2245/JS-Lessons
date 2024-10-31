// array

const myArr= [0,1,2,3,4,5,4];

// array methods
myArr.push(6);
myArr.push(7);
myArr.pop(); //pop method doenst take any arguments it delete the last element from the array;

myArr.unshift(9);
myArr.shift();
//const newArr = myArr.filter(item => item !== 4); filter out specifin elements from the array;
console.log(myArr); 
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr=myArr.join();
console.log(myArr);
console.log(typeof newArr);

// slice, splice
console.log("a", myArr);

const myN1= myArr.slice(1,3);

console.log(myN1);
console.log("b", myArr);

const mYn2= myArr.splice(1,3);
console.log(mYn2);

