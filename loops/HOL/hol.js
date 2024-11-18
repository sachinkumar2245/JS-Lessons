// for of

// const arr=[1,3,2,3,4,3];
// for (const num of arr ) {//is a loop designed to iterate through the elements 
//                            //of an iterable (like arrays, strings, etc.).
//     console.log(num);
    
// }

// const str = "hello";
// for (const char of str) {
//     console.log(`each char is ${char}`); // output h e l l o

// }

// maps

const map = new Map();

map.set('IN', "India"); // map.set(key,value) proper syntax
map.set('USA', 'united states of assohles');
map.set("Fr", "France");


// console.log(
//     map
// );

for (const [key,value] in map) {
    console.log(key,value);
    
    
}

// objects are not iteratable using for of loop it throws an error stating objects are not iterable








