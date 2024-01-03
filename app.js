console.log("hi");

const form = document.getElementById("form");
const cards = document.getElementsByClassName("card");
const radio = document.getElementsByTagName("input");
const thanks = document.getElementById("thanks");
const vote = document.getElementById("vote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkedRadio();
});

function checkedRadio() {
  let selectRadio;
  for (const radioButton of radio) {
    if (radioButton.checked) {
      selectRadio = radioButton["id"];
      break;
    }
  }
  if (selectRadio == null) {
    return;
  } else {
    displayVote(selectRadio);
    togglePopup();
  }
}

function togglePopup() {
  for (let item of cards) {
    item.classList.toggle("invisible");
  }
}

function displayVote(selectRadio) {
  vote.innerText = selectRadio;
}
