const myObj= {
    js: 'javascript',
    cpp: "C++",
    rb: "ruby",
    swift: "swift by people"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`); // this is the way to iterate in an object
    
}

const programming=['js', 'rb'];

// for (const key in programming) {
//     console.log(programming[key]);
    
// }

// programming.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    
// })

let myPg= [
    {
        sachin: 'kumar',
        nigga: 'sahil'
    },

    {
        anxiety: 'ki maa ki chut',
        nigga: 'nigeria'
    }
]

myPg.forEach((item)=>{
    console.log(item.nigga);
    
})