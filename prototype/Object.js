function multiply5(num){
    return num *  5;
}

multiply5.power=2;

// console.log(multiply5(5));
// console.log(multiply5.power);
// console.log(multiply5.prototype);  //in js everything is a object 

function CreateUser(username, score){
    this.username=username;
    this.score=score;
}

CreateUser.prototype.increment= function(){
    this.score++;
    console.log(`this is increment: ${this.score}`)
}

CreateUser.prototype.printMe= function(){
    console.log(`Score is: ${this.score}`);
    
}

// const chai = new CreateUser("chai",24);
const tea = new CreateUser("tea", 250);

// chai.printMe();
console.log(tea.printMe());
console.log(tea.increment());







