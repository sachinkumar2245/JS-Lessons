//de-structuring 

const course={
    coursename: "js in hindi",
    price: 90000,
    courseInstructor: 'er sachin '
};

console.log(course.coursename); // its a clumsy process extracts the beauty of the code

// neat or destructuring extraction of values from object;

const{coursename: subject}=course; // {} this paranthesis used for destructuring
console.log(subject);


// {
//     "name":"hitest",
//     "branch":"chemical engg",
//     "graduated":"true"
// }

[
    {},
    {},
    {}
]
