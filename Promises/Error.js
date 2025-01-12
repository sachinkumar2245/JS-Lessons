function getDetails(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("It does not match any data");
      }
      return response.json();
    })
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.error(err);
    });
}

getDetails(10);