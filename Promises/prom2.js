//promises based api is fetch 

const req  = new Promise((resolve, reject)=>{
    setTimeout(() => {
        // console.log("Promise resolved");
        reject(
            "Sahil resolved"
        )
        
    }, 1000);
})

req.catch((err)=>{
    console.log(err);
    
})

console.log(req);

