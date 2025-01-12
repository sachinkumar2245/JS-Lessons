const divEle = document.querySelector(".card-container");

function getDetails(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("ID does not match any data")
      }
      return response.json();
    })
    .then((user) =>{
      console.log(user);
      
      displayUsers(user, 'beforeend');
      return fetch(`https://dummyjson.com/users/${id}`)
    })
    .catch((err) => {
      console.error(err);
      
    }) 
    // .then((user) => console.log(user));

  // console.log(request);

  // const response= request.then((response)=>{
  //     // console.log(response.status);
  //     return response.json();

  // })

  // response.then((user)=>{
  //     console.log(user);

  // })
}

function displayUsers(UserData, pos, className = "") {
  const card = `<div class="user-card ${className}"> 
            <img src=${UserData.image} alt="Profile Image" />
            <h3>${UserData.firstName}</h3>
            <h3>${UserData.lastName}</h3>
            <p class="email">${UserData.email}</p>
            <button class="btn">View Profile</button>
          </div`; //populating the dom I mean the card
  // divEle.innerHTML= card;

  divEle.insertAdjacentHTML(pos, card);
}



getDetails(1);
getDetails(3);
getDetails(4);
