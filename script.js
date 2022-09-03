//buttons

document.getElementById("addBtn").addEventListener("click", getUserInput);

document.getElementById("star0").addEventListener("click", function () {
  setStars(0);
});
document.getElementById("star1").addEventListener("click", function () {
  setStars(1);
});
document.getElementById("star2").addEventListener("click", function () {
  setStars(2);
});
document.getElementById("star3").addEventListener("click", function () {
  setStars(3);
});
document.getElementById("star4").addEventListener("click", function () {
  setStars(4);
});

//global vars
var cardsList = [];
const cardSpot = document.getElementById("yellow_border");

function getUserInput() {
  const restInput = document.querySelector("#restInput").value;
  console.log(restInput);
  const locInput = document.querySelector("#locInput").value;
  console.log(locInput);
  const picInput = document.querySelector("#picInput").value;
  console.log(picInput);
  const descInput = document.querySelector("#descInput").value;
  console.log(descInput);
  const starInput = document.getElementById("starRatings").innerHTML;
  cardsList.push(restInput);
  const idInput = cardsList.length;
  //create new div
  updateReviews(idInput, restInput, locInput, picInput, descInput, starInput);
  document.querySelector("#restInput").value = "";
  document.querySelector("#locInput").value = "";
  document.querySelector("#picInput").value = "";
  document.querySelector("#descInput").value = "";
  resetStars();
}

function updateReviews(
  idInput,
  restInput,
  locInput,
  picInput,
  descInput,
  starInput
) {
  var div = document.createElement(`div`);
  div.className = "card";
  div.style = "width: 100%";
  div.id = idInput;

  const div2 = document.createElement(`div`);
  div2.className = "card-body";

  const div3 = document.createElement(`div`);
  div3.classname = "button-group";
  div3.role = "group";

  const img = document.createElement(`img`);
  img.innerText = picInput;
  img.src = picInput;
  img.alt = restInput;
  img.className = "picClass";

  const h5 = document.createElement(`h5`);
  h5.className = "card-title restClass";
  h5.innerText = restInput;

  const h6 = document.createElement(`h6`);
  h6.className = "card-subtitle mb-2 text-muted locClass";
  h6.innerText = locInput;

  const h62 = document.createElement(`h6`);
  h62.className = "card-title";
  h62.innerHTML = starInput;

  const p = document.createElement(`p`);
  p.className = "card-text descClass";
  p.innerText = descInput;

  const btn1 = document.createElement(`a`);
  btn1.href = `https://www.google.com/search?q=${restInput}+%26+${locInput}`;
  btn1.className = "btn btn-primary";
  btn1.target = "_blank";
  btn1.innerText = "Google it!";

  const btn2 = document.createElement(`button`);
  btn2.type = "button";
  btn2.className = "btn btn-danger";
  btn2.setAttribute("onClick", "deleteCard(this)");
  btn2.innerText = "delete";

  const btn3 = document.createElement(`button`);
  btn3.type = "button";
  btn3.className = "btn btn-warning";
  btn3.setAttribute("onClick", "editCard(this)");
  btn3.innerText = "edit";

  div.append(img, div2, div3);
  div2.append(h5, h6, h62, p);
  div3.append(btn1, btn2, btn3);

  if (document.getElementById(idInput) === null) {
    cardSpot.appendChild(div);
  } else {
    document.getElementById(idInput).replaceWith(div);
  }
}

//   const content = `<div class="card" style="width: 100%;" id="restaurant${cardsList.push(
//     restInput
//   )}">
//   <img src="${picInput}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${restInput}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${locInput}</h6>
//     <h6 class="card-subtitle mb-2">${starInput}</h6>
//     <p class="card-text">${descInput}</p>
//     <div
//     id="starRatings"
//     class="btn-group"
//     role="group"
//     aria-label="Basic example"
//   >
//     <a href="https://www.google.com/search?q=${restInput}+%26+${locInput}" class="btn btn-primary"  target="_blank">Google it!</a>
//     <button type="button" class="btn btn-danger" onClick="deleteCard(this)">
//                 Delete
//               </button>
//               <button type="button" class="btn btn-warning" onClick="editCard(this)">
//                 Edit
//               </button>
//     </div>
//   </div>
// </div>
// <br>`;

// cardSpot.innerHTML += content;

function resetStars() {
  for (let index = 0; index < 5; index++) {
    document.getElementById(`star${index}`).classList.remove("checked");
  }
}

function setStars(num) {
  resetStars();
  for (let index = 0; index < num + 1; index++) {
    document.getElementById(`star${index}`).classList.toggle("checked");
  }
}

function deleteCard(elem) {
  let elemId = elem.parentNode.parentNode.id;
  document.getElementById(`${elemId}`).replaceWith("");
}

//prompts to edit!
function editCard(elem) {
  const idInput = elem.parentNode.parentNode.id;
  const restInput = prompt(
    "Enter a new name",
    document.getElementById(idInput).querySelector(".restClass").innerText
  );
  const locInput = prompt(
    "Enter a new location",
    document.getElementById(idInput).querySelector(".locClass").innerText
  );
  const picInput = prompt(
    "Enter a new new pic URL",
    document.getElementById(idInput).querySelector(".picClass").src
  );
  const descInput = prompt(
    "Enter new description",
    document.getElementById(idInput).querySelector(".descClass").innerText
  );
  const newStars = prompt("Enter new rating 1-5");

  starNum = newStars - 1;

  setStars(starNum);
  const starInput = document.getElementById("starRatings").innerHTML;

  updateReviews(idInput, restInput, locInput, picInput, descInput, starInput);

  resetStars();
}
