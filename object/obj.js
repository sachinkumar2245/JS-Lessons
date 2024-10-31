//singleton
// Object.create

// object literals 

const mySym= Symbol("key1");
const JsUser={
    name: "sachin",
    "full Name": "Sachin Kumar",
    age: 24,
    [mySym]: "key2", //symbol syntax [mySym]
    location: "Lucknow",
    email: "sachin@google.com",
    isLoggedin: false,
    lastLoginDays:["Monday","Wednesday"]
}

// console.log(JsUser.location);
// console.log(JsUser["location"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

// JsUser.email="sachin@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email="sachin@microsoft.com";
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");
}
console.log(JsUser.greeting());


