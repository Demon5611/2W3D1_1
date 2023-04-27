let database = [
  {
    name: "Iron Man",
    bio: `Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics.`,
    path: "./img/iron-man.png",
  },
  {
    name: "Jake",
    bio: `Jake the Dog is a main character in the American television
     series Adventure Time created by Pendleton Ward.`,
    path: "./img/jake.png",
  },
  {
    name: "Mario",
    bio: `Mario is a fictional character in the Mario video game,
     owned by Nintendo and created by Miyamoto`,
    path: "./img/mario.png",
  },
  {
    name: "Scream",
    bio: `Scream is a 1996 American comedy slasher film directed by Wes Craven and written by Kevin Williamson.`,
    path: "./img/scream.png",
  },
  {
    name: "Homer Simpson",
    bio: `Homer Jay Simpson is a fictional character and the protagonist 
    of the American animated sitcom The Simpsons.`,
    path: "./img/simpson.png",
  },
  {
    name: "Stormtrooper",
    bio: `Stormtroopers, nicknamed "bucketheads"
     and—after the Battle of Endor—Remnant Stormtroopers.`,
    path: "./img/stormtrooper.png",
  },
];

let body = document.querySelector("body");

database.forEach((result, i) => {
  // Create card element
  cloneBox = document.createElement("div");
  cloneBox.className = "card";

  // Construct card content
  cloneBox.innerHTML = `
  <img src='${database[i].path}'>
  <div class='card-body'>
  <h5>${database[i].name}</h5>
  <p>${database[i].bio}</p>
  </div>
  `;
  body.appendChild(cloneBox);
});

//==========================================
// let newCard = document.querySelector(".card");
// let newDiv = document.createElement("div");
// newDiv.className = "card";
// let newImg = document.createElement("img");
// newImg.src = "./img/iron-man.png";
// newDiv.appendChild(newImg);
// newCard.appendChild(newDiv);
// document.body.appendChild(newCard);

// let innerDiv = document.createElement("div");
// innerDiv.className = "card-body";
// let h5 = (document.createElement("h5").innerText = "Iron Man");
// let p = document.createElement("p");
// p.innerText =
//   "Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics.";
// innerDiv.append(h5);
// innerDiv.append(p);
// newDiv.appendChild(innerDiv);
