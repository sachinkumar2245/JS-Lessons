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
