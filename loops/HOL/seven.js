const My_numbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums= My_numbers.map((num) =>  num+1);
// console.log(newNums); // its returning an array;

const newNums =My_numbers
                .map((num) => num*10)
                .map((num) => num +1)
                .filter((num) => num>=40);

console.log(newNums);


