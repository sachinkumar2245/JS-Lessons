const divEle = document.querySelector(".card-container");

function getDetails(id) {
  const req = new XMLHttpRequest();

  req.open("GET", `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener("load", function () {
    // console.log(req.responseText);
    const UserData = JSON.parse(this.responseText);
    console.log(UserData);
    displayUsers(UserData, "beforeend", "other");

    const req2 = new XMLHttpRequest();
    req2.open("GET", `https://dummyjson.com/users/${id - 1}`);
    req2.send();
    req2.addEventListener("load", function () {
      if (req2.status===404) {
        return;
      }
      const UserData = JSON.parse(this.responseText);
      console.log(UserData);
      displayUsers(UserData, "afterbegin", "other");

      const req3 = new XMLHttpRequest();
      req3.open("GET", `https://dummyjson.com/users/${id + 1}`);
      req3.send();
      req3.addEventListener("load", function () {
        const UserData = JSON.parse(this.responseText);
        console.log(UserData);
        displayUsers(UserData, "beforeend", "other");
      });
    });
  });
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

getDetails(2);
