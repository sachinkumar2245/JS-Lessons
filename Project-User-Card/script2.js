// const divEle = document.querySelector(".card-container");

function getDetails(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((user) => console.log(user));

  // console.log(request);

  // const response= request.then((response)=>{
  //     // console.log(response.status);
  //     return response.json();

  // })

  // response.then((user)=>{
  //     console.log(user);

  // })
}

getDetails(1);
