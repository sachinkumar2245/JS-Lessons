const divEle = document.querySelector('.card-container');

async function getDetails(id){
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const userdata = await response.json();
    displayUsers(userdata, 'beforeend')
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

getDetails(1)