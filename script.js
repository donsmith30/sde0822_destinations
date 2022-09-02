document.getElementById("addBtn").addEventListener("click", getUserInput);

var cardsList = [];

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

  //get stars and then change them to not being buttons

  const cardSpot = document.getElementById("yellow_border");

  const content = `<div class="card" style="width: 100%;" id="restaurant${cardsList.push(
    restInput
  )}">
  <img src="${picInput}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${restInput}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${locInput}</h6>
    <h6 class="card-subtitle mb-2">${starInput}</h6>
    <p class="card-text">${descInput}</p>
    <div
    id="starRatings"
    class="btn-group"
    role="group"
    aria-label="Basic example"
  >
    <a href="https://www.google.com/search?q=${restInput}+%26+${locInput}" class="btn btn-primary"  target="_blank">Google it!</a>
    <button type="button" class="btn btn-danger" onClick="deleteCard(this)">
                Delete
              </button>
              <button type="button" class="btn btn-warning" onClick="editCard(this)">
                Edit
              </button>
    </div>
  </div>
</div>
<br>`;
  cardSpot.innerHTML += content;

  document.querySelector("#restInput").value = "";
  document.querySelector("#locInput").value = "";
  document.querySelector("#picInput").value = "";
  document.querySelector("#descInput").value = "";
  resetStars();
}

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
  let elemId = elem.parentNode.parentNode.parentNode.id;
  document.getElementById(`${elemId}`).replaceWith("");
}

//prompts to edit!
function editCard(elem) {
  const elemId = elem.parentNode.parentNode.parentNode.id;
  var newName = prompt("Enter a new name");
  var newLocation = prompt("Enter a new location");
  var newPic = prompt("Enter a new new pic URL");
  var newDesc = prompt("Enter new description");
  var newStars = prompt("Enter new rating 1-5");

  starNum = newStars - 1;

  setStars(starNum);
  const starInput = document.getElementById("starRatings").innerHTML;
  alert(`editing ${elemId}`);
  const content = `
  <img src="${newPic}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${newName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${newLocation}</h6>
    <h6 class="card-subtitle mb-2">${starInput}</h6>
    <p class="card-text">${newDesc}</p>
    <div
    id="starRatings"
    class="btn-group"
    role="group"
    aria-label="Basic example"
  >
    <a href="https://www.google.com/search?q=${newName}+%26+${newLocation}" class="btn btn-primary"  target="_blank">Google it!</a>
    <button type="button" class="btn btn-danger" onClick="deleteCard(this)">
                Delete
              </button>
              <button type="button" class="btn btn-warning" onClick="editCard(this)">
                Edit
              </button>
    </div>
  </div>
`;
  document.getElementById(`${elemId}`).innerHTML = content;
  resetStars();
}
