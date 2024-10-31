const marvel_heores = ["ironman", "thor", "hawkeye", "scarletwhich", "natasha"];
const dc_heroes = ["superman", "batman", "flash", "wonderwoman"];

// marvel_heores.push(dc_heroes); it pushesh on existing array

// console.log(marvel_heores);
// console.log(marvel_heores[3],[1]);
// console.log(marvel_heores[4]);

//const all_heroes = marvel_heores.concat(dc_heroes); // it concats on new array

// console.log(all_heroes);

const all_new_heroes= [...marvel_heores, ...dc_heroes]; // it works similarly like concat and we can use multiple variables
// console.log(all_new_heroes);

const anther_arr=[1,2,3,[1,2,3,[2,3,4]],9,19,[1,2,3,[3,4,5]]];

const real_another_array= anther_arr.flat(Infinity); // combines all arrays into one
console.log(real_another_array);

const sa= "n";
const sb= "Kumar"
console.log(Array.isArray("Sachin")); //it will check the value in "isArray" 
console.log(Array.from(`sachi${sa}${sb}`)); //it will converrt the string into "array"
console.log(Array.from({name: "sachin"})); //interesting  //it will return an empty array;


let score1=100;
let score2=100;
let score3=60;
let score4=90;

console.log(Array.of(score1,score2,score3,score4));
