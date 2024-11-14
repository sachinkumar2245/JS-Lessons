const user ={
    username: "hitesh",
    price: 90,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage();
user.username="sam";
user.welcomeMessage();
 // in browser global object is window thats why we can use various funcationalities of it!

 