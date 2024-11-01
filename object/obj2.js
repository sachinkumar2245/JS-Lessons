// const tinderUser = new Object();

const tinderUser={};

tinderUser.id ="123ab";
tinderUser.name="sachin";
tinderUser.isLoggedin=false;
tinderUser.matchDay=["Monday","Tuesday"];
// console.log(tinderUser);

if(tinderUser.isLoggedin==false){
    tinderUser.isLoggedin=true;
    
}
// console.log(tinderUser);

const regularUser= {
    email:"random@random.com",
    fullName: {
        firstName: "sachin",
        lastName: "Kumar"
    }
}
// console.log(regularUser);

const users = [
    {
        id:1,
        email: "sachin@sachin.com"

    },

    {
        id:2,
        email: "achin@sachin.com"

    },
    {
        id:14,
        email: "sachin@achin.com"

    },
    {
        id:13,
        email: "sachin@sachn.com"

    }
    ,
    {
        id:12,
        email: "sachin@sahin.com"

    },
    {
        id:29,
        email: "sacin@sachin.com"

    }
]
console.log(users[0].email);

// console.log(tinderUser);

console.log(Object.keys(tinderUser)); //output array
console.log(Object.values(tinderUser)); //similar output
console.log(Object.entries(tinderUser));// outputs as nested arrays of keys and values
console.log(Object.keys(users)); 
console.log(Object.values(users));


