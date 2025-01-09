const x = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('Promises intiated');
    resolve({name: "Sachin", rollNo:22})
    // reject("Request has been rejected");
  }, 1000);
});

x.then((value) => {
  console.log(value);
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>console.log('request completed'));


// console.log(x);

