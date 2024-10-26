let new_string= new String("sachinKumar");

// console.log(new_string[0]);
console.log(new_string.at(-1)); // Returns a new String consisting of the single UTF-16 code unit located at the specified index.
                               // mroe versatile according modern enviornments
                            1  //@param index — The zero-based index of the desired code unit. A negative index will count back from the last item

                            
console.log(new_string.charAt(0)); // "charAt function returns the character at a specified index"

console.log(new_string[0]); // its a shorter version of writing charAt method

console.log(new_string.charCodeAt(0)); // Returns the Unicode value of the character at the specified location.

console.log(new_string.concat("shalu")); // concateneates two strings 
console.log(new_string.length); // its a property of string or arrays which returns the length of the string
console.log(new_string.constructor); //gives the constructor function that built the object; 
console.log(new_string.indexOf("i")); 
console.log(new_string.localeCompare("sachin")); // it retruns integer values for eg- if the calling string is equal its 0, if its greater value is 1, or negative its value is -1

// console.log(new_string.replace( "Kumar", "shalu"));
console.log(new_string.slice(-8,4));
