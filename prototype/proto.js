// let myName = "sachin";

// console.log(myName.trueLength());

//kahani ka time

const sa= "sa";
let myHeroes = ["ironman","spiderman"];

let heroPower={
    ironmam: "thrusters",
    spiderman: "sling",
    spidyPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }

}

Object.prototype.sachin= function(){
    console.log(`sachin is present in all objects`);
    
}

// heroPower.sachin();
// myHeroes.sachin();

// sa.sachin();

//inheritance 


const user = {
    name: "hey",
    email: "hey@hey.com" 
}
const teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport= {
    makeAssignment: "js assignment",
    fulltime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user;  //its kinda outdated approach

// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher);

let anotherUser = "SachinKUmar";

String.prototype.trueLenght= function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True lenght is: ${this.trim().length}`);
    
    
    
}

anotherUser.trueLenght();
