function one(){
    const username= "sachin";

    function two(){
        const website= "youtube";
        console.log(username);
        
    }
    console.log(website);

    two();
    
}
// one();

if (true){
    const username = "sachin";

    if (username == "hitesh"){
        const website="youtube";
        console.log(username + website);
        
    }

    
}

// +++++++++++++++++++++++++ interesting +++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1;
}

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(4));
